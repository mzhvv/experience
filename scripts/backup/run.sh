#!/usr/bin/env sh

# scripts/backup/run.sh

case "${1:-python3}" in
  python3)
    if ! command -v python3 >/dev/null 2>&1; then
      echo "❌ Python3 not found" >&2
      exit 1
    fi

    SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

    cd "$SCRIPT_DIR" || exit 1
    python3 ./main.py
    ;;
  *)
    echo "❌ Unknown mode: ${1}" >&2
    echo "⚠️ Usage: run.sh [python3]" >&2
    exit 1
    ;;
esac