import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';
import boat from '../assets/images/boat.png';
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <Container>
      <Bar $zIndex={100}>
        <BarLinks>
        <StyledRouterLink to="/">Home</StyledRouterLink>
          <StyledRouterLink to="/about">About</StyledRouterLink>
        </BarLinks>
      </Bar>

      <Title>
        <FirstName> DOUGLAS</FirstName> 
        <LastName> LIAO </LastName>
      </Title>
      {/* <Subtitle>Software Engineer | Software Developer | Data Engineer</Subtitle> */}

      <HeroContactPanel>
        <ContactHeading>Lets connect!</ContactHeading>
        <ContactLinks>
          <ContactCard href="mailto:douglasliao77@gmail.com">
            <MdEmail />
            <ContactLabel>Email Me</ContactLabel>
          </ContactCard>
          <ContactCard href="https://www.linkedin.com/in/douglasliao/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <ContactLabel>LinkedIn</ContactLabel>
          </ContactCard>
          <ContactCard href="https://github.com/douglasliao77" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <ContactLabel>GitHub</ContactLabel>
          </ContactCard>
        </ContactLinks>
      </HeroContactPanel>

      <ScrollDown>
        <FaChevronDown size={48} />
      </ScrollDown>
    </Container>
  );
}

// --- Styled Components ---

const Container = styled.section`
  position: relative;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px; /* space for fixed bar */
  background: #e8e8e3;
  font-family: var(--font-montreal-mono), monospace;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${boat});
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    filter: grayscale(100%) brightness(70%);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Bar = styled.div<{ $zIndex?: number }>`
  position: fixed; 
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 70px;
  display: flex;
  background: red;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.$zIndex};
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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

const FirstName = styled.span`color: black;`;
const LastName = styled.span`color: black;`;

const Title = styled.div`
  width: 100%;
  font-size: clamp(7rem, 16vw, 20rem);
  text-align: center;
  margin-top: 8rem;
  background: linear-gradient(90deg,#2c2c2c, #6b645c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

/*
const Subtitle = styled.p`
  font-size: clamp(2rem, 3vw, 3rem);
  text-align: center;
  color: #6b645c;
  font-weight: 700;
  margin-top: 1.5rem;
  letter-spacing: 2px;
  line-height: 1.3;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
`;
*/

const ScrollDown = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: black;

  @keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, 8px); }
  }
`;

const HeroContactPanel = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactHeading = styled.h3`
  font-size: 2.2rem;
  color: #2c2c2c;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactCard = styled.a`
  background: rgba(107, 100, 92, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  border: 1px solid rgba(107, 100, 92, 0.3);
  width: 17rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: #2c2c2c;
  transition: all 0.35s ease;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  cursor: pointer;
  position: relative;

  svg {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    transition: transform 0.35s ease, color 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.1);
    svg { color: #6b645c; }
    box-shadow: 0 15px 30px rgba(0,0,0,0.25);
    background: rgba(107, 100, 92, 0.25);
  }
`;

const ContactLabel = styled.span`
  font-size: 1.5rem;
  color: #6b645c;
  text-align: center;
  transition: color 0.3s ease;

  ${ContactCard}:hover & {
    color: #2c2c2c;
  }
`;
