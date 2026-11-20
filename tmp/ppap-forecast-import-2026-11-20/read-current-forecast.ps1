[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'
$skillHelper = 'C:\Users\DaveMcLean\.codex\skills\forecast-task-manager\scripts\invoke-forecast-api.ps1'
$operationRoot = $PSScriptRoot
function Read-ForecastJson([string] $RelativePath) {
    $json = & $skillHelper -Method GET -Path $RelativePath
    if ($LASTEXITCODE -and $LASTEXITCODE -ne 0) { throw "Forecast helper failed for $RelativePath" }
    return ($json | ConvertFrom-Json)
}
$projects = @(Read-ForecastJson '/v1/projects')
if ($projects.Count -eq 1 -and $projects[0] -is [array]) { $projects = $projects[0] }
$matches = @($projects | Where-Object { $_.company_project_id -eq 544 -and $_.custom_project_id -eq 'P544' })
if ($matches.Count -ne 1) { throw 'P544 must resolve to one exact company project.' }
$project = $matches[0]
if (-not $project.use_sub_tasks) { throw 'P544 does not currently support subtasks; no project setting will be changed.' }
$parent = Read-ForecastJson '/v3/tasks/company_task_id/24719'
if ($parent.company_task_id -ne 24719 -or $parent.project_id -ne $project.id) { throw 'T24719 does not belong to P544.' }
$children = @(Read-ForecastJson ('/v3/tasks/' + $parent.id + '/children'))
if ($children.Count -eq 1 -and $children[0] -is [array]) { $children = $children[0] }
$projectTasks = @(Read-ForecastJson ('/v3/projects/' + $project.id + '/tasks'))
if ($projectTasks.Count -eq 1 -and $projectTasks[0] -is [array]) { $projectTasks = $projectTasks[0] }
$project | ConvertTo-Json -Depth 30 | Set-Content -LiteralPath (Join-Path $operationRoot 'project.json') -Encoding utf8
$parent | ConvertTo-Json -Depth 30 | Set-Content -LiteralPath (Join-Path $operationRoot 'parent.json') -Encoding utf8
ConvertTo-Json -InputObject @($children) -Depth 30 | Set-Content -LiteralPath (Join-Path $operationRoot 'current-children.json') -Encoding utf8
ConvertTo-Json -InputObject @($projectTasks) -Depth 30 | Set-Content -LiteralPath (Join-Path $operationRoot 'current-project-tasks.json') -Encoding utf8
[pscustomobject]@{
    project = $project.name
    projectNumber = $project.company_project_id
    projectId = $project.id
    subtasksEnabled = $project.use_sub_tasks
    parentTask = ('T' + $parent.company_task_id)
    parentTitle = $parent.title
    parentId = $parent.id
    childCount = $children.Count
    projectTaskCount = $projectTasks.Count
    currentChildren = @($children | Select-Object id,company_task_id,title,project_id,parent_task_id)
} | ConvertTo-Json -Depth 12
