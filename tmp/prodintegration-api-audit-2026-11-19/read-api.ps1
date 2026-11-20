param(
    [Parameter(Mandatory=$true)][string]$RelativePath,
    [Parameter(Mandatory=$true)][ValidatePattern('^[a-zA-Z0-9_-]+$')][string]$OutputName,
    [string]$ApplicationPath = '/Login3/SIA-SummitDEV'
)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Net.Http
$taskEvidenceDir = Join-Path $PSScriptRoot 'evidence'
[System.IO.Directory]::CreateDirectory($taskEvidenceDir) | Out-Null
$taskSecretPath = Join-Path ([System.IO.Path]::GetTempPath()) 'Codex-ProdIntegration-01a1f54f/api-key.clixml'
$taskSecureKey = Import-Clixml -LiteralPath $taskSecretPath
$taskCredential = New-Object System.Net.NetworkCredential('', $taskSecureKey)
$taskPlainKey = $taskCredential.Password
$taskHandler = New-Object System.Net.Http.HttpClientHandler
$taskHandler.AllowAutoRedirect = $false
$taskClient = New-Object System.Net.Http.HttpClient($taskHandler)
$taskClient.Timeout = [TimeSpan]::FromSeconds(45)
$taskClient.DefaultRequestHeaders.Authorization = New-Object System.Net.Http.Headers.AuthenticationHeaderValue('ApiKey', $taskPlainKey)
$taskClient.DefaultRequestHeaders.Accept.ParseAdd('application/json')
try {
    if ($ApplicationPath -notin @('/Login3/SIA-SummitDEV','/SIA-SummitDEV')) { throw 'Application path is outside the allowed tenant roots.' }
    if (-not $RelativePath.StartsWith('/') -or $RelativePath.Contains('://')) { throw 'Only API-relative paths are allowed.' }
    $taskUri = [Uri]('https://preprod-na.intelex.com' + $ApplicationPath + '/api/v2' + $RelativePath)
    if ($taskUri.Host -ne 'preprod-na.intelex.com' -or $taskUri.Scheme -ne 'https') { throw 'Unexpected destination.' }
    $taskResponse = $taskClient.GetAsync($taskUri).GetAwaiter().GetResult()
    $taskBody = $taskResponse.Content.ReadAsStringAsync().GetAwaiter().GetResult()
    $taskBody = $taskBody.Replace($taskPlainKey, '[REDACTED]')
    $taskContentType = [string]$taskResponse.Content.Headers.ContentType
    $taskExtension = if ($taskContentType -match 'json') { '.json' } elseif ($taskContentType -match 'xml') { '.xml' } else { '.txt' }
    $taskBodyPath = Join-Path $taskEvidenceDir ($OutputName + $taskExtension)
    [System.IO.File]::WriteAllText($taskBodyPath, $taskBody, (New-Object System.Text.UTF8Encoding($false)))
    $taskSummary = [ordered]@{
        method = 'GET'
        url = $taskUri.AbsoluteUri
        status = [int]$taskResponse.StatusCode
        contentType = $taskContentType
        responseBytes = [System.Text.Encoding]::UTF8.GetByteCount($taskBody)
        evidenceFile = $taskBodyPath
        observedAtUtc = [DateTime]::UtcNow.ToString('o')
    }
    if ($taskResponse.Headers.Location) { $taskSummary.location = [string]$taskResponse.Headers.Location }
    if ($taskResponse.Headers.RetryAfter) { $taskSummary.retryAfter = [string]$taskResponse.Headers.RetryAfter }
    $taskSummary | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $taskEvidenceDir ($OutputName + '-request.json')) -Encoding UTF8
    $taskSummary | ConvertTo-Json -Compress -Depth 8
    if ($taskContentType -match 'json') {
        $taskParsed = $taskBody | ConvertFrom-Json
        if ($taskParsed.PSObject.Properties.Name -contains 'value') {
            Write-Output ('Returned rows: ' + @($taskParsed.value).Count)
            if (@($taskParsed.value).Count -gt 0) { Write-Output ('Returned fields: ' + (@($taskParsed.value)[0].PSObject.Properties.Name -join ', ')) }
            if (@($taskParsed.value).Count -le 5 -and $taskBody.Length -lt 16000) { Write-Output $taskBody }
        } elseif (-not $taskResponse.IsSuccessStatusCode) { Write-Output $taskBody.Substring(0,[Math]::Min(4000,$taskBody.Length)) }
    }
} catch {
    Write-Output ('Read-only API request failed: ' + $_.Exception.GetType().FullName)
    throw
} finally {
    $taskClient.Dispose()
    $taskHandler.Dispose()
    $taskPlainKey = $null
    $taskCredential = $null
    $taskSecureKey.Dispose()
}
