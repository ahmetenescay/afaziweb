// routes/article.js
const express = require('express');
const { createArticle, getArticles, getArticleById, likeArticle, updateArticle, deleteArticle } = require('../controllers/articleController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createArticle);
router.get('/', getArticles);
router.get('/:id', getArticleById);
router.post('/:id/like', protect, likeArticle);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

module.exports = router;
