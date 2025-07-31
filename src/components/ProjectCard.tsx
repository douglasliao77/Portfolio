import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard'; 

interface Skill {
  title: string;
  source?: string;
}

interface CardProps {
  title: string;
  imageSrc?: string;
  skills?: Skill[];
}

const ProjectCard: React.FC<CardProps> = ({ title, imageSrc, skills }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <CardImage>
        {imageSrc && <Image src={imageSrc} alt={title} />}
      </CardImage>
      <SkillsContainer>
        {skills?.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
          />
        ))}
      </SkillsContainer>
    </Card>
  );
};

// Styled components
const Card = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px #eb7b13;
    transform: scale(1.02);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 280px;
  background-color: #64748b;
  border-radius: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
`;

// Container for skill cards, you can customize spacing here
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

export default ProjectCard;
