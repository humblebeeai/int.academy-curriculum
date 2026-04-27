# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Add ARG for build-time environment variables
ARG REACT_APP_CHAT_LINK
ENV REACT_APP_CHAT_LINK=$REACT_APP_CHAT_LINK

# Copy dependency definitions
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the Docusaurus site
RUN npm run build

# Runtime stage
FROM nginx:alpine

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
