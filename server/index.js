const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const server = require('http').createServer(app);
const cors = require('cors');
const path = require('path');
const bookRouter = require('./Routers/bookRouter');
const authRouter = require('./Routers/authRouter')
const projectRouter = require('./Routers/projectRouter')
const bodyParser = require('body-parser');
const PORT = 8080;

// Настроим CORS
app.use(cors());

// Настроим для загрузки файлов
app.use(fileUpload({}));

// Обрабатываем JSON-запросы
app.use(express.json());
app.use(bodyParser.json());

// Отдаем статические файлы из папки 'static/pdf'
app.use('/static', express.static(path.join(__dirname, 'static')));

// Роуты для книги
app.use("/book", bookRouter);
app.use("/auth", authRouter)
app.use("/project", projectRouter)

// Запуск сервера
server.listen(PORT, () => console.log(`server started on port ${PORT}`));
