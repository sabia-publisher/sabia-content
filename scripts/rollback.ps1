Write-Host '🔄 Rolling back migration...'

git stash
git checkout migration-backup
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
git checkout -b "rollback-$timestamp"

# Restore core files from feature branch
git checkout feat/nascimento-gusmao -- package.json nuxt.config.js

Write-Host '✅ Rollback complete. Review changes and commit if needed.'