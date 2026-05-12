param(
    [string]$BaseUrl = "http://localhost:5000"
)

$ErrorActionPreference = "Stop"

$healthUrl = "$BaseUrl/health"
$response = Invoke-WebRequest -UseBasicParsing -Uri $healthUrl -TimeoutSec 15
if ($response.StatusCode -ne 200 -or ($response.Content.Trim()) -ne "ok") {
    Write-Host "Health check failed at $healthUrl" -ForegroundColor Red
    exit 1
}

Write-Host "Local server is running: $healthUrl returned ok." -ForegroundColor Green
Write-Host "Now open $BaseUrl, sign in, and open WaveMind."
Write-Host "After sign-in, /api/wavemind/config should show provider=gemini, model=gemini-2.5-flash, configured=true, googleSearchGrounding=true."
