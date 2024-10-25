import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../ThemeContext';

const EditResearch = () => {
    const { id } = useParams();
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [researchData, setResearchData] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const fetchResearchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/research/${id}`, {
                    headers: { Authorization: `Bearer ${currentUser.token}` }
                });
                const data = await response.json();
                setResearchData(data);
                setTitle(data.title);
                setContent(data.content);
                setLink(data.link);
            } catch (error) {
                console.error('Error fetching research data:', error);
            }
        };

        fetchResearchData();
    }, [id, currentUser.token]);

    const handleUpdateResearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/research/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`
                },
                body: JSON.stringify({ title, content, link })
            });

            if (!response.ok) {
                throw new Error('Failed to update research');
            }

            console.log('Research updated successfully');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating research:', error);
        }
    };

    const handleDeleteResearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/research/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });

            if (!response.ok) {
                throw new Error('Failed to delete research');
            }

            console.log('Research deleted successfully');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting research:', error);
        }
    };

    if (!researchData) {
        return <div>Loading...</div>;
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.background,
        color: theme.textColor
    };

    const cardStyle = {
        backgroundColor: theme.cardBackground,
        padding: '20px',
        borderRadius: '8px',
        boxShadow: theme.boxShadow,
        width: '400px',
        textAlign: 'center'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: `1px solid ${theme.borderColor}`
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px 0',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
    };

    const updateButtonStyle = {
        ...buttonStyle,
        backgroundColor: theme.buttonBackground,
        color: theme.buttonText
    };

    const deleteButtonStyle = {
        ...buttonStyle,
        backgroundColor: theme.errorColor,
        color: 'white',
        marginLeft: '10px'
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1>Araştırmayı Düzenle</h1>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={inputStyle}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Content:
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            style={{ ...inputStyle, height: '100px' }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Link:
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            style={inputStyle}
                        />
                    </label>
                </div>
                <button
                    onClick={handleUpdateResearch}
                    style={updateButtonStyle}
                >
                    Güncelle
                </button>
                <button
                    onClick={handleDeleteResearch}
                    style={deleteButtonStyle}
                >
                    Sil
                </button>
            </div>
        </div>
    );
};

export default EditResearch;
