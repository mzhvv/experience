# Build the complete workspace because mzhvv embeds the Stack host and its apps.
FROM node:22-alpine AS builder
WORKDIR /repo

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY src/ ./src/

RUN pnpm install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED=1
ENV DOCKER_BUILD=1
RUN pnpm --filter mzhvv run build

# Install production dependencies in a clean workspace without build-time tools.
FROM node:22-alpine AS production-deps
WORKDIR /repo

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY src/ ./src/

RUN pnpm install --prod --frozen-lockfile --ignore-scripts

FROM node:22-alpine AS runner
WORKDIR /repo

RUN apk add --no-cache libc6-compat \
    && corepack enable \
    && addgroup -S -g 1001 nodejs \
    && adduser -S -u 1001 -G nodejs nextjs

ENV COREPACK_HOME=/corepack

RUN mkdir -p "$COREPACK_HOME" \
    && corepack prepare pnpm@12.16.1 --activate \
    && pnpm --version \
    && chown -R nextjs:nodejs "$COREPACK_HOME"

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PNPM_CONFIG_VERIFY_DEPS_BEFORE_RUN=false

COPY --from=production-deps --chown=nextjs:nodejs /repo /repo
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/mzhvv/.next ./src/projects/mzhvv/.next
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/stack-host/.next ./src/projects/stack-host/.next
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/stack/react/stub/dist ./src/projects/stack/react/stub/dist
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/stack/react/stub2/dist ./src/projects/stack/react/stub2/dist
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/stack/vue/stub/dist ./src/projects/stack/vue/stub/dist
COPY --from=builder --chown=nextjs:nodejs /repo/src/projects/stack/angular/stub/dist ./src/projects/stack/angular/stub/dist

USER nextjs

EXPOSE 3000 3001 5173 5174 5175 5176

CMD ["pnpm", "--filter", "mzhvv", "run", "start:docker"]