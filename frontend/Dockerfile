FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build args for API URLs (set at build time)
ARG VITE_API_BASE=http://localhost:8001
ARG VITE_P2_API=http://localhost:8000
ARG VITE_WS_URL=ws://localhost:8000/ws

RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
