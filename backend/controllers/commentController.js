// controllers/commentController.js
const Comment = require('../models/Comment');

exports.createComment = (req, res) => {
    const { article_id, parent_comment_id, content } = req.body;
    const { id: user_id, role } = req.user;

    try {
        const newComment = Comment.insertComment(user_id, role, article_id, parent_comment_id, content);
        res.status(201).json({ message: 'Comment created', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getCommentsByArticleId = (req, res) => {
    try {
        const comments = Comment.findCommentsByArticleId(req.params.article_id);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.likeComment = (req, res) => {
    try {
        Comment.likeComment(req.params.id);
        res.json({ message: 'Comment liked' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateComment = (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        Comment.updateComment(id, content);
        res.json({ message: 'Comment updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteComment = (req, res) => {
    const { id } = req.params;

    try {
        Comment.deleteComment(id);
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
