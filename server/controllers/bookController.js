const fs = require('fs');
const path = require('path');
const uuid = require("uuid");
const pool = require("../db");


class bookController {
    async createBook(req, res) {
        try {

            const {name, authors, year} = req.body;
            const {pdf, cover} = req.files;

            const pdfName = uuid.v4() + '.pdf';
            const coverName = uuid.v4() + '.jpg';
            const book_id = uuid.v4();

            try {
                await pdf.mv(path.resolve(__dirname, '../static', 'pdf', pdfName));
                await cover.mv(path.resolve(__dirname, '../static', 'img', coverName));
            } catch (fileError) {
                return res.status(500).json({error: 'Ошибка при сохранении файлов'});
            }
            const bookQuery = `
            INSERT INTO book (name, authors, year, pdf,cover,book_id) 
            VALUES ($1, $2, $3, $4,$5,$6) RETURNING *;
        `;
            const values = [name, authors, year, pdfName, coverName,book_id];
            const result = await pool.query(bookQuery, values);

            res.json(result.rows[0]);
        } catch (e) {
            console.error("Ошибка загрузки книги:", e);
            res.status(500).json({message: "Ошибка загрузки книги"});
        }
    }


    async getBooks(req, res) {
        try {
            const books = await pool.query("SELECT * FROM book");
            res.json(books.rows);
        } catch (e) {
            console.error("Ошибка получения книг:", e);
            res.status(500).json({ message: "Ошибка получения книг" });
        }
    }



    async getBook(req, res) {
        try {
            const { book_id } = req.body;
            const bookQuery = await pool.query("SELECT * FROM book WHERE book_id = $1", [book_id]);
            const book = bookQuery.rows[0];
            res.json(book);
        } catch (e) {
            console.error("Ошибка получения книги:", e);
            res.status(500).json({ message: "Ошибка получения книги" });
        }
    }

    async deleteBook(req, res) {
        try {
            const { book_id } = req.body;
            await pool.query("DELETE FROM book WHERE book_id = $1", [book_id]);
            res.json({status:200});
        } catch (e) {
            console.error("Ошибка получения книги:", e);
            res.status(500).json({ message: "Ошибка получения книги" });
        }
    }
}

module.exports = new bookController();
