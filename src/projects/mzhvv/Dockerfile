# src/projects/mzhvv/Dockerfile

# --- S1: Зависимости
# Этот этап содержит только манифесты и зависимости для повторного использования Docker-кэша.
FROM node:22-alpine AS deps
WORKDIR /repo

# Нужна совместимость нативных Node.js-пакетов с Alpine/musl.
RUN apk add --no-cache libc6-compat
# Фиксируем версию pnpm из packageManager корневого package.json.
RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

# Копируем только манифесты: изменение исходников не сбрасывает кэш установки.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY src/projects/mzhvv/package.json ./src/projects/mzhvv/
COPY src/packages/shadcn-ui/package.json ./src/packages/shadcn-ui/
COPY src/packages/eslint-config/package.json ./src/packages/eslint-config/
COPY src/packages/prettier-config/package.json ./src/packages/prettier-config/
COPY src/packages/typescript-config/package.json ./src/packages/typescript-config/

# Устанавливаем зависимости workspace строго по lock-файлу.
RUN pnpm install --frozen-lockfile

# --- S2: Сборка
# Сборочная среда изолирована от финального production-образа.
FROM node:22-alpine AS builder
WORKDIR /repo

# Отключаем отправку телеметрии Next.js во время сборки.
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

# BuildKit-кэш зависимостей и конфигурация workspace.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY --from=deps /repo/node_modules ./node_modules

# Исходники приложения и локальных workspace-пакетов нужны для сборки.
COPY src/projects/mzhvv ./src/projects/mzhvv
COPY src/packages/ ./src/packages/

WORKDIR /repo/src/projects/mzhvv
# Next.js ожидает каталог public при сборке.
RUN mkdir -p public
# Включаем standalone-вывод для минимального production-образа.
RUN DOCKER_BUILD=1 pnpm build


# --- S3: Продакшн-раннер
# Финальный образ содержит только standalone-сервер и статические ресурсы.
FROM node:22-alpine AS runner
WORKDIR /app

# Настройки production-сервера Next.js.
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Запускаем приложение без root-прав.
RUN addgroup -S -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nextjs

# Standalone сохраняет вложенный путь приложения внутри структуры монорепозитория.
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/.next/standalone ./

# Добавляем public и static по путям, ожидаемым standalone-сервером.
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/public ./src/projects/mzhvv/public
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/.next/static ./src/projects/mzhvv/.next/static

USER nextjs
# EXPOSE документирует порт; публикация порта задаётся в Compose.
EXPOSE 3000

# Точка входа standalone-сборки.
CMD ["node", "src/projects/mzhvv/server.js"]