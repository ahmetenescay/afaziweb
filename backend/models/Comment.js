// models/Comment.js
const db = require('../config/db');

const createCommentTable = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            role TEXT,
            article_id INTEGER,
            parent_comment_id INTEGER,
            content TEXT,
            likes INTEGER DEFAULT 0,
            views INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (article_id) REFERENCES articles(id),
            FOREIGN KEY (parent_comment_id) REFERENCES comments(id)
        );
    `);
};

const insertComment = (user_id, role, article_id, parent_comment_id, content) => {
    const stmt = db.prepare('INSERT INTO comments (user_id, role, article_id, parent_comment_id, content) VALUES (?, ?, ?, ?, ?)');
    return stmt.run(user_id, role, article_id, parent_comment_id, content);
};

const findCommentsByArticleId = (article_id) => {
    const stmt = db.prepare('SELECT * FROM comments WHERE article_id = ?');
    return stmt.all(article_id);
};

const findCommentById = (id) => {
    const stmt = db.prepare('SELECT * FROM comments WHERE id = ?');
    return stmt.get(id);
};

const updateCommentViews = (id) => {
    const stmt = db.prepare('UPDATE comments SET views = views + 1 WHERE id = ?');
    return stmt.run(id);
};

const likeComment = (id) => {
    const stmt = db.prepare('UPDATE comments SET likes = likes + 1 WHERE id = ?');
    return stmt.run(id);
};

const updateComment = (id, content) => {
    const stmt = db.prepare('UPDATE comments SET content = ? WHERE id = ?');
    return stmt.run(content, id);
};

const deleteComment = (id) => {
    const stmt = db.prepare('DELETE FROM comments WHERE id = ?');
    return stmt.run(id);
};
module.exports = {
    createCommentTable,
    insertComment,
    findCommentsByArticleId,
    findCommentById,
    updateCommentViews,
    likeComment,
    updateComment,
    deleteComment
};

