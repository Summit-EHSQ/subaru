param(
    [Parameter(Mandatory = $true)]
    [string]$ApiToken,

    [Parameter(Mandatory = $true)]
    [long]$ProjectId,

    [Parameter(Mandatory = $true)]
    [string]$OutputPath
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

$baseUrl = 'https://www.bugherd.com/api_v2'
$credentialBytes = [Text.Encoding]::ASCII.GetBytes("${ApiToken}:x")
$headers = @{
    Authorization = 'Basic ' + [Convert]::ToBase64String($credentialBytes)
    Accept = 'application/json'
}

function Invoke-BugHerdGet {
    param([Parameter(Mandatory = $true)][string]$Uri)

    $attempt = 0
    while ($true) {
        $attempt++
        try {
            return Invoke-RestMethod -Method Get -Uri $Uri -Headers $headers -TimeoutSec 60
        }
        catch {
            $statusCode = $null
            if ($_.Exception.Response) {
                $statusCode = [int]$_.Exception.Response.StatusCode
            }

            if ($attempt -ge 5 -or $statusCode -notin @(429, 500, 502, 503, 504)) {
                throw
            }

            Start-Sleep -Seconds ([Math]::Min(30, [Math]::Pow(2, $attempt)))
        }
    }
}

function Get-ArrayValue {
    param(
        [Parameter(Mandatory = $true)]$Response,
        [Parameter(Mandatory = $true)][string]$PropertyName
    )

    if ($Response.PSObject.Properties.Name -contains $PropertyName) {
        return @($Response.$PropertyName)
    }

    return @($Response)
}

$listedTasks = [System.Collections.Generic.List[object]]::new()
$seenTaskIds = [System.Collections.Generic.HashSet[string]]::new()
$page = 1
$reportedCount = $null

while ($true) {
    $listUri = "$baseUrl/projects/$ProjectId/tasks.json?page=$page"
    $listResponse = Invoke-BugHerdGet -Uri $listUri
    $pageTasks = @(Get-ArrayValue -Response $listResponse -PropertyName 'tasks')

    if ($null -eq $reportedCount -and
        $listResponse.PSObject.Properties.Name -contains 'meta' -and
        $null -ne $listResponse.meta -and
        $listResponse.meta.PSObject.Properties.Name -contains 'count') {
        $reportedCount = [int]$listResponse.meta.count
    }

    foreach ($task in $pageTasks) {
        if ($null -ne $task -and $null -ne $task.id -and $seenTaskIds.Add([string]$task.id)) {
            $listedTasks.Add($task)
        }
    }

    if ($pageTasks.Count -eq 0) { break }
    if ($null -ne $reportedCount -and $listedTasks.Count -ge $reportedCount) { break }

    $page++
    if ($page -gt 10000) { throw 'Pagination safety limit exceeded.' }
}

if ($null -ne $reportedCount -and $listedTasks.Count -ne $reportedCount) {
    throw "Task list count mismatch: API reported $reportedCount but retrieved $($listedTasks.Count)."
}

$details = [System.Collections.Generic.List[object]]::new()
$position = 0
foreach ($listedTask in $listedTasks) {
    $position++
    $detailUri = "$baseUrl/projects/$ProjectId/tasks/$($listedTask.id).json"
    $detailResponse = Invoke-BugHerdGet -Uri $detailUri
    $detail = if ($detailResponse.PSObject.Properties.Name -contains 'task') {
        $detailResponse.task
    } else {
        $detailResponse
    }

    if ($null -eq $detail -or [string]$detail.id -ne [string]$listedTask.id) {
        throw "Task detail response mismatch for task $($listedTask.id)."
    }

    $details.Add($detail)
    if (($position % 25) -eq 0 -or $position -eq $listedTasks.Count) {
        Write-Output "Retrieved details: $position/$($listedTasks.Count)"
    }
}

$columnNames = [System.Collections.Generic.List[string]]::new()
$seenColumns = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
foreach ($preferred in @('id', 'local_task_id', 'project_id', 'title', 'description', 'status', 'status_id', 'priority', 'priority_id')) {
    if ($seenColumns.Add($preferred)) { $columnNames.Add($preferred) }
}
foreach ($detail in $details) {
    foreach ($property in $detail.PSObject.Properties) {
        if ($seenColumns.Add($property.Name)) { $columnNames.Add($property.Name) }
    }
}

$rows = foreach ($detail in $details) {
    $row = [ordered]@{}
    foreach ($columnName in $columnNames) {
        $property = $detail.PSObject.Properties[$columnName]
        if ($null -eq $property -or $null -eq $property.Value) {
            $row[$columnName] = $null
        }
        elseif ($property.Value -is [string] -or $property.Value -is [ValueType]) {
            $row[$columnName] = $property.Value
        }
        else {
            $row[$columnName] = $property.Value | ConvertTo-Json -Depth 100 -Compress
        }
    }
    [pscustomobject]$row
}

$outputDirectory = Split-Path -Parent $OutputPath
if ($outputDirectory -and -not (Test-Path -LiteralPath $outputDirectory)) {
    New-Item -ItemType Directory -Path $outputDirectory | Out-Null
}

$rows | Export-Csv -LiteralPath $OutputPath -NoTypeInformation -Encoding UTF8

$csvRows = @(Import-Csv -LiteralPath $OutputPath)
if ($csvRows.Count -ne $details.Count) {
    throw "CSV verification failed: expected $($details.Count) rows but found $($csvRows.Count)."
}

Write-Output "CSV_PATH=$OutputPath"
Write-Output "TASK_COUNT=$($details.Count)"
Write-Output "COLUMN_COUNT=$($columnNames.Count)"
