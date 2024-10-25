import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const ResearchDetail = () => {
    const { id } = useParams();
    const [research, setResearch] = useState(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const fetchResearch = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/research/${id}`);
                const data = await response.json();
                console.log(data);
                setResearch(data);
            } catch (error) {
                console.error('Error fetching research:', error);
            }
        };

        fetchResearch();
    }, [id]);

    const loadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
        color: theme.textColor
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.background
    };

    const cardStyle = {
        backgroundColor: theme.cardBackground,
        padding: '20px',
        borderRadius: '8px',
        boxShadow: theme.boxShadow,
        width: '80%',
        maxWidth: '600px',
        textAlign: 'center'
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: theme.textColor
    };

    const contentStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        color: theme.textColor
    };

    const linkStyle = {
        fontSize: '16px',
        color: theme.linkColor,
        textDecoration: 'none',
        border: `1px solid ${theme.linkColor}`,
        borderRadius: '4px',
        padding: '10px 20px',
        display: 'inline-block',
        transition: 'background-color 0.3s, color 0.3s'
    };

    const handleLinkHover = (event, isHovering) => {
        if (isHovering) {
            event.target.style.backgroundColor = theme.linkColor;
            event.target.style.color = '#fff';
        } else {
            event.target.style.backgroundColor = 'transparent';
            event.target.style.color = theme.linkColor;
        }
    };

    if (!research) {
        return <div style={loadingStyle}>Loading...</div>;
    }

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>{research.title}</h1>
                <p style={contentStyle}>{research.content}</p>
                <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                >
                    Daha Fazla Bilgi
                </a>
            </div>
        </div>
    );
};

export default ResearchDetail;
