import React from 'react';
import styled from 'styled-components';

interface CardData {
  id: string;
  number: string;
  title: string;
  content: string;
  skills: string[];
}

const cardsData: CardData[] = [
  { 
    id: 'card1', 
    number: '01', 
    title: 'Data Structures & Algorithms', 
    content: 'Foundational computer science concepts. Solve problems efficiently with structured approaches.', 
    skills: ['Memory Management', 'Template & Generic Programming',  'Containers', 'File I/O & Serialization', 'Graphs & Trees'] 
  },
  {
    id: 'card2',
    number: '02',
    title: 'DBMS, OOP & OS Fundamentals',
    content: 'I apply core concepts in databases, object-oriented programming, and operating systems to create software that is reliable, efficient, and easy to maintain.',
    skills: ['SQL', 'Transactions', 'Classes & Objects', 'Processes']
  }
  ,
  {
    id: 'card3',
    number: '03',
    title: 'Documentation & Communication',
    content: 'Clear documentation saves time and avoids confusion. I focus on making technical concepts straightforward and accessible so teams can work more efficiently.',
    skills: ['Technical Writing', 'API Documentation', 'System Architecture', 'Code Reviews']
  },

  {
    id: 'card4',
    number: '04',
    title: 'Insight & Reporting',
    content: 'I transform raw data into actionable insights through clear dashboards and visualizations, helping teams make informed decisions efficiently.',
    skills: ['Statistics & Machine learning', 'Data cleansing', 'Feature engineering', 'Data Visualization', 'KPIs']
  },
];

const Container = styled.div`
  background: #080807;
  padding: 4rem 2rem;
`;

const Card = styled.div<{ topOffset: number; zIndex: number }>`
  background: #080807;
  padding: 2.5rem;
  margin-bottom: 5rem;
  color: #f9fafb;
  position: sticky;
  top: ${({ topOffset }) => topOffset}px;
  z-index: ${({ zIndex }) => zIndex};
  border-top: 1px solid #393632;
  display: flex;
  align-items: flex-start;
  gap: 50rem; 

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem; 
  }
`;

const CardNumber = styled.div`
  font-size: 5rem; 
  font-weight: 900;
  color: #d1d1c7;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

const CardTitle = styled.h2`
  font-size: 5rem; 
  font-weight: 700;
  margin: 0 0 2rem 0;
  color: #d1d1c7;
`;

const CardContent = styled.p`
  font-size: 2rem; 
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #ccc;
`;

const CardSkills = styled.ul`
  list-style: none; /* remove default bullets */
  padding-left: 0;
  margin: 0;
  counter-reset: skill-counter; /* initialize counter */
`;

const SkillItem = styled.li`
  font-size: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #d1d1c7;
  counter-increment: skill-counter; /* increment counter */

  &::before {
    content: counter(skill-counter, decimal-leading-zero) ". "; /* 01, 02, 03 */
    color: #d1d1c7;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;


const CollapsibleCards: React.FC = () => {
  return (
    <Container>
      {cardsData.map((card, index) => (
        <Card 
          key={card.id}
          topOffset={100 + index * 120} 
          zIndex={index + 1}
        >
          <CardNumber>{card.number}</CardNumber>
          <CardContentWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
            <CardSkills>
              {card.skills.map(skill => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </CardSkills>
          </CardContentWrapper>
        </Card>
      ))}
    </Container>
  );
};

export default CollapsibleCards;
