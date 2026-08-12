#!/bin/bash # scripts/package/reset.sh

echo ""
echo "will run scripts/package/removing.sh && scripts/package/installing.sh"
echo ""

bash scripts/package/removing.sh && bash scripts/package/installing.sh

