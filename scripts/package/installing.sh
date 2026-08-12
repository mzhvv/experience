#!/bin/bash # scripts/package/installing.sh

echo "📦 Устанавливает зависимости во всех папках с package.json"

for dir in $(find . -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;); do
  echo "📦 Installing in $dir..."
  (cd "$dir" && npm install)
done

echo "✅"