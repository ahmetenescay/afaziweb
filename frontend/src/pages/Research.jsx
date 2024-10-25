import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import ResearchCard from '../components/ResearchCard';
import afaziImage from '../assets/3.png';

const Resources = () => {
  const { theme } = useContext(ThemeContext);
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/research');
        const data = await response.json();
        if (Array.isArray(data)) {
          setResearchData(data);
        } else {
          console.error('Data is not an array:', data); // Debugging: Log if data is not an array
          setResearchData([]); // Ensure researchData is always an array
        }
      } catch (error) {
        console.error('Error fetching research data:', error);
        setResearchData([]); // Ensure researchData is always an array in case of error
      }
    };

    fetchResearchData();
  }, []);

  const contentStyle = {
    background: theme.background,
    color: theme.textColor,
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
  };

  const researchContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Each row has three columns
    gap: '20px', // Gap between cards
    margin: '0 auto', // Center the cards horizontally
    maxWidth: '1200px', // Maximum width of the cards container
  };

  return (
    <div style={contentStyle}>
      <h1><strong>Güncel Araştırmalar ve Akademik Yazılar</strong></h1>
      <div style={researchContainerStyle}>
        {researchData.map((research, index) => (
          <ResearchCard
            key={index}
            image={afaziImage}
            title={research.title}
            description={research.content}
            link={`/research/${research.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
