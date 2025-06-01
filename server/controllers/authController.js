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

const generateAccessToken = (email, user_id) => {
    const payload = {
        email, user_id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({message: 'Ошибка при регистрации', errors});
            }
            console.log(errors)
            const {password, email} = req.body;
            const user_id = crypto.randomBytes(4.5).toString('hex');

            const candidate = await pool.query('SELECT * FROM person WHERE email = $1', [email]);
            if (candidate.rows.length > 0) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'});
            }

            const hash_password = bcrypt.hashSync(password, 7);
            const userQuery = `
                INSERT INTO person (password,email,user_id)
                VALUES ($1, $2, $3)
                RETURNING *;
            `;

            const userValues = [hash_password, email, user_id];
            await pool.query(userQuery, userValues);
            return res.json({success: true});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'});
        }
    }

    async login(req, res) {
        try {
            let validErrors = validationResult(req);
            if (!validErrors.isEmpty()) {
                return res.json({message: 'Ошибка при регистрации', validErrors});
            }
            const {email, password} = req.body;
            const userResult = await pool.query('SELECT * FROM person WHERE email = $1', [email]);
            if (userResult.rows.length === 0) {
                let error = {param: 'email'}
                validErrors.errors.push(error)
                return res.json({validErrors});
            }
            const user = userResult.rows[0];
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                let error = {param: 'password'}
                validErrors.errors.push(error)
                return res.json({validErrors});
            }
            const token = generateAccessToken(user.email, user.user_id)
            return res.json(token)
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'});
        }
    }

    async connect(req, res) {
        try {
            const {user_id} = req.body;
            const full_user = await pool.query(`SELECT * FROM person WHERE user_id = $1`, [user_id]);
            const user = full_user.rows[0];

            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }

            const token = generateAccessToken(
                user.email,
                user.user_id
            );

            return res.json(token);
        } catch (e) {
            console.error("Error occurred:", e);
            return res.status(500).json({error: 'Internal server error'});
        }
    }


}

module.exports = new AuthController();
