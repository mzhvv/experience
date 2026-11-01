# ЭТАП 1: Установка зависимостей
FROM node:22-alpine AS deps
WORKDIR /app

# Копируем манифест
COPY package.json ./
# Копируем локальные пакеты ДО установки (чтобы npm нашел их по file: путям)
COPY --from=packages . ./src/packages/

# Устанавливаем зависимости
RUN npm install --no-package-lock

# ЭТАП 2: Сборка приложения
FROM node:22-alpine AS builder
WORKDIR /app

# Переносим node_modules из этапа deps
COPY --from=deps /app/node_modules ./node_modules

# Копируем исходники и локальные пакеты
COPY . .
COPY --from=packages . ./src/packages/

# Собираем Next.js (генерирует .next/standalone)
RUN DOCKER_BUILD=1 npm run build

# ЭТАП 3: Финальный легковесный образ для запуска
FROM node:22-alpine AS runner
WORKDIR /app

# Устанавливаем production-окружение
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Создаем непривилегированного пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только самое необходимое из этапа сборки
# 1. Публичные статические файлы (если папки нет, создай её)
COPY --from=builder /app/public ./public
# 2. Минимальный standalone-сервер (содержит server.js и нужный минимум node_modules)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# 3. Статические ассеты Next.js (CSS, JS, картинки)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Переключаемся на безопасного пользователя
USER nextjs

# Настраиваем порт и запускаем standalone-сервер
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME 0.0.0.0
CMD ["node", "server.js"]

# --- СТАРЫЙ ВАРИАНТ (Тяжелый образ ~2.8 ГБ, запуск через npm start)

# FROM node:22-alpine AS deps
# WORKDIR /app
# COPY package.json ./
# COPY --from=packages . ./src/packages/
# RUN npm install --no-package-lock
#
# FROM node:22-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# COPY --from=packages . ./src/packages/
# RUN npm run build
#
# EXPOSE 3000
# CMD ["npm", "start"]