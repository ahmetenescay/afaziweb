const db = require('../config/db');

const createResearchTable = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS research (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            link TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
};

const insertResearch = async (title, content, link) => {
    const stmt = db.prepare('INSERT INTO research (title, content, link) VALUES (?, ?, ?)');
    return stmt.run(title, content, link);
};

const findAllResearches = async () => {
    const stmt = db.prepare('SELECT * FROM research');
    return stmt.all();
};

const findResearchById = async (id) => {
    const stmt = db.prepare('SELECT * FROM research WHERE id = ?');
    return stmt.get(id);
};

const updateResearch = async (id, title, content, link) => {
    const stmt = db.prepare('UPDATE research SET title = ?, content = ?, link = ? WHERE id = ?');
    return stmt.run(title, content, link, id);
};

const deleteResearch = async (id) => {
    const stmt = db.prepare('DELETE FROM research WHERE id = ?');
    return stmt.run(id);
};

module.exports = {
    createResearchTable,
    insertResearch,
    findAllResearches,
    findResearchById,
    updateResearch,
    deleteResearch
};
