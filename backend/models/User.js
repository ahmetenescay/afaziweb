// models/User.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

const createUserTable = () => {
    const stmt = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT
    )`;
    db.exec(stmt);
};

createUserTable();

const insertUser = (name, email, password, role) => {
    const stmt = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)');
    return stmt.run(name, email, password, role);
};

const findUserByEmail = (email) => {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
};

const findUserById = (id) => {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    return stmt.get(id);
};

const updateUser = (id, name, email, password, role) => {
    const stmt = db.prepare('UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?');
    return stmt.run(name, email, password, role, id);
};

module.exports = {
    createUserTable,
    insertUser,
    findUserByEmail,
    findUserById,
    updateUser
};
