
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

export default function Intro() {
  return (
    <Container>
      <ContentContainer>
        <Title>
          <FirstName> Douglas</FirstName> 
          <LastName> Liao </LastName></Title>
        <Subtitle>Engineer | AI Enthusiast</Subtitle>

        <Icons>
          <IconLink href="mailto:douglasliao77@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail size={28} />
          </IconLink>
          <IconLink href="https://github.com/douglasliao77" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/douglasliao/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </IconLink>
        </Icons>
      </ContentContainer>

      <ScrollDown>
        <FaChevronDown size={24} />
      </ScrollDown>
    </Container>
  );
}

const FirstName = styled.span`
  color: rgb(216, 78, 44);
`;

const LastName = styled.span`
  color: white;
`;


const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  font-family: "Josefin Sans", "Josefin Sans Fallback";
`;

const ContentContainer = styled.div`
  text-align: center;
  
`;

const Title = styled.h1`
  font-size: clamp(6rem, 18vw, 18rem);
  margin: 0;
  color: white;  
  font-weight: 10;
`;

const Subtitle = styled.p`
  font-size: 3rem;
  margin-top: 1rem;
  color: white;
`;

const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: white;
  transition: transform 0.2s ease;
  padding: 2rem;
  &:hover {
    transform: scale(1.2);
    color: #aaa; /* Slightly lighter on hover */
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 30px;
  animation: bounce 2s infinite;
  color: white;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }
`;
