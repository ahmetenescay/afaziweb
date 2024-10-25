// routes/comment.js
const express = require('express');
const { createComment, getCommentsByArticleId, likeComment, updateComment, deleteComment } = require('../controllers/commentController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createComment);
router.get('/article/:article_id', protect, getCommentsByArticleId);
router.post('/:id/like', protect, likeComment);
router.put('/:id', protect, updateComment);
router.delete('/:id', protect, deleteComment);

module.exports = router;
