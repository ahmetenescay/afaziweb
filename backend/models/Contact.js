const db = require('../config/db');

const createContactTable = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
};

const insertContact = (name, email, phone, message) => {
    const stmt = db.prepare('INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)');
    return stmt.run(name, email, phone, message);
};

const findAllContacts = () => {
    const stmt = db.prepare('SELECT * FROM contact');
    return stmt.all();
};

const findContactById = (id) => {
    const stmt = db.prepare('SELECT * FROM contact WHERE id = ?');
    return stmt.get(id);
};

const deleteContact = (id) => {
    const stmt = db.prepare('DELETE FROM contact WHERE id = ?');
    return stmt.run(id);
};

module.exports = {
    createContactTable,
    insertContact,
    findAllContacts,
    findContactById,
    deleteContact
};
