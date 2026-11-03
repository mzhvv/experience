# src/projects/mzhvv/Dockerfile

# --- S1: Dependencies
FROM node:22-alpine AS deps
WORKDIR /repo

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY src/projects/mzhvv/package.json ./src/projects/mzhvv/
COPY src/packages/shadcn-ui/package.json ./src/packages/shadcn-ui/
COPY src/packages/prettier-config/package.json ./src/packages/prettier-config/
COPY src/packages/eslint-config/package.json ./src/packages/eslint-config/
COPY src/packages/typescript-config/package.json ./src/packages/typescript-config/

RUN pnpm install --frozen-lockfile

# --- S2: Build
FROM node:22-alpine AS builder
WORKDIR /repo

ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

COPY --from=deps /repo/node_modules ./node_modules
COPY src/packages/ ./src/packages/

COPY src/projects/mzhvv ./src/projects/mzhvv

WORKDIR /repo/src/projects/mzhvv
RUN mkdir -p public
RUN DOCKER_BUILD=1 pnpm build


# --- S3: Production Runner
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3001
ENV HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nextjs

# Копируем standalone целиком (он сохраняет структуру монорепо внутри)
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/.next/standalone ./

# Public и static кладём внутрь структуры, где реально лежит server.js
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/public ./src/projects/mzhvv/public
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/.next/static ./src/projects/mzhvv/.next/static

USER nextjs
EXPOSE 3001

# Запускаем сервер из его реального пути внутри контейнера
CMD ["node", "src/projects/mzhvv/server.js"]