
# ============================================
# STAGE 1: Dependencies
# ============================================
FROM node:22-alpine AS deps

WORKDIR /app

RUN apk add --no-cache libc6-compat

# Root package manifest
COPY package.json ./

# Local workspace packages
COPY --from=packages . ./src/packages/
COPY --from=prettier-config . ./packages/prettier-config/

# Restore original relative paths expected by package.json:
#
# file:../../../src/packages/shadcn-ui
# file:../../../packages/prettier-config
#
# /app/../../../src/packages     -> /src/packages
# /app/../../../packages         -> /packages

RUN mkdir -p /src /packages && \
    ln -sfn /app/src/packages /src/packages && \
    ln -sfn /app/packages /packages

# Verify local packages exist
RUN test -f /app/src/packages/shadcn-ui/package.json && \
    test -f /app/packages/prettier-config/package.json

# Install dependencies
RUN npm install --no-package-lock


# ============================================
# STAGE 2: Build
# ============================================
FROM node:22-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy application source
COPY . .

# Copy local workspace packages
COPY --from=packages . ./src/packages/
COPY --from=prettier-config . ./packages/prettier-config/

# Restore symlinks
RUN mkdir -p /src /packages && \
    ln -sfn /app/src/packages /src/packages && \
    ln -sfn /app/packages /packages

# Ensure public directory exists
RUN mkdir -p public

# Diagnostic information
RUN echo "========== SHADCN UI PACKAGE ==========" && \
    ls -la /app/src/packages/shadcn-ui && \
    echo "========== COMPONENTS ==========" && \
    ls -la /app/src/packages/shadcn-ui/components && \
    echo "========== LIB ==========" && \
    ls -la /app/src/packages/shadcn-ui/lib && \
    echo "========== NODE MODULES ==========" && \
    ls -la /app/node_modules/@workspace

# Build Next.js in standalone mode
RUN DOCKER_BUILD=1 npm run build


# ============================================
# STAGE 3: Production Runner
# ============================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root user
RUN addgroup -S -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nextjs

# Public assets
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Next.js standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Run as non-root
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]


# ---

# # ЭТАП 1: Установка зависимостей
# FROM node:22-alpine AS deps
# WORKDIR /app

# # Копируем манифест
# COPY package.json ./
# # Копируем локальные пакеты ДО установки (чтобы npm нашел их по file: путям)
# COPY --from=packages . ./src/packages/

# # Устанавливаем зависимости
# RUN npm install --no-package-lock

# # ЭТАП 2: Сборка приложения
# FROM node:22-alpine AS builder
# WORKDIR /app

# # Переносим node_modules из этапа deps
# COPY --from=deps /app/node_modules ./node_modules

# # Копируем исходники и локальные пакеты
# COPY . .
# COPY --from=packages . ./src/packages/

# # Собираем Next.js (генерирует .next/standalone)
# RUN DOCKER_BUILD=1 npm run build

# # ЭТАП 3: Финальный легковесный образ для запуска
# FROM node:22-alpine AS runner
# WORKDIR /app

# # Устанавливаем production-окружение
# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# # Создаем непривилегированного пользователя для безопасности
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # Копируем только самое необходимое из этапа сборки
# # 1. Публичные статические файлы (если папки нет, создай её)
# COPY --from=builder /app/public ./public
# # 2. Минимальный standalone-сервер (содержит server.js и нужный минимум node_modules)
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# # 3. Статические ассеты Next.js (CSS, JS, картинки)
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# # Переключаемся на безопасного пользователя
# USER nextjs

# # Настраиваем порт и запускаем standalone-сервер
# EXPOSE 3000
# ENV PORT 3000
# ENV HOSTNAME 0.0.0.0
# CMD ["node", "server.js"]

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