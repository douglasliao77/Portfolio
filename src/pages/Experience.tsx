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


export default function Experience() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              creating systems and processes that are impactful, reliable, 
              and brings clarity, while constantly learning and refining my approach.
            </HeroSubtitle>
          </HeroRight>
        </Hero>
      </Container>

      <Content>
        {/* Education Section */}
        <Section>
          <SectionTitle>Education</SectionTitle>
          <Box>
            <BoxImage src={Liu} alt="Education Example" />
            <BoxContent>
              <CardTitle>M.Sc. Computer Science & Engineering</CardTitle>
              <CardSubtitle>Linköping University</CardSubtitle>
              <CardDescription>

              </CardDescription>
            </BoxContent>
          </Box>
          
          <Box>
            <BoxImage src={Falkenberg} alt="Education Example" />
            <BoxContent>
              <CardTitle>Highschool Diploma</CardTitle>
              <CardSubtitle>Falkbergs Gymnasieskola</CardSubtitle>
              <CardDescription>
              </CardDescription>
            </BoxContent>
          </Box>
        </Section>

        {/* Experience Section */}
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <Box>
            <BoxImage src={Ericsson} alt="Experience Example" />
            <BoxContent>
              <CardTitle>Software Developer Intern</CardTitle>
              <CardSubtitle>Ericsson</CardSubtitle>
              <CardDescription>
              </CardDescription>
            </BoxContent>
          </Box>
          <Box>
            <BoxImage src={Liu} alt="Experience Example" />
            <BoxContent>
              <CardTitle>Course Assistant</CardTitle>
              <CardSubtitle>Linköping University</CardSubtitle>
              <CardDescription>
              </CardDescription>
            </BoxContent>
          </Box>
          <Box>
            <BoxImage src={Liu} alt="Experience Example" />
            <BoxContent>
              <CardTitle>Research Assistant</CardTitle>
              <CardSubtitle>Linköping University</CardSubtitle>
              <CardDescription>
              </CardDescription>
            </BoxContent>
          </Box>

          <Box>
            <BoxImage src={Arla} alt="Experience Example" />
            <BoxContent>
              <CardTitle>Machine Operator</CardTitle>
              <CardSubtitle>Arla Foods AB</CardSubtitle>
              <CardDescription>
              </CardDescription>
            </BoxContent>
          </Box>

          <Box>
            <BoxImage src={Ullared} alt="Experience Example" />
            <BoxContent>
              <CardTitle>Customer support</CardTitle>
              <CardSubtitle>Gekås AB</CardSubtitle>
              <CardDescription>
              </CardDescription>
            </BoxContent>
          </Box>
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
`;

const HeroLeft = styled.div`
  flex: 1;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  font-size: 8rem;
  margin-bottom: 3rem;
  color: #2c2c2c;
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  max-width: 600px;
  color: #2c2c2c;
  font-weight: 700;
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Photo = styled.img`
  z-index: 5;
  width: 70%;
  height: 45%;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  padding: 4rem;
  background: black;
`;

const Section = styled.div`
  margin-bottom: 6rem;
  width: 80%;
  margin-left: 10%;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
  padding-bottom: 0.5rem;
  color: white;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
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
`;

const CardSubtitle = styled.h4`
  font-size: 1.5rem;
  margin: 0.3rem 0;
  color: #ccc;
`;

const CardDescription = styled.p`
  font-size: 1.3rem;
  color: white;
  line-height: 1.8;
`;
