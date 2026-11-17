[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$apiHelper = 'C:/Users/DaveMcLean/.codex/skills/forecast-task-manager/scripts/invoke-forecast-api.ps1'
$operationDirectory = [IO.Path]::GetFullPath($PSScriptRoot)
$manifestPath = Join-Path $operationDirectory 'upload-manifest.json'
$receiptPath = Join-Path $operationDirectory 'publish-receipt.json'
$manifest = Get-Content -Raw -LiteralPath $manifestPath | ConvertFrom-Json
$operationRows = [System.Collections.Generic.List[object]]::new()

function Get-ForecastRecord {
    param([string] $ApiPath)
    $resultJson = & $apiHelper -Method GET -Path $ApiPath
    if ([string]::IsNullOrWhiteSpace(($resultJson -join ''))) { return $null }
    return ($resultJson | ConvertFrom-Json)
}

function Get-ComparableDescription {
    param([AllowNull()][string] $Html)
    $plain = [regex]::Replace($Html, '<[^>]+>', ' ')
    $decoded = [Net.WebUtility]::HtmlDecode($plain)
    return ([regex]::Replace($decoded, '\s+', ' ')).Trim()
}

function Save-Receipt {
    $receipt = [pscustomobject]@{
        project_id = $manifest.project.id
        project_name = $manifest.project.name
        created = @($operationRows | Where-Object operation -eq 'created').Count
        skipped = @($operationRows | Where-Object operation -eq 'skipped').Count
        updated = 0
        removed = 0
        failed = @($operationRows | Where-Object verification -eq 'failed').Count
        tasks = @($operationRows.ToArray())
    }
    $receipt | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath $receiptPath -Encoding utf8
}

$allProjects = @(Get-ForecastRecord -ApiPath '/v1/projects')
while ($allProjects.Count -eq 1 -and $allProjects[0] -is [array]) { $allProjects = $allProjects[0] }
$selectedProjects = @($allProjects | Where-Object { $_.id -eq $manifest.project.id -and $_.name -ceq $manifest.project.name })
if ($selectedProjects.Count -ne 1) { throw 'The selected project did not resolve to one exact ID/name match.' }
if (-not $selectedProjects[0].use_sub_tasks) { throw 'The selected project does not allow subtasks; project settings were not changed.' }

foreach ($task in $manifest.tasks) {
    $operationRow = $null
    try {
        $parentNumber = ([string] $task.parentTaskNumber).TrimStart('T')
        $parent = Get-ForecastRecord -ApiPath ('/v3/tasks/company_task_id/' + $parentNumber)
        if ($parent.id -ne $task.parentInternalId -or $parent.project_id -ne $manifest.project.id -or $parent.title -cne $task.parentTitle) {
            throw ('Parent identity changed for ' + $task.amendmentId + '; no mutation was sent for it.')
        }

        $payloadFile = (Resolve-Path -LiteralPath $task.payloadFile).Path
        $resolvedPayload = [IO.Path]::GetFullPath($payloadFile)
        if (-not $resolvedPayload.StartsWith($operationDirectory + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
            throw 'Payload path is outside the operation directory.'
        }
        $payload = Get-Content -Raw -LiteralPath $resolvedPayload | ConvertFrom-Json
        $payloadKeys = @($payload.PSObject.Properties.Name | Sort-Object)
        if (($payloadKeys -join ',') -cne 'description,parent_task_id,project_id,title') { throw 'The payload contains fields outside the approved creation scope.' }
        if ($payload.project_id -ne $manifest.project.id -or $payload.parent_task_id -ne $parent.id -or $payload.title -cne $task.title) { throw 'Payload does not match the approved mapping.' }

        $children = @(Get-ForecastRecord -ApiPath ('/v3/tasks/' + $parent.id + '/children'))
        while ($children.Count -eq 1 -and $children[0] -is [array]) { $children = $children[0] }
        $existing = @($children | Where-Object { $null -ne $_ -and ($_.title -ceq $task.title -or ([string] $_.description).Contains([string] $task.stableIdentifier)) })
        if ($existing.Count -gt 1) { throw ('Multiple matching amendment children found for ' + $task.amendmentId + '; no task was created.') }
        if ($existing.Count -eq 1) {
            $result = $existing[0]
            $operation = 'skipped'
        } else {
            $resultJson = & $apiHelper -Method POST -Path '/v3/tasks' -BodyPath $resolvedPayload -Execute
            $result = $resultJson | ConvertFrom-Json
            if ($null -eq $result -or $null -eq $result.id) { throw ('Creation returned no task ID for ' + $task.amendmentId + '. Reconcile by stable identifier before rerunning.') }
            $operation = 'created'
        }

        $operationRow = [pscustomobject]@{
            amendment_id = $task.amendmentId
            operation = $operation
            verification = 'pending'
            id = $result.id
            company_task_id = $result.company_task_id
            title = $result.title
            project_id = $result.project_id
            parent_task_id = $result.parent_task_id
            parent_task_number = $task.parentTaskNumber
            parent_title = $task.parentTitle
            stable_identifier = $task.stableIdentifier
            description_verified = $false
            duplicate_check_count = $null
            error = $null
        }
        $operationRows.Add($operationRow)
        Save-Receipt

        $verified = Get-ForecastRecord -ApiPath ('/v3/tasks/' + $result.id)
        if ($verified.project_id -ne $manifest.project.id -or $verified.parent_task_id -ne $parent.id -or $verified.title -cne $payload.title) { throw 'Created/existing task identity, project or parent verification failed.' }
        if ((Get-ComparableDescription -Html $verified.description) -cne (Get-ComparableDescription -Html $payload.description)) { throw 'The re-read description differs from the full intended task content.' }
        if (-not ([string] $verified.description).Contains([string] $task.stableIdentifier)) { throw 'The re-read task is missing its stable amendment identifier.' }

        $afterChildren = @(Get-ForecastRecord -ApiPath ('/v3/tasks/' + $parent.id + '/children'))
        while ($afterChildren.Count -eq 1 -and $afterChildren[0] -is [array]) { $afterChildren = $afterChildren[0] }
        $rerunMatches = @($afterChildren | Where-Object { $null -ne $_ -and ($_.title -ceq $task.title -or ([string] $_.description).Contains([string] $task.stableIdentifier)) })
        if ($rerunMatches.Count -ne 1 -or $rerunMatches[0].id -ne $verified.id) { throw 'The rerun duplicate check did not resolve to exactly the verified child.' }

        $operationRow.company_task_id = $verified.company_task_id
        $operationRow.title = $verified.title
        $operationRow.project_id = $verified.project_id
        $operationRow.parent_task_id = $verified.parent_task_id
        $operationRow.description_verified = $true
        $operationRow.duplicate_check_count = $rerunMatches.Count
        $operationRow.verification = 'passed'
        Save-Receipt
        [pscustomobject]@{amendment=$task.amendmentId;operation=$operation;task_number=('T' + $verified.company_task_id);parent=$task.parentTaskNumber;verified=$true} | ConvertTo-Json -Compress
    } catch {
        if ($null -eq $operationRow) {
            $operationRow = [pscustomobject]@{amendment_id=$task.amendmentId;operation='failed';verification='failed';error=$_.Exception.Message}
            $operationRows.Add($operationRow)
        } else {
            $operationRow.verification = 'failed'
            $operationRow.error = $_.Exception.Message
        }
        Save-Receipt
        throw ('Stopped on ' + $task.amendmentId + ': ' + $_.Exception.Message)
    }
}

foreach ($task in $manifest.tasks) {
    $temporaryPayload = [IO.Path]::GetFullPath((Resolve-Path -LiteralPath $task.payloadFile).Path)
    if (-not $temporaryPayload.StartsWith($operationDirectory + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Cleanup target is outside the operation directory.' }
    Remove-Item -LiteralPath $temporaryPayload
}

Get-Content -Raw -LiteralPath $receiptPath
