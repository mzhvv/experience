#!/usr/bin/env python3 # scripts/package/python/removing.py

import shutil
from pathlib import Path

print()
print("run scripts/package/python/removing.py")
print()

root = Path.cwd()

print("🔄 in . (root)")
print("   removing ./node_modules ...")
shutil.rmtree(root / "node_modules", ignore_errors=True)
print("   removing ./package-lock.json ...")
(root / "package-lock.json").unlink(missing_ok=True)

folders = ["./projects", "./packages"]

for folder in folders:
    print()
    print(f"🔄 in {folder} ...")
    
    path = root / folder[2:]
    if not path.exists():
        continue
    
    for node_modules in path.rglob("node_modules"):
        print(f"   removing {node_modules} ...")
        shutil.rmtree(node_modules, ignore_errors=True)
    
    for lock_file in path.rglob("package-lock.json"):
        print(f"   removing {lock_file} ...")
        lock_file.unlink(missing_ok=True)

print()
print("success scripts/package/python/removing.py")
print()