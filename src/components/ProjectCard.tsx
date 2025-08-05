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
  websiteUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  imageSrc,
  skills,
  websiteUrl,
  githubUrl,
}) => {
  return (
    <Container>
      <CardImage>
        {imageSrc && <Image src={imageSrc} alt={title} />}
      </CardImage>
      <SkillsContainer>
        {skills?.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} showIcon={false} />
        ))}
      </SkillsContainer>
      {(websiteUrl || githubUrl) && (
        <ButtonContainer>
          {websiteUrl && (
            <Button href={websiteUrl} target="_blank">
              Website
            </Button>
          )}
          {githubUrl && (
            <Button href={githubUrl} target="_blank">
              GitHub
            </Button>
          )}
        </ButtonContainer>
      )}
    </Container>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

const Button = styled.a`
  width: 40%;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem 2rem;
  background-color: #222;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  font-size: 2rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444;
  }


`;



const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const CardImage = styled.div`
  background-color: #64748b;
  border-radius: 1rem;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ProjectCard;
