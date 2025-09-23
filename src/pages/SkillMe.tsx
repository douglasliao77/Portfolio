import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ✅ Interface for AnimatedCard props
interface AnimatedCardProps {
  children: ReactNode;
  index: number;
}

export default function SkillMe() {
  let globalCardIndex = 0;

  return (
    <Container>
      <StackContainer>
        {skillData.map(({ category, items }, index) =>
          items.length > 0 && (
            <React.Fragment key={index}>
              <AnimatedCard index={globalCardIndex++}>
                <TechTitle>{category}</TechTitle>
              </AnimatedCard>
              <TechContainer>
                {items.map((item) => {
                  const currentIndex = globalCardIndex++;
                  return (
                    <AnimatedCard key={currentIndex} index={currentIndex}>
                      <SkillCard title={item.title} />
                    </AnimatedCard>
                  );
                })}
              </TechContainer>
            </React.Fragment>
          )
        )}
      </StackContainer>
    </Container>
  );
}

function AnimatedCard({ children, index }: AnimatedCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1, // stagger animation based on index
        ease: easeOut,       // properly typed easing
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}

// 💅 Styled components
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
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 12rem;
  font-weight: bold;
  color: white;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

const TechTitle = styled.div`
  color: white;
  text-align: left;
  width: 100%;
  font-size: 3.5rem;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
  width: 100%;
`;

const skillData = [
  {
    category: 'MACHINE LEARNING',
    items: [
      { title: 'Computer Vision' },
      { title: 'Monte Carlo Tree Search' },
      { title: 'Q-Learning' },
    ],
  },
  {
    category: 'LANGUAGES',
    items: [
      { title: 'Python' },
      { title: 'C++' },
      { title: 'C' },
      { title: 'C#' },
      { title: 'Java' },
      { title: 'JavaScript' },
      { title: 'TypeScript' },
      { title: 'HTML' },
      { title: 'CSS' },
      { title: 'MATLAB' },
      { title: 'Julia' },
      { title: 'R' },
    ],
  },
  {
    category: 'FRAMEWORKS/ LIBRARIES',
    items: [
      { title: 'React' },
      { title: 'Django' },
      { title: 'Flask' },
      { title: 'PyTorch' },
      { title: 'scikit-learn' },
      { title: 'Pandas' },
      { title: 'TensorFlow' },
      { title: 'NumPy' },
    ],
  },
  {
    category: 'DATABASES',
    items: [
      { title: 'PostgreSQL' },
      { title: 'SQLite' },
    ],
  },
  {
    category: 'PLATFORMS/ TOOLS',
    items: [
      { title: 'GitHub' },
      { title: 'GitLab' },
      { title: 'Streamlit' },
      { title: 'Vercel' },
      { title: 'VS Code' },
      { title: 'IntelliJ' },
    ],
  },
];
