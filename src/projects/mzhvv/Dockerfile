# Этап 1: Установка зависимостей (кэшируемый)
FROM node:22-alpine AS deps
WORKDIR /app

# Копируем только package.json
COPY package.json ./

# Копируем локальные пакеты ДО установки (чтобы npm нашел их по file: путям)
COPY --from=packages . ./src/packages/

# Устанавливаем базовые зависимости из package.json
RUN npm install --no-package-lock

# ДОБАВЛЯЕМ недостающие пакеты для сборки (фиксируем версии, как локально)
# ВАЖНО: Next.js (Turbopack) ищет зависимости строго в корневой папке /app/node_modules
# В Docker он не видит симлинки из пакета (в отличие от локальной машины),
# поэтому мы принудительно устанавливаем их на верхний уровень контейнера.
RUN npm install \
    # @workspace/shadcn-ui
    @base-ui/react@^1.9.0 \
    class-variance-authority@^0.7.1 \
    cn@^0.5.1 \
    lucide-react@^1.66.0 \
    next-themes@^0.4.6 \
    tw-animate-css@^1.4.0 \
    shadcn@^4.23.0 \
    zod@^4.6.6 \
    @tailwindcss/postcss@^4 \
    tailwindcss@^4 \
    
    --no-package-lock

# Этап 2: Сборка
FROM node:22-alpine AS builder
WORKDIR /app

# Копируем node_modules из первого этапа
COPY --from=deps /app/node_modules ./node_modules

# Копируем исходники
COPY . .

# Копируем пакеты (нужны для резолва путей в Next.js)
COPY --from=packages . ./src/packages/

# Собираем
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]