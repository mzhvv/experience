#!/usr/bin/env bash

# scripts/backup.bash

set -euo pipefail

cd "$(dirname "$0")/.."
python3 ./scripts/libs/backup/main.py