# ======================
# 1️⃣ Builder
# ======================
FROM node:20.11.1-alpine AS builder

WORKDIR /app

# Needed for some native deps (Alpine requirement)
RUN apk add --no-cache libc6-compat

# Lock pnpm version (SAMA dengan lokal)
RUN npm install -g pnpm@10.26.2

# Copy dependency manifests
COPY package.json pnpm-lock.yaml ./

# Install deps (CI safe)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js
RUN pnpm build


# ======================
# 2️⃣ Runner
# ======================
FROM node:20.11.1-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@10.26.2

# Copy only runtime artifacts
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["pnpm", "start"]
