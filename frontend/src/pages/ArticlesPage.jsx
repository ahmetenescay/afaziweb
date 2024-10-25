import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul style={{ listStyleType: 'none' }}>
                {articles.map(article => (
                    <li key={article.id} style={{ marginTop: "10px" }}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                        <h5>{article.content}</h5>
                        <p>{article.views} views</p>
                        <p>{article.likes} likes</p>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default ArticlesPage;
