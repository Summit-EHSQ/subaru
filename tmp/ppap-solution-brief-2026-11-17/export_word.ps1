$ErrorActionPreference = 'Stop'
$ppapBriefRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '../..')).Path
$ppapBriefDocx = Join-Path $ppapBriefRoot 'outputs/ppap-solution-brief-2026-11-17/PPAP_Solution_Brief_Draft.docx'
$ppapBriefPdfDirectory = Join-Path $ppapBriefRoot 'output/pdf'
[System.IO.Directory]::CreateDirectory($ppapBriefPdfDirectory) | Out-Null
$ppapBriefPdf = Join-Path $ppapBriefPdfDirectory 'PPAP_Solution_Brief_Draft.pdf'
$ppapBriefWord = $null
$ppapBriefDocument = $null
try {
    $ppapBriefWord = New-Object -ComObject Word.Application
    $ppapBriefWord.Visible = $false
    $ppapBriefWord.DisplayAlerts = 0
    $ppapBriefWord.AutomationSecurity = 3
    $ppapBriefDocument = $ppapBriefWord.Documents.Open($ppapBriefDocx, $false, $false)
    $ppapBriefDocument.Fields.Update() | Out-Null
    $ppapBriefDocument.Repaginate()
    $ppapBriefPages = $ppapBriefDocument.ComputeStatistics(2)
    $ppapBriefDocument.Save()
    $ppapBriefDocument.ExportAsFixedFormat($ppapBriefPdf, 17)
    Write-Output "Exported $ppapBriefPages pages to $ppapBriefPdf"
} finally {
    if ($null -ne $ppapBriefDocument) { $ppapBriefDocument.Close(0); [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppapBriefDocument) }
    if ($null -ne $ppapBriefWord) { $ppapBriefWord.Quit(); [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppapBriefWord) }
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
}
