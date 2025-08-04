
import styled from 'styled-components';
import flappy from '../assets/images/flappy.jpg';
import chess from '../assets/images/chess.png';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SkillMe from './SkillMe';


export default function AboutMe()
{
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

	return (
		<Container>
			<About>
				<Header>
          <h1>
					  THE JOURNEY SO FAR
          </h1>
          <SummaryContainer>
            <SummaryBox> 
              Projects 15+
            </SummaryBox>
            <SummaryBox> 
              Youtube 
            </SummaryBox>
            <SummaryBox> 
              Blog 1+
            </SummaryBox>
          </SummaryContainer>
				</Header>
        <ContentGrid
          style={{
            borderBottom: '2px solid #333',
            marginBottom: '2rem',
            paddingBottom: '2rem',
          }}
        >
        <Item>
          <h1>Who am I?</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. ad minim veniam, quis nostrud 
              exercitation. Ad minim veniam, quis nostrud 
          </p>
          
        </Item>
        <Item>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. ad minim veniam, quis nostrud 
              exercitation. Ad minim veniam, quis nostrud 
          </p>
          
        </Item>
        </ContentGrid>
				<SliderWrapper ref={sliderRef} className="keen-slider">
					<div className="keen-slider__slide">
						<ContentGrid>
							<Item>
								<h1>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h1>
								<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing 
										elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. ad minim veniam, quis nostrud 
										exercitation. Ad minim veniam, quis nostrud 
										exercitation.  ad minim veniam, quis nostrud 
										exercitation.  ad minim veniam, quis nostrud 
										exercitation.  ad minim veniam, quis nostrud 
										exercitation
								</p>
							</Item>
							<Item>
                <img src={flappy} 
                  alt="Flappy" 
                  style={{ width: '100%', height: 'auto' }} 
                />
							</Item>
		
						</ContentGrid>
						</div>

						<div className="keen-slider__slide">
							<ContentGrid>
								<Item>
									<img 
                    src={flappy} 
                    alt="Flappy" 
                    style={{ width: '100%', height: 'auto' }} 
                  />
								</Item>
								<Item>
									<h1>quisque faucibus ex sapien vitae.</h1>
									<p>
											Ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
									</p>
								</Item>
							</ContentGrid>
						</div>

						<div className="keen-slider__slide">
								<ContentGrid>
										<Item>
												<h1>Chess adventures</h1>
												<p>Nulla facilisi. Etiam sollicitudin.</p>
										</Item>
										<Item>
												<img src={chess} 
                          alt="Chess" 
                          style={{ width: '100%', height: 'auto' }} />
										</Item>
								</ContentGrid>
						</div>
				</SliderWrapper>
        <ContentGrid
        >
        <Item>
          <h1>What’s Next?</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. ad minim veniam, quis nostrud 
              exercitation. Ad minim veniam, quis nostrud 
          </p>
        </Item>
        </ContentGrid>
        <Header>
          <h1>
					  SKILLS
          </h1>
        </Header>
        <SkillMe/>  
        <Header>
          <h1>
					  PROJECTS
          </h1>
        </Header>

        <Header>
          <h1>
					  REPORTS
          </h1>
        </Header>
			</About>
		</Container>
	);
}


const Header = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
  display: flex;
  flex-direction: column;
	align-items: center;
  margin: 0;

  h1 {
    font-size: clamp(4rem, 5vw, 6rem);
  }

	&::before,
	&::after {
			content: "";
			position: absolute;
			left: 2rem;
			right: 2rem;
			height: 2px;
			background-color: #333333;
	}

	&::before {
			top: 0;
	}

	&::after {
			bottom: 0;
	}
`;

const SummaryContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  color: white;
  padding: 2rem;
`;

const SummaryBox = styled.div`
  width: 33%;
  font-size: 2rem;
  &:last-child {
    border-right: none;
  }
`; 

const SliderWrapper = styled.div`
  cursor: grab;
  padding: 3rem 0rem;
  margin-top: -0.5rem;

  &:active {
    cursor: grabbing;
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    right: 2rem;
    height: 2px;
    background-color: #333333;
	}

	&::after {
    bottom: 0rem;
	}
  
`;


const ContentGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0rem;
	width: 100%;
	
	@media (max-width: 900px) {
			grid-template-columns: 1fr;
	}
`;

const Item = styled.div`
	background-color: black;
	padding: 0rem 2rem;
	width: 100%;
	display: flex
	align-items: center
	justify-content: center;
	color: white;
	margin: 0;
	text-align: justify;

	h1 {
			font-size: 3rem;
			margin-bottom: -1rem;
	}

	p {
    font-size: 2rem;
    line-height: 1.;
    &::first-letter {
      font-size: 5rem;
      font-weight: bold;
      float: left;
      line-height: 1;
      padding-right: 0.5rem;
      margin-top: 0.7rem;
    }
	}
`;

const About = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
	width: 55%;
	color: rgb(216, 78, 44);
	padding: 6rem;

	@media (max-width: 1200px) {
			width: 90%;
			padding: 0.5rem;
	}
`;

const Container = styled.section`
	position: relative;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background-color: black;
	align-items: center;
	font-family: "Josefin Sans", "Josefin Sans Fallback";
`;