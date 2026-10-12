 <!-- !PATH scripts/backup/AGENTS.md -->

# scripts/backup

## Задача

Сжать experience в experience.zip и положить в backup

## Структура

- `/Users/mzhvv/DEV/experience` - проект
- `/Users/mzhvv/DEV/experience/scripts/backup/main.py` - код
- `/Users/mzhvv/DEV/experience/scripts/backup/run.sh` - выполнение
- `/Users/mzhvv/DEV/backup` - синхронизируется с Google Drive и(или) Яндекс Диском
- `experience.zip` - имя архива

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
