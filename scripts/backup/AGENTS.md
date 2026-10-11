 <!-- scripts/backup/AGENTS.md -->

# AGENTS.md

## Проект

Backup-скрипт

## Структура

- `/Users/mzhvv/DEV/experience` — исходный проект
- `/Users/mzhvv/DEV/scripts/backup` — синхронизируется Google Drive Desktop и Яндекс Диск
- `experience.zip` — имя архива

## Задача

Сжать experience в experience.zip и положить в backup

## Правила

- Python 3.14.8
- Только stdlib

## Выполнение

### Сжатие (создать .tmp)

- Формат: ZIP
- Исключать папки: node_modules, dist

### Перед заменой архива (проверить .tmp)

- Архив создан
- `testzip()` без ошибок
- Не пустой (размер > 0)
- Количество файлов совпадает
- Исключённые папки не попали

### Замена (.tmp → experience.zip)

- Атомарная: `.tmp` → `replace()`

## Обработка ошибок

- Папка experience не найдена → ошибка, exit 1
- Ошибка сжатия → старый архив остаётся, .tmp удаляется
- Ошибка проверки → старый архив остаётся, .tmp удаляется
