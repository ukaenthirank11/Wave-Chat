$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $repoRoot ".env.local"

if (-not (Test-Path -LiteralPath $envFile)) {
    Write-Host ".env.local is missing." -ForegroundColor Red
    exit 1
}

$hasKey = Select-String -LiteralPath $envFile -Pattern "^\s*(GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_AI_STUDIO_API_KEY)\s*=\s*\S+" -Quiet
$hasOpenAIKey = Select-String -LiteralPath $envFile -Pattern "^\s*OPENAI_API_KEY\s*=" -Quiet
$hasProvider = Select-String -LiteralPath $envFile -Pattern "^\s*WAVEMIND_PROVIDER\s*=\s*gemini\s*$" -Quiet
$hasModel = Select-String -LiteralPath $envFile -Pattern "^\s*WAVEMIND_MODEL\s*=\s*gemini-2\.5-flash\s*$" -Quiet
$hasSearch = Select-String -LiteralPath $envFile -Pattern "^\s*WAVEMIND_GOOGLE_SEARCH\s*=\s*true\s*$" -Quiet

if ($hasOpenAIKey) {
    Write-Host "Remove OPENAI_API_KEY from .env.local. WaveMind is using Google AI Studio now." -ForegroundColor Red
    exit 1
}

if (-not $hasKey) {
    Write-Host "GEMINI_API_KEY is missing in .env.local." -ForegroundColor Red
    exit 1
}

if (-not $hasProvider) {
    Write-Host "WAVEMIND_PROVIDER=gemini is missing in .env.local." -ForegroundColor Red
    exit 1
}

if (-not $hasModel) {
    Write-Host "WAVEMIND_MODEL=gemini-2.5-flash is missing in .env.local." -ForegroundColor Red
    exit 1
}

if (-not $hasSearch) {
    Write-Host "WAVEMIND_GOOGLE_SEARCH=true is missing in .env.local." -ForegroundColor Red
    exit 1
}

Write-Host ".env.local is ready for Google AI Studio / Gemini WaveMind with Google Search grounding." -ForegroundColor Green
