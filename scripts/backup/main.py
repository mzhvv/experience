#!/usr/bin/env python3

# scripts/backup/main.py

# region imports

import os
import sys
import zipfile
import time
from pathlib import Path

# endregion
# region settings

SOURCE = Path("/Users/mzhvv/DEV/experience")
DEST_DIR = Path("/Users/mzhvv/DEV/backup")
ARCHIVE_NAME = "experience.zip"

EXCLUDE_DIRS = {"node_modules", "dist"}

# endregion
# region zip

def create_zip(source: Path, dest_dir: Path, archive_name: str) -> Path:
    if not source.exists():
        raise FileNotFoundError(f"Папка не найдена: {source}")

    dest_dir.mkdir(parents=True, exist_ok=True)

    zip_path = dest_dir / archive_name
    tmp_path = dest_dir / f"{archive_name}.tmp"

    print(f"[1/4] Сжимаю {source}")
    print(f"      → {zip_path}")

    files_count = 0
    with zipfile.ZipFile(tmp_path, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for root, dirs, files in os.walk(source):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            root_path = Path(root)

            for file in files:
                file_path = root_path / file
                arcname = file_path.relative_to(source.parent)
                zf.write(file_path, arcname)
                files_count += 1

    size_mb = tmp_path.stat().st_size / 1024 / 1024
    print(f"      ✅ Готово: {files_count} файлов, {size_mb:.1f} MB")
    return tmp_path, files_count

# endregion
# region verify

def verify_zip(zip_path: Path, expected_files: int) -> None:
    """Проверяет, что архив валидный и не содержит исключённых папок."""
    print(f"[3/4] Проверяю архив...")

    if not zip_path.exists():
        raise RuntimeError(f"Архив не создан: {zip_path}")

    if zip_path.stat().st_size == 0:
        raise RuntimeError(f"Архив пустой: {zip_path}")

    # Открываем и проверяем
    try:
        with zipfile.ZipFile(zip_path, "r") as zf:
            bad = zf.testzip()
            if bad is not None:
                raise RuntimeError(f"Повреждённый файл в архиве: {bad}")

            names = zf.namelist()

            if len(names) != expected_files:
                raise RuntimeError(
                    f"Несовпадение количества файлов: "
                    f"ожидалось {expected_files}, в архиве {len(names)}"
                )

            # Проверяем, что исключённые папки не попали
            for excluded in EXCLUDE_DIRS:
                pattern = f"/{excluded}/"
                leaked = [n for n in names if pattern in f"/{n}/"]
                if leaked:
                    raise RuntimeError(
                        f"Исключённая папка '{excluded}' попала в архив: "
                        f"{leaked[:3]}..."
                    )

        print(f"      ✅ Архив валидный, {len(names)} файлов, исключений нет")

    except zipfile.BadZipFile as e:
        raise RuntimeError(f"Архив повреждён: {e}")

# endregion
# region main

def main():
    start = time.time()
    tmp_path = None
    try:
        # 1. Создаём
        tmp_path, files_count = create_zip(SOURCE, DEST_DIR, ARCHIVE_NAME)

        # 2. Проверяем ДО замены
        verify_zip(tmp_path, files_count)

        # 3. Заменяем
        print(f"[4/4] Заменяю старый архив...")
        final_path = DEST_DIR / ARCHIVE_NAME
        tmp_path.replace(final_path)

        elapsed = time.time() - start
        print()
        print(f"✅ Готово за {elapsed:.1f} сек")
        print(f"   Архив: {final_path}")
        print(f"   Размер: {final_path.stat().st_size / 1024 / 1024:.1f} MB")
        print()
        print("Google Drive Desktop и Яндекс.Диск синхронизируют автоматически.")

    except Exception as e:
        print(f"❌ Ошибка: {e}", file=sys.stderr)
        if tmp_path and tmp_path.exists():
            tmp_path.unlink()
            print(f"   Временный файл удалён: {tmp_path}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

# endregion