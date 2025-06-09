# Dockerfile для Vue CLI проекта
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -D url-loader

RUN npm install -D file-loader

COPY . .

RUN npm run build

# Nginx-слой
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

