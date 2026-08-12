#!/usr/bin/env python3 # scripts/package/python/index.py

import subprocess
import sys

print()
print("will run scripts/package/python/removing.py && scripts/package/python/installing.py")
print()

# Запускаем удаление
result = subprocess.run([sys.executable, "scripts/package/python/removing.py"])
if result.returncode != 0:
    print("❌ Removing failed!")
    sys.exit(1)

# Запускаем установку
result = subprocess.run([sys.executable, "scripts/package/python/installing.py"])
if result.returncode != 0:
    print("❌ Installing failed!")
    sys.exit(1)

print()
print("✅ All done!")