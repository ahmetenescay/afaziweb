import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/articles/${id}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching article:', error));
    }, [id]);

    const likeArticle = () => {
        fetch(`/api/articles/${id}/like`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                setArticle(prevArticle => ({ ...prevArticle, likes: prevArticle.likes + 1 }));
            })
            .catch(error => console.error('Error liking article:', error));
    };

    if (!article) return <div>Loading...</div>;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <p>Likes: {article.likes}</p>
            <button onClick={likeArticle}>Beğen</button>
        </div>
    );
};

export default ArticleDetailPage;
