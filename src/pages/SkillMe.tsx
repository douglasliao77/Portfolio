import styled from 'styled-components';
import SkillCard from '../components/SkillCard';
import React from 'react';

export default function SkillMe() {
  return (
    <Container>
      <StackContainer>
        {skillData.map(({ category, items }, index) =>
          items.length > 0 && (
            <React.Fragment key={index}>
              <TechTitle>{category}</TechTitle>
              <TechContainer>
                {items.map((item, i) => (
                  <SkillCard key={i} title={item.title} />
                ))}
              </TechContainer>
            </React.Fragment>
          )
        )}
      </StackContainer>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3rem;
  height: auto;
  font-family: 'Josefin Sans', sans-serif;
`;

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
  column-gap: 2rem;
  row-gap: 0.5rem;
  padding: 1rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: white;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; 
    row-gap: 0.0rem;
  }
`;

const TechTitle = styled.div`
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: left;
  width: 37rem;
  min-height: 6rem;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
  border-radius: 0.5rem;
  padding: 0.8rem;
  width: 100%;
  box-sizing: border-box;
`;

const skillData = [
    { 
    category: 'MACHINE LEARNING', 
    items: [
        { source: '', title: 'Computer Vision' },
        { source: '', title: 'Monte Carlo Tree Search'},
        { source: '', title: 'Q-Learning'},
    ] 
    },
    {
    category: 'LANGUAGES',
    items: [
        {  title: 'Python' },
        {  title: 'C++' },
        {  title: 'C' },
        {  title: 'C#'},
        {  title: 'Java' },
        {  title: 'JavaScript' },
        {  title: 'TypeScript' },
        {  title: 'HTML' },
        {  title: 'CSS' },
        {  title: 'MATLAB' },
        {  title:'Julia' },
        {  title: 'R' },
        
    ]
    },
    { 
    category: 'FRAMEWORKS/ LIBRARIES', 
    items: [
      { title: 'React' },
      { title: 'Django' },
      { title: 'Flask' },
  
      {  title: 'PyTorch' },
      { title: 'scikit-learn' },
      {  title: 'Pandas' },
      { title: 'TensorFlow' },
      { title: 'NumPy' }
    ]
  },
  { 
    category: 'DATABASES', 
    items: [
        { title: 'PostgreSQL' },
        { title: 'SQLite' },
  
    ] 
    },
  {
    category: 'PLATFORMS/ TOOLS',
    items: [
        // Engine
        { title: 'Unity' },
        
        // Version Control
        { title: 'GitHub' },
        { title: 'GitLab' },
        
        // Cloud Platforms
  
        // Deployments
        { title: 'Vercel' },
  
        // CI/CD
  
        // Editors
        {  title: 'VS Code' },
        { title: 'IntelliJ' },
  
        // Communications
        { title: 'Trello' },
        { title: 'Slack' },
    ]
  },
  
];