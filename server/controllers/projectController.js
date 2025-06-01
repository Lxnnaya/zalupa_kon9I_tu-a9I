// authController.js
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const {secret} = require("../config")
const uuid = require('uuid');
const path = require('path');
const pool = require('../db'); // Подключение к базе данных
const {error} = require('console');



class AuthController {
    async getProjects(req, res) {
        try {
            const {user_id} = req.body;

            const projects = await pool.query('SELECT * FROM project WHERE user_id = $1', [user_id]);

            return res.json(projects.rows);
        } catch (e) {
            console.log(e);
        }
    }

    async getProject(req, res) {
        try {
            const {project_id} = req.body;

            const project = await pool.query('SELECT * FROM project WHERE project_id = $1', [project_id]);

            return res.json(project.rows[0]);
        } catch (e) {
            console.log(e);
        }
    }

    async createProject(req, res) {
        try {
            const {name,user_id} = req.body;

            const project_id = uuid.v4();

            const projectQuery = `
            INSERT INTO project (name,text,user_id,project_id,creation_time) 
            VALUES ($1, $2, $3, $4,$5) RETURNING *;
        `;
            const values = [name,'',user_id,project_id,new Date()];
            const project = await pool.query(projectQuery, values);

            res.json(project.rows[0]);
        } catch (e) {
            console.error("Ошибка загрузки книги:", e);
            res.status(500).json({message: "Ошибка загрузки книги"});
        }
    }

    async saveProject(req, res) {
        try {
            const {project_id,text} = req.body;

            await pool.query('UPDATE project SET text = $2 WHERE project_id = $1 ', [project_id,text]);

            res.json({status:200});
        } catch (e) {
            console.error("Ошибка загрузки книги:", e);
            res.status(500).json({message: "Ошибка загрузки книги"});
        }
    }

}

module.exports = new AuthController();
