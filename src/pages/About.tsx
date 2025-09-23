import styled from "styled-components";

// Styled Components
const About = styled.section`
  position: relative;
  background: #080807;
  color: #111827;
  padding: 8rem 2rem;
  min-height: 20vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 60ch;
    text-align: center;
  }

  border-top-left-radius: 4rem;  
  border-top-right-radius: 4rem;
`;

const Title = styled.h1`
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: clamp(5rem, 12vw, 14rem);
  font-weight: 550;
  color: rgb(209, 209, 199);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export default function AboutMe() {
  return (
    <About>
      <Title>WHAT I DO  /</Title>

    </About>
  );
};
