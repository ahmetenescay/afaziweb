// controllers/articleController.js
const Article = require('../models/Article');

exports.createArticle = (req, res) => {
    const { title, content } = req.body;
    const { id: user_id } = req.user;

    try {
        const newArticle = Article.insertArticle(user_id, title, content);
        res.status(201).json({ message: 'Article created', article: newArticle });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getArticles = (req, res) => {
    try {
        const articles = Article.findAllArticles();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getArticleById = (req, res) => {
    try {
        const article = Article.findArticleById(req.params.id);
        if (article) {
            Article.updateArticleViews(req.params.id);
            res.json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.likeArticle = (req, res) => {
    try {
        Article.likeArticle(req.params.id);
        res.json({ message: 'Article liked' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateArticle = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        Article.updateArticle(id, title, content);
        res.json({ message: 'Article updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteArticle = (req, res) => {
    const { id } = req.params;

    try {
        Article.deleteArticle(id);
        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};