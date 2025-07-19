import React from 'react';
import styled from 'styled-components';

const primaryBlue = '#2196F3'; // Main brand blue
const darkerBlue = '#1976D2'; // Darker shade for gradients
const lighterBlue = '#64B5F6'; // Lighter shade for accents
const accentYellow = '#FFC107'; // Accent color for highlights
const backgroundLight = '#E3F2FD'; // Very light blue for main background
const backgroundCard = '#FFFFFF'; // Pure white for card backgrounds
const textDark = '#263238'; // Very dark grey/blue for main text
const textMedium = '#455A64'; // Medium grey/blue for descriptions
const textLight = '#78909C'; // Light grey/blue for secondary info
const borderColor = '#BBDEFB'; // Light blue for borders
const errorColor = '#F44336'; // Standard red for error/coming soon

const ResourcesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${backgroundLight};
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: ${primaryBlue};
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid ${lighterBlue};
  padding-bottom: 0.5rem;
`;

const ResourceSection = styled.div`
  margin-bottom: 2rem;
`;

const ResourceCard = styled.div`
  background: ${backgroundCard};
  border-radius: 12px;
  padding: 2.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid ${borderColor};
  
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.h3`
  color: ${textDark};
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const CardDescription = styled.p`
  color: ${textMedium};
  line-height: 1.7;
  font-size: 1.15rem;
`;

function Resources() {
  const resources = [
    {
      title: 'Deep Dive into Algorithm Theory',
      description: 'Access comprehensive guides and animated examples that break down complex algorithm concepts into digestible parts, perfect for all learning levels.',
    },
    {
      title: 'Exclusive Notes & Printable Cheat Sheets',
      description: 'Download expertly crafted PDF notes and convenient cheat sheets to accelerate your learning and revision process, making study time more efficient.',
    },
    {
      title: 'Curated YouTube Playlists',
      description: 'Discover hand-picked video tutorials and lectures from renowned educators, providing visual and auditory learning experiences to complement your studies.',
    },
    {
      title: 'Interactive Quizzes & MCQs',
      description: 'Challenge yourself with our engaging quizzes and multiple-choice questions designed to solidify your understanding and test your retention of algorithmic principles.',
    },
    {
      title: 'Problem Solving Practice Platform',
      description: 'Work through a variety of real-world coding problems to apply your algorithmic knowledge and enhance your practical problem-solving skills.',
      comingSoon: true
    }
  ];

  return (
    <ResourcesContainer>
      <SectionTitle>Unlock a Wealth of Learning Resources!</SectionTitle>

      {resources.map((resource, index) => (
        <ResourceSection key={index}>
          <ResourceCard>
            <CardTitle>{resource.title}</CardTitle>
            <CardDescription>{resource.description}</CardDescription>
            {resource.comingSoon && (
              <span style={{ color: errorColor, fontWeight: 'bold', fontSize: '0.9rem', marginTop: '1rem', display: 'block' }}>Coming Soon</span>
            )}
          </ResourceCard>
        </ResourceSection>
      ))}
    </ResourcesContainer>
  );
}

export default Resources;