#!/usr/bin/env sh

# scripts/backup/run.sh

if ! command -v python3 >/dev/null 2>&1; then
  echo "❌ python3 не найден в PATH. Установи Python 3 и попробуй снова." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ ! -f "$SCRIPT_DIR/main.py" ]; then
  echo "❌ main.py не найден в $SCRIPT_DIR" >&2
  exit 1
fi

cd "$SCRIPT_DIR" || exit 1
python3 ./main.py