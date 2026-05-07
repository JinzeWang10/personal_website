git push
if ($LASTEXITCODE -ne 0) { Write-Host "git push failed" -ForegroundColor Red; exit 1 }

npm run deploy
if ($LASTEXITCODE -ne 0) { Write-Host "npm run deploy failed" -ForegroundColor Red; exit 1 }

Write-Host ""
Write-Host "Local done. Now on ECS run:" -ForegroundColor Green
Write-Host "  intro_to_me_pull.sh" -ForegroundColor Yellow
