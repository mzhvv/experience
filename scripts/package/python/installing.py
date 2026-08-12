#!/usr/bin/env python3 # scripts/package/python/installing.py

import subprocess
from pathlib import Path

print()
print("run scripts/package/python/installing.py")
print()

root = Path.cwd()

for package_json in root.rglob("package.json"):
    if "node_modules" in str(package_json):
        continue
    
    dir_path = package_json.parent
    
    print()
    if dir_path == root:
        print("🔄 installing in . (root) ...")
    else:
        print(f"🔄 installing in {dir_path} ...")
    
    subprocess.run(["npm", "install"], cwd=dir_path)

print()
print("success scripts/package/python/installing.py")
print()