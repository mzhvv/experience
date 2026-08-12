#!/bin/bash # scripts/package/remove.sh

echo "🧹 Удаляет все node_modules и package-lock.json"

find projects -name "node_modules" -type d -prune -exec rm -rf {} \;
find projects -name "package-lock.json" -type f -delete

echo "✅"