#!/bin/bash # scripts/package/removing.sh

echo ""
echo "run scripts/package/removing.sh"

echo ""
echo "🔄 in ./ (root)"
echo "   removing ./node_modules ..."
rm -rf ./node_modules
echo "   removing ./package-lock.json ..."
rm -rf ./package-lock.json

folders=(
  "./projects"
  "./packages"
)

for folder in "${folders[@]}"; do
  echo ""
  echo "🔄 in $folder ..."
  find "$folder" -name "node_modules" -type d -prune -exec echo "   removing {} ..." \; -exec rm -rf {} \;
  find "$folder" -name "package-lock.json" -type f -exec echo "   removing {} ..." \; -delete
done

echo ""
echo "success scripts/package/removing.sh"
echo ""