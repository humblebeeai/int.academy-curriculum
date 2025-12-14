# Build stage
FROM node:20-alpine AS builder

WORKDIR /app/website

COPY package.json package-lock.json ./
RUN npm ci

COPY src ./src
COPY docs ./docs
COPY blog ./blog
COPY static ./static
COPY docusaurus.config.ts ./
COPY sidebars.ts ./
COPY tsconfig.json ./

RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/website/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
