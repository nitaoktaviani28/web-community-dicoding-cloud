# ======================
# Build stage
# ======================
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install all deps (including devDeps)
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build Next.js
RUN pnpm build


# ======================
# Runtime stage
# =====================
FROM node:18-alpine AS runner

WORKDIR /app

# Set production env
ENV NODE_ENV=production

# Install pnpm (runtime only needs start)
RUN npm install -g pnpm

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Run app
CMD ["pnpm", "start"]
