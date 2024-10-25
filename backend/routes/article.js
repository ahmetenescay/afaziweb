// routes/article.js
const express = require('express');
const { createArticle, getArticles, getArticleById, likeArticle, updateArticle, deleteArticle } = require('../controllers/articleController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createArticle);
router.get('/', protect, getArticles);
router.get('/:id', protect, getArticleById);
router.post('/:id/like', protect, likeArticle);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

module.exports = router;
