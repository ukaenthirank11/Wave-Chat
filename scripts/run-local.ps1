param(
    [string]$Port = "5000"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$envFile = Join-Path $repoRoot ".env.local"
if (-not (Test-Path -LiteralPath $envFile)) {
    Write-Host "Missing .env.local. Add GEMINI_API_KEY before starting WaveChat." -ForegroundColor Red
    exit 1
}

$hasGeminiKey = Select-String -LiteralPath $envFile -Pattern "^\s*(GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_AI_STUDIO_API_KEY)\s*=\s*\S+" -Quiet
if (-not $hasGeminiKey) {
    Write-Host "GEMINI_API_KEY is missing in .env.local." -ForegroundColor Red
    exit 1
}

$pythonExe = (Get-Command python -ErrorAction SilentlyContinue).Source
$pyExe = (Get-Command py -ErrorAction SilentlyContinue).Source
if ($pythonExe) {
    try {
        & $pythonExe --version *> $null
    } catch {
        $pythonExe = $null
    }
    if ($pythonExe -and $LASTEXITCODE -ne 0) {
        $pythonExe = $null
    }
}
if ($pyExe) {
    try {
        & $pyExe -3 --version *> $null
    } catch {
        $pyExe = $null
    }
    if ($pyExe -and $LASTEXITCODE -ne 0) {
        $pyExe = $null
    }
}
if (-not $pythonExe -and -not $pyExe) {
    Write-Host "Python is not installed or not available on PATH." -ForegroundColor Red
    Write-Host "Install Python 3.10 or newer, then run this script again."
    exit 1
}

$venvPython = ".\.venv-local\Scripts\python.exe"
$venvBroken = $false
if (Test-Path -LiteralPath $venvPython) {
    try {
        & $venvPython --version *> $null
    } catch {
        $venvBroken = $true
    }
    if ($LASTEXITCODE -ne 0) {
        $venvBroken = $true
    }
}

if ($venvBroken) {
    Write-Host "Existing .venv-local is broken. Rebuilding it now." -ForegroundColor Yellow
    Remove-Item -LiteralPath ".venv-local" -Recurse -Force
}

if (-not (Test-Path -LiteralPath $venvPython)) {
    if ($pythonExe) {
        & $pythonExe -m venv .venv-local
    } else {
        & $pyExe -3 -m venv .venv-local
    }
}

& ".\.venv-local\Scripts\python.exe" -m pip install --upgrade pip
& ".\.venv-local\Scripts\python.exe" -m pip install -r requirements.txt

$env:PORT = $Port
$env:FLASK_DEBUG = "true"
Write-Host "Starting WaveChat at http://localhost:$Port" -ForegroundColor Green
& ".\.venv-local\Scripts\python.exe" app.py
