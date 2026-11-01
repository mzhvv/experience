src/projects/mzhvv/Dockerfile

```dockerfile
FROM node:22-alpine
WORKDIR /app

# 1. Копируем package.json из контекста (mzhvv)
COPY package.json ./

# 2. Удаляем старый lock-файл, если он есть (чтобы избежать бага extraneous)
RUN rm -f package-lock.json

# 3. Копируем пакеты из внешнего контекста
COPY --from=packages . ./src/packages/

# 4. Устанавливаем зависимости без lock-файла
RUN npm install

# 5. Копируем остальные файлы проекта
COPY . .

# 6. Собираем проект
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```
