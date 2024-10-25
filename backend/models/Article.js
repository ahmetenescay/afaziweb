// models/Article.js
const db = require('../config/db');

const createArticleTable = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            title TEXT,
            content TEXT,
            likes INTEGER DEFAULT 0,
            views INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
    `);
};

const insertArticle = (user_id, title, content) => {
    const stmt = db.prepare('INSERT INTO articles (user_id, title, content) VALUES (?, ?, ?)');
    return stmt.run(user_id, title, content);
};

const findArticlesByUserId = (user_id) => {
    const stmt = db.prepare('SELECT * FROM articles WHERE user_id = ?');
    return stmt.all(user_id);
};

const findAllArticles = () => {
    const stmt = db.prepare('SELECT * FROM articles');
    return stmt.all();
};

const findArticleById = (id) => {
    const stmt = db.prepare('SELECT * FROM articles WHERE id = ?');
    return stmt.get(id);
};

const updateArticleViews = (id) => {
    const stmt = db.prepare('UPDATE articles SET views = views + 1 WHERE id = ?');
    return stmt.run(id);
};

const likeArticle = (id) => {
    const stmt = db.prepare('UPDATE articles SET likes = likes + 1 WHERE id = ?');
    return stmt.run(id);
};

const updateArticle = (id, title, content) => {
    const stmt = db.prepare('UPDATE articles SET title = ?, content = ? WHERE id = ?');
    return stmt.run(title, content, id);
};

const deleteArticle = (id) => {
    const stmt = db.prepare('DELETE FROM articles WHERE id = ?');
    return stmt.run(id);
};

module.exports = {
    createArticleTable,
    insertArticle,
    findArticlesByUserId,
    findAllArticles,
    findArticleById,
    updateArticleViews,
    likeArticle,
    updateArticle,
    deleteArticle
};
