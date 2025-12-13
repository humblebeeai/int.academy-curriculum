# Build stage
FROM node:20-alpine AS builder

WORKDIR /app/website

COPY website/package.json website/package-lock.json ./
RUN npm ci

COPY website ./
COPY docs ../docs

RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/website/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
