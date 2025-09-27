import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

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
  },
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

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div<{ topOffset: number; zIndex: number; visible: boolean }>`
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
  gap: 10rem;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeUp} 0.8s ease forwards;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem; 
    top: ${({ topOffset }) => topOffset * 1.3}px;
  }
`;

const CardNumber = styled.div`
  font-size: 5rem; 
  font-weight: 900;
  color: #d1d1c7;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardTitle = styled.h2`
  font-size: 4rem; 
  font-weight: 700;
  margin: 0 0 2rem 0;
  color: #d1d1c7;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

const CardContent = styled.p`
  font-size: 1.8rem; 
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

const CardSkills = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  counter-reset: skill-counter;
`;

const SkillItem = styled.li`
  font-size: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #d1d1c7;
  counter-increment: skill-counter;

  &::before {
    content: counter(skill-counter, decimal-leading-zero) ". ";
    color: #d1d1c7;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CollapsibleCards: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]);
          } else {
            // remove from visible when scrolling out of view
            setVisibleCards((prev) => prev.filter((id) => id !== entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const setRef = (el: HTMLDivElement | null) => {
    if (el) {
      observerRef.current?.observe(el);
    }
  };

  return (
    <Container>
      {cardsData.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          ref={setRef}
          topOffset={100 + index * 110}
          zIndex={index + 1}
          visible={visibleCards.includes(card.id)}
        >
          <CardNumber>{card.number}</CardNumber>
          <CardContentWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
            <CardSkills>
              {card.skills.map((skill) => (
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
