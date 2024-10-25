import React from 'react';
import { Link } from 'react-router-dom';
const ResearchCard = ({ image, title, description, link }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const contentStyle = {
    padding: '15px',
  };

  const linkStyle = {
    color: '#1e90ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <div style={contentStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} style={linkStyle}> Devamını Oku... </Link >
      </div>
    </div>
  );
};

export default ResearchCard;
