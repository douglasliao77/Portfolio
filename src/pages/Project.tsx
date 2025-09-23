import styled from 'styled-components'; 
import bostad from "../assets/images/bostad.png";
import network from "../assets/images/network.png";

import thesis from "../assets/thesis.pdf";

export default function Project() {
    return (
      <Container>
        {/* Ultimate Tic Tac Toe */}
        <ProjectRow>
            <ProjectDetails>
                <ProjectTitle>Ultimate Tic Tac Toe</ProjectTitle>
                <ProjectDescription>
                  An advanced variation of the classic game, introducing layered
                  mechanics that emphasize strategy, decision-making, and 
                  dynamic interactions across multiple boards.
                </ProjectDescription>
                <Links>
                    <Link href="https://github.com/douglasliao77/tic-tac-toe-2" target="_blank">GitHub</Link>
                    <Link href="https://metatictactoe.vercel.app/" target="_blank">Live App</Link>
                </Links>
            </ProjectDetails>
            <ProjectIframeWrapper>
                <ProjectIframe 
                    src="https://metatictactoe.vercel.app/" 
                    title="Project Demo"
                />
            </ProjectIframeWrapper>
        </ProjectRow>

        {/* Bostadspriser */}
        <ProjectRow>
            <ProjectDetails>
                <ProjectTitle>Bostadspriser</ProjectTitle>
                <ProjectDescription>
                  A data-driven project analyzing housing price trends in Sweden to 
                  uncover insights into market dynamics and long-term 
                  developments.
                </ProjectDescription>
                <Links>
                    <Link href="https://github.com/douglasliao77/House-Pricing-Forecasting" target="_blank">GitHub</Link>
                    <Link href="https://bostadspriser.streamlit.app/Home" target="_blank">Live App</Link>
                </Links>
            </ProjectDetails>
            <ImageWrapper>
                <ProjectImage src={bostad} alt="Bostadspriser Dashboard"/>
            </ImageWrapper>    
        </ProjectRow>

        {/* Master Thesis */}
        <ProjectRow>
            <ProjectDetails>
                <ProjectTitle>Anomaly Detection</ProjectTitle>
                <ProjectDescription>
                For my master thesis, I designed RANGAN to analyze complex RAN 
                performance data using GANs and transformers. It successfully 
                detected network anomalies, helping make system monitoring 
                smarter and more efficient.
                </ProjectDescription>
                <Links>
                    {/* Download PDF from public/assets folder */}
                    <Link href={thesis} download>Download PDF</Link>
                </Links>
            </ProjectDetails>
            <ImageWrapper>
                <ProjectImage src={network} alt=""/>
            </ImageWrapper>    
        </ProjectRow>
      </Container>
    );
}

// 💅 Styled components
const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #080807;
  padding: 40px 0;
  row-gap: 50px;
  z-index: 10000;
`;

const ProjectRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #080807;
  width: 80%;
  height: 90vh;
  margin-bottom: 40px;
  border-radius: 8px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 2rem;
    width: 95%;
  }
`;

const ProjectDetails = styled.div`
  color: white;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 4.5rem;
  margin: 0;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.6rem;
  margin: 0;
  line-height: 1.8;
  color: #ccc;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2.2rem; /* bigger text */
  font-weight: 700;
  background: rgb(216, 78, 44);
  text-align: center;
  padding: 1.2rem 3rem; 
  border-radius: 3rem; 
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05); 
    box-shadow: 0 6px 20px rgba(216, 78, 44, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.8rem 2rem;
  }
`;

const ProjectIframeWrapper = styled.div`
  position: relative;
  width: 50%;
  padding-bottom: 54%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 150%;
  }
`;

const ProjectIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 2rem;
  pointer-events: auto;
`;

const ImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 2rem;
`;
