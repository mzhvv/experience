#!/bin/bash

# scripts/reset-package.sh

echo "🧹 Cleaning all node_modules and package-lock.json..."

find projects -name "node_modules" -type d -prune -exec rm -rf {} \;
find projects -name "package-lock.json" -type f -delete

echo "📦 Installing..."

# Устанавливаем везде, где есть package.json
for dir in $(find . -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;); do
  echo "📦 Installing in $dir..."
  (cd "$dir" && npm install)
done

echo "✅ All done!"