import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../assets/images/background.jpg";
import MePhoto from "../assets/images/me2.jpg";
import { Link } from "react-router-dom";
import SkillMe from "../pages/SkillMe";
import Ericsson from "../assets/images/ericsson.png";
import Liu from "../assets/images/liu.png";
import Falkenberg from "../assets/images/falkenberg.png";
import Arla from "../assets/images/arla.png";
import Ullared from "../assets/images/ullared.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Experience() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], 
      },
    }),
  };
  

  return (
    <>
      <Container>
        <Bar $zIndex={100}>
          <BarLinks>
            <StyledRouterLink to="/">Home</StyledRouterLink>
            <StyledRouterLink to="/about">About</StyledRouterLink>
          </BarLinks>
        </Bar>
        <ParallaxBackground $offset={offset} />

        <Hero>
          <HeroLeft>
            <Photo src={MePhoto} alt="Douglas" />
          </HeroLeft>
          <HeroRight>
            <HeroTitle>Nice to meet you.</HeroTitle>
            <HeroSubtitle>
              Welcome to my portfolio, my name is Douglas. I just finished my
              degree in Computer Science & Engineering at Linköping University
              in Sweden.
            </HeroSubtitle>
            <HeroSubtitle>
              I’m driven by solving problems that make a difference. I focus on
              creating systems and processes that are impactful, reliable, and
              brings clarity, while constantly learning and refining my
              approach.
            </HeroSubtitle>
          </HeroRight>
        </Hero>
      </Container>

      <Content>
        {/* Education Section */}
        <Section>
          <SectionTitle>Education</SectionTitle>
          <AnimatedBox
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <BoxImage src={Liu} alt="Education Example" />
            <BoxContent>
              <CardTitle>M.Sc. Computer Science & Engineering</CardTitle>
              <CardSubtitle>Linköping University</CardSubtitle>
            </BoxContent>
          </AnimatedBox>

          <AnimatedBox
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <BoxImage src={Falkenberg} alt="Education Example" />
            <BoxContent>
              <CardTitle>Highschool Diploma</CardTitle>
              <CardSubtitle>Falkbergs Gymnasieskola</CardSubtitle>
            </BoxContent>
          </AnimatedBox>
        </Section>

        {/* Experience Section */}
        <Section>
          <SectionTitle>Experience</SectionTitle>

          {[ 
            { img: Ericsson, title: "Software Developer Intern", subtitle: "Ericsson" },
            { img: Liu, title: "Course Assistant", subtitle: "Linköping University" },
            { img: Liu, title: "Research Assistant", subtitle: "Linköping University" },
            { img: Arla, title: "Machine Operator", subtitle: "Arla Foods AB" },
            { img: Ullared, title: "Customer Support", subtitle: "Gekås AB" },
          ].map((exp, i) => (
            <AnimatedBox
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <BoxImage src={exp.img} alt={exp.title} />
              <BoxContent>
                <CardTitle>{exp.title}</CardTitle>
                <CardSubtitle>{exp.subtitle}</CardSubtitle>
              </BoxContent>
            </AnimatedBox>
          ))}
        </Section>

        <SkillContainer>
          <SkillMe />
        </SkillContainer>
      </Content>
    </>
  );
}

// ---- Styled Components ----

const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: var(--font-montreal-mono), monospace;
  color: #fff;
`;

const SkillContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Bar = styled.div<{ $zIndex?: number }>`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.$zIndex};
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
`;

const BarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 0.5rem 2rem;
  border-radius: 50px;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const barLinkStyles = `
  position: relative;
  color: #2c2c2c;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.3rem 0;
  transition: color 0.3s ease, transform 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #6b645c, #6b645c);
    transition: width 0.3s ease, left 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #6b645c;
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledRouterLink = styled(Link)`${barLinkStyles}`;

const ParallaxBackground = styled.div<{ $offset: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  transform: translateY(${(props) => props.$offset * 0.5}px);
  will-change: transform;
  z-index: 0;
  opacity: 0.4;
  filter: grayscale(100%) brightness(70%);
`;

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 4rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem;
    text-align: center;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  padding-right: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 8rem;
  margin-bottom: 3rem;
  color: #2c2c2c;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  max-width: 600px;
  color: #2c2c2c;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    max-width: 100%;
  }
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Photo = styled.img`
  z-index: 5;
  width: 70%;
  height: auto;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Content = styled.div`
  padding: 4rem;
  background: black;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 6rem;
  width: 80%;
  margin-left: 10%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
  padding-bottom: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(12px);
`;

const AnimatedBox = styled(motion(Box))`
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BoxImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: contain;
`;

const BoxContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardSubtitle = styled.h4`
  font-size: 1.5rem;
  margin: 0.3rem 0;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
