[CmdletBinding()]
param([switch] $Confirmed)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
if (-not $Confirmed) { throw 'Explicit confirmation of the prepared Forecast import is required before execution.' }
$operationRoot = [System.IO.Path]::GetFullPath($PSScriptRoot)
$workspaceRoot = [System.IO.Path]::GetFullPath((Join-Path $operationRoot '..\..'))
$helper = 'C:\Users\DaveMcLean\.codex\skills\forecast-task-manager\scripts\invoke-forecast-api.ps1'
$manifest = Get-Content -LiteralPath (Join-Path $operationRoot 'import-manifest.json') -Raw | ConvertFrom-Json
$sourcePath = Join-Path $workspaceRoot $manifest.source
if ((Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash.ToLowerInvariant() -ne $manifest.sourceSha256) { throw 'The source plan changed after the preview. Rebuild and review the import.' }
function Read-Forecast([string] $RelativePath) {
    $json = & $helper -Method GET -Path $RelativePath
    return ($json | ConvertFrom-Json)
}
function Write-OperationText([string] $Path, [string] $Text) {
    # OneDrive can briefly lock recently changed receipts. Retry only local writes, never API calls.
    for ($attempt = 0; $attempt -lt 20; $attempt++) {
        try { [System.IO.File]::WriteAllText($Path, $Text, [System.Text.UTF8Encoding]::new($false)); return }
        catch { if ($attempt -eq 19) { throw }; Start-Sleep -Milliseconds 250 }
    }
}
function Get-PlainDescription([string] $Html) {
    $plain = $Html -replace '(?i)<br\s*/?\s*>', "`n" -replace '(?i)</(?:div|p|li)>', "`n" -replace '<[^>]*>', ''
    $plain = [System.Net.WebUtility]::HtmlDecode($plain)
    return (($plain -replace '\s+', ' ').Trim())
}
function Get-TextHash([string] $Value) {
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try { return ([System.BitConverter]::ToString($sha.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($Value)))).Replace('-', '').ToLowerInvariant() }
    finally { $sha.Dispose() }
}
function Read-ParentChildren {
    $items = @(Read-Forecast ('/v3/tasks/' + $manifest.parent.id + '/children'))
    if ($items.Count -eq 1 -and $items[0] -is [array]) { $items = $items[0] }
    $script:verifiedChildIds = @($items | ForEach-Object { $_.id })
    return $items
}
function Assert-TaskMatches($Actual, $Prepared) {
    if ($Actual.project_id -ne $manifest.project.id -or $Actual.title -cne $Prepared.title -or $Actual.id -notin $script:verifiedChildIds) { throw ('Task identity/hierarchy differs for ' + $Prepared.sourceTaskId) }
    if ($Actual.PSObject.Properties.Name -contains 'parent_task_id' -and $Actual.parent_task_id -ne $manifest.parent.id) { throw ('Explicit parent differs for ' + $Prepared.sourceTaskId) }
    $actualHash = Get-TextHash (Get-PlainDescription $Actual.description)
    if ($actualHash -ne $Prepared.plainDescriptionSha256) { throw ('Task description differs for ' + $Prepared.sourceTaskId) }
}
function Get-VerifiedPayloadPath($Task) {
    $resolved = [System.IO.Path]::GetFullPath((Join-Path $operationRoot $Task.payloadFile))
    if (-not $resolved.StartsWith($operationRoot + '\', [System.StringComparison]::OrdinalIgnoreCase) -or [System.IO.Path]::GetFileName($resolved) -cne ('payload-' + $Task.sourceTaskId + '.json')) { throw 'Payload path is outside the verified operation files.' }
    return $resolved
}
$projects = @(Read-Forecast '/v1/projects')
if ($projects.Count -eq 1 -and $projects[0] -is [array]) { $projects = $projects[0] }
$project = @($projects | Where-Object { $_.id -eq $manifest.project.id -and $_.company_project_id -eq 544 -and $_.custom_project_id -eq 'P544' })
if ($project.Count -ne 1 -or -not $project[0].use_sub_tasks) { throw 'Project identity or subtask support changed.' }
$parent = Read-Forecast '/v3/tasks/company_task_id/24719'
if ($parent.id -ne $manifest.parent.id -or $parent.project_id -ne $manifest.project.id -or $parent.title -cne $manifest.parent.title) { throw 'Parent task changed after preparation.' }
$projectTasks = @(Read-Forecast ('/v3/projects/' + $manifest.project.id + '/tasks'))
if ($projectTasks.Count -eq 1 -and $projectTasks[0] -is [array]) { $projectTasks = $projectTasks[0] }
$initialChildren = @(Read-ParentChildren)
$results = [System.Collections.Generic.List[object]]::new()
$receiptPath = Join-Path $operationRoot 'import-results.json'
$previousCreatedIds = @(Get-ChildItem -LiteralPath $operationRoot -Filter 'create-response-IMP-*.json' -File | ForEach-Object { (Get-Content -LiteralPath $_.FullName -Raw | ConvertFrom-Json).id })
try {
    foreach ($prepared in $manifest.tasks) {
        $candidates = @($projectTasks | Where-Object {
            $_.title -ceq $prepared.title -or (Get-PlainDescription $_.description).Contains($prepared.marker) -or
            ($_.id -in $script:verifiedChildIds -and $_.title -match ('\b' + [regex]::Escape($prepared.sourceTaskId) + '\b'))
        })
        if ($candidates.Count -gt 1) { throw ('Multiple existing matches for ' + $prepared.sourceTaskId) }
        if ($candidates.Count -eq 1) {
            $actual = Read-Forecast ('/v3/tasks/' + $candidates[0].id)
            Assert-TaskMatches $actual $prepared
            $status = if ($actual.id -in $previousCreatedIds) { 'created' } else { 'skipped' }
            $result = [pscustomobject]@{ sourceTaskId=$prepared.sourceTaskId; status=$status; id=$actual.id; company_task_id=$actual.company_task_id; title=$actual.title; project_id=$actual.project_id; parent_task_id=$manifest.parent.id; descriptionVerified=$true; hierarchyVerified=$true }
            $results.Add($result)
            Write-Output ('Verified existing T' + $result.company_task_id + ' — ' + $result.title)
        }
        else {
            $payloadPath = Get-VerifiedPayloadPath $prepared
            $payload = Get-Content -LiteralPath $payloadPath -Raw | ConvertFrom-Json
            $fields = @($payload.PSObject.Properties.Name | Sort-Object)
            if (($fields -join ',') -cne 'description,parent_task_id,project_id,title') { throw 'Unexpected mutation field.' }
            if ($payload.project_id -ne $manifest.project.id -or $payload.parent_task_id -ne $manifest.parent.id -or $payload.title -cne $prepared.title -or (Get-TextHash $payload.description) -ne $prepared.descriptionSha256) { throw 'Payload changed after preview.' }
            $createdJson = & $helper -Method POST -Path '/v3/tasks' -BodyPath $payloadPath -Execute
            Write-OperationText (Join-Path $operationRoot ('create-response-' + $prepared.sourceTaskId + '.json')) ($createdJson -join "`n")
            $created = $createdJson | ConvertFrom-Json
            if (-not $created.id) { throw ('Create returned no task ID for ' + $prepared.sourceTaskId) }
            # Save identity immediately. If verification fails, a retry finds this task rather than posting another.
            $result = [pscustomobject]@{ sourceTaskId=$prepared.sourceTaskId; status='created'; id=$created.id; company_task_id=$null; title=$prepared.title; project_id=$manifest.project.id; parent_task_id=$manifest.parent.id; descriptionVerified=$false; hierarchyVerified=$false }
            $results.Add($result)
            Write-OperationText $receiptPath (ConvertTo-Json -InputObject @($results.ToArray()) -Depth 15)
            $actual = Read-Forecast ('/v3/tasks/' + $created.id)
            $currentChildren = @(Read-ParentChildren)
            Assert-TaskMatches $actual $prepared
            $result.company_task_id = $actual.company_task_id
            $result.descriptionVerified = $true
            $result.hierarchyVerified = $true
            $projectTasks += $actual
            Write-Output ('Created T' + $actual.company_task_id + ' — ' + $actual.title)
        }
        Write-OperationText $receiptPath (ConvertTo-Json -InputObject @($results.ToArray()) -Depth 15)
    }
    $children = @(Read-ParentChildren)
    foreach ($prepared in $manifest.tasks) {
        $matches = @($children | Where-Object { $_.title -ceq $prepared.title -and (Get-PlainDescription $_.description).Contains($prepared.marker) })
        if ($matches.Count -ne 1) { throw ('Final hierarchy/duplicate check failed for ' + $prepared.sourceTaskId) }
        $finalTask = Read-Forecast ('/v3/tasks/' + $matches[0].id)
        Assert-TaskMatches $finalTask $prepared
    }
    Write-OperationText (Join-Path $operationRoot 'verified-children.json') (ConvertTo-Json -InputObject @($children) -Depth 30)
    $summary = [pscustomobject]@{ project='P544'; parent='T24719'; created=@($results | Where-Object status -eq 'created').Count; skipped=@($results | Where-Object status -eq 'skipped').Count; updated=0; removed=0; failed=0; fullDescriptionsVerified=$true; hierarchyVerified=$true; duplicateFreeOnRerun=$true }
    Write-OperationText (Join-Path $operationRoot 'import-summary.json') ($summary | ConvertTo-Json -Depth 10)
    # Remove only the temporary payloads generated for this exact operation, after rechecking absolute paths.
    foreach ($prepared in $manifest.tasks) { $payloadPath = Get-VerifiedPayloadPath $prepared; if (Test-Path -LiteralPath $payloadPath -PathType Leaf) { Remove-Item -LiteralPath $payloadPath -Force } }
    $summary | ConvertTo-Json -Depth 10
}
catch {
    Write-OperationText (Join-Path $operationRoot 'import-failure.json') ([pscustomobject]@{ error=$_.Exception.Message; completed=@($results.ToArray()); stoppedOnFirstUnexpectedError=$true } | ConvertTo-Json -Depth 15)
    throw
}
