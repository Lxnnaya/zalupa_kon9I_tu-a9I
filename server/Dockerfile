# Используем официальный Node.js-образ
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код (включая routes, controllers, index.js и т.д.)
COPY . .

# Указываем порт (если ты слушаешь 5000, можешь изменить при необходимости)
EXPOSE 8080

# Запускаем приложение
CMD ["node", "index.js"]
