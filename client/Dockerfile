# Dockerfile для Vue CLI проекта
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN echo "Содержимое /app перед сборкой:" && ls -la /app
RUN npm run build

RUN echo "Содержимое /app/dist после сборки:" && ls -la /app/dist  # Проверяем
# Nginx-слой
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

