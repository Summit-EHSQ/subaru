$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$taskSecretDir = Join-Path ([System.IO.Path]::GetTempPath()) 'Codex-ProdIntegration-01a1f54f'
[System.IO.Directory]::CreateDirectory($taskSecretDir) | Out-Null
$taskStatusPath = Join-Path $taskSecretDir 'credential-status.json'
$taskCredentialPath = Join-Path $taskSecretDir 'api-key.clixml'
@{ status = 'awaiting_key'; tenant = 'SIA-SummitDEV'; module = 'ProdIntegration' } | ConvertTo-Json | Set-Content -LiteralPath $taskStatusPath -Encoding UTF8

$taskForm = New-Object System.Windows.Forms.Form
$taskForm.Text = 'Codex - Intelex read-only audit'
$taskForm.ClientSize = New-Object System.Drawing.Size(590, 245)
$taskForm.StartPosition = 'CenterScreen'
$taskForm.FormBorderStyle = 'FixedDialog'
$taskForm.MaximizeBox = $false
$taskForm.MinimizeBox = $false
$taskForm.TopMost = $true

$taskLabel = New-Object System.Windows.Forms.Label
$taskLabel.Location = New-Object System.Drawing.Point(20, 18)
$taskLabel.Size = New-Object System.Drawing.Size(550, 78)
$taskLabel.Text = "Enter the provisional Intelex API key for SIA-SummitDEV.`r`nhttps://preprod-na.intelex.com`r`nPurpose: read-only metadata audit of ProdIntegration.`r`nThe key is masked and stored temporarily using Windows encryption."
$taskForm.Controls.Add($taskLabel)

$taskKeyBox = New-Object System.Windows.Forms.TextBox
$taskKeyBox.Location = New-Object System.Drawing.Point(20, 105)
$taskKeyBox.Size = New-Object System.Drawing.Size(550, 26)
$taskKeyBox.UseSystemPasswordChar = $true
$taskForm.Controls.Add($taskKeyBox)

$taskContinue = New-Object System.Windows.Forms.Button
$taskContinue.Text = 'Use key for audit'
$taskContinue.Location = New-Object System.Drawing.Point(305, 157)
$taskContinue.Size = New-Object System.Drawing.Size(150, 34)
$taskContinue.DialogResult = [System.Windows.Forms.DialogResult]::OK
$taskForm.Controls.Add($taskContinue)
$taskForm.AcceptButton = $taskContinue

$taskCancel = New-Object System.Windows.Forms.Button
$taskCancel.Text = 'Cancel'
$taskCancel.Location = New-Object System.Drawing.Point(465, 157)
$taskCancel.Size = New-Object System.Drawing.Size(105, 34)
$taskCancel.DialogResult = [System.Windows.Forms.DialogResult]::Cancel
$taskForm.Controls.Add($taskCancel)
$taskForm.CancelButton = $taskCancel
$taskForm.Add_Shown({ $taskKeyBox.Focus() })

try {
    $taskResult = $taskForm.ShowDialog()
    if ($taskResult -eq [System.Windows.Forms.DialogResult]::OK -and -not [string]::IsNullOrWhiteSpace($taskKeyBox.Text)) {
        $taskSecureKey = ConvertTo-SecureString -String ($taskKeyBox.Text.Trim()) -AsPlainText -Force
        $taskKeyBox.Clear()
        $taskSecureKey | Export-Clixml -LiteralPath $taskCredentialPath
        $taskSecureKey.Dispose()
        @{ status = 'ready'; tenant = 'SIA-SummitDEV'; module = 'ProdIntegration' } | ConvertTo-Json | Set-Content -LiteralPath $taskStatusPath -Encoding UTF8
    } else {
        @{ status = 'cancelled'; tenant = 'SIA-SummitDEV'; module = 'ProdIntegration' } | ConvertTo-Json | Set-Content -LiteralPath $taskStatusPath -Encoding UTF8
    }
} finally {
    $taskKeyBox.Clear()
    $taskForm.Dispose()
}
