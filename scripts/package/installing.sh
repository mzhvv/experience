#!/bin/bash # scripts/package/installing.sh

echo ""
echo "run scripts/package/installing.sh"

for dir in $(find . -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;); do
  echo ""
  if [ "$dir" = "." ]; then
    echo "🔄 installing in . (root) ..."
  else
    echo "🔄 installing in $dir ..."
  fi
  (cd "$dir" && npm install)
done

echo ""
echo "success scripts/package/installing.sh"
echo ""