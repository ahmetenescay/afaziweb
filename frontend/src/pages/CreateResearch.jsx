import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../ThemeContext';

const CreateResearch = ({ researchData, setResearchData }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { theme } = useContext(ThemeContext);

    const handleCreate = async () => {
        const newResearch = { title, content, link };
        try {
            const response = await fetch('http://localhost:5000/api/research', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`
                },
                body: JSON.stringify(newResearch),
            });
            if (response.ok) {
                const createdResearch = await response.json();
                console.log('Yeni araştırma oluşturuldu:', createdResearch);
                navigate('/dashboard');
            } else {
                console.error('Yeni araştırma oluşturulurken bir hata oluştu:', await response.text());
            }
        } catch (error) {
            console.error('Yeni araştırma oluşturulurken bir hata oluştu:', error);
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.background,
        color: theme.textColor,
    };

    const cardStyle = {
        backgroundColor: theme.cardBackground,
        padding: '20px',
        borderRadius: '8px',
        border: `1px solid ${theme.borderColor}`,
        boxShadow: theme.boxShadow,
        width: '400px',
        textAlign: 'center'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: `1px solid ${theme.borderColor}`,
        color: theme.textColor
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px 0',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: theme.buttonBackground,
        color: theme.buttonText
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ color: theme.secondaryText }}>Yeni Araştırma Oluştur</h2>
                <div>
                    <label style={{ color: theme.secondaryText }}>Başlık:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label style={{ color: theme.secondaryText }}>İçerik:</label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        style={{ ...inputStyle, height: '100px' }}
                    />
                </div>
                <div>
                    <label style={{ color: theme.secondaryText }}>Link:</label>
                    <input
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <button onClick={handleCreate} style={buttonStyle}>
                    Oluştur
                </button>
            </div>
        </div>
    );
};

export default CreateResearch;
