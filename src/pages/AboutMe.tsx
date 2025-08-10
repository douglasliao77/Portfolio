
import styled, { css }  from 'styled-components';
import boat from '../assets/images/boat.png'
import chess from '../assets/images/chess.png'
import flappy from '../assets/images/flappy.jpg'
import mona from '../assets/images/mona.png'
import plane from '../assets/images/plane.png'



import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SkillMe from './SkillMe';
import type { KeenSliderInstance } from 'keen-slider';
import ProjecMe from './ProjectMe';

export default function AboutMe()
{
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider: KeenSliderInstance) => {
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
              Projects 
            </SummaryBox>
            <SummaryBox> 
              Youtube 
            </SummaryBox>
            <SummaryBox> 
              Blog 
            </SummaryBox>
          </SummaryContainer>
				</Header>
        <ContentGrid
        >
        <Item useFirstLetter >
          <h1>Where are we?</h1>
          
          <div>
            <p className="large-first-letter">
              For the longest time, I thought my future would be on the football 
              field. I spent hours chasing the ball, dreaming big — just like 
              most of my friends. Long story short, life had a different game 
              plan for me.

              
            </p>
            <p>
              I found it very hard to visualize exactly how I’d love
              my life to be. But I got convinced that exploring new paths
              and learning along the way would help me figure it out.
              So, I chose to study engineering at Linköping University,
              not because I had all the answers, but because I was curious
              to see where it might take me.
            </p>
            <p>
            Along the way, I made a lot of new friends. I also discovered that 
            I really enjoy solving complex problems, and it’s even more fun when accomplish 
            it together
            with others. Studying engineering at Linköping University turned
            out to be quite an adventure, with every project offering a chance 
            to explore new technologies and figure out what I actually enjoyed
             — and what I didn’t.
          </p>
          <p>
          These years have taught me that I don’t need to have every step 
          planned out to move forward. As long as I stay curious and keep 
          working hard, I'll keep finding my way.
          </p>
          </div>
          <h1>What is my passion?</h1>
          <p className="large-first-letter">
            I am really into solving complex problems. I love figuring stuff out and learning new things along the 
            way. Sports and training have always been a big part of my life and I like to keep 
            it that way.    

          </p>
          

        </Item>
        <Item useFirstLetter>
  

        
          <img 
            src={boat}
            alt="Flappy" 
            style={{ width: '100%', height: 'auto' }} 
          />
          <h1>Where do you see yourself in 5 years?</h1>
          <div>

          <p className="large-first-letter">
            Five years from now, I hope to look back and see that I’ve built 
            things that made a difference, whether that's a piece of software, 
            a system, or an analysis that helps making decisions. I want my
            work to have a real impact, to solve problems that matter and 
            to make life easier.
          </p>
          <p>
            More than anything, I want to keep growing and learning, taking on
            new challenges and working alongside people who inspire me. I may 
            not know exactly where I’ll be, but I’m excited to keep exploring
            , building, and finding new ways to contribute.
          </p>
          </div>
        </Item>
        </ContentGrid>
        <Line/>
				<SliderWrapper ref={sliderRef} className="keen-slider">
					<div className="keen-slider__slide">
						<ContentGrid>
							<Item>
								<h1>Angry Flappy Ball</h1>
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
									<h1>Traveling Painter</h1>
									<p>
											Ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
									</p>
								</Item>
								<Item>
									<img 
                    src={mona}
                    alt="Flappy" 
                    style={{ width: '100%', height: 'auto' }} 
                  />
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
												<h1> Q-Learning</h1>
												<p>Nulla facilisi. Etiam sollicitudin.</p>
										</Item>
										<Item>
												<img src={plane}
                          alt="Chess" 
                          style={{ width: '100%', height: '90%' }} />
										</Item>
								</ContentGrid>
						</div>
            <div className="keen-slider__slide">
								<ContentGrid>
										<Item>
												<h1>Chess Made On a Mac</h1>
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
        <ProjecMe/>

        <Header>
          <h1>
					  CASE STUDY
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
  margin-bottom: 2rem;

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

const Line = styled.div`
	position: relative;
	width: 100%;
  margin-top: 2rem;

	&::after {
			content: "";
			position: absolute;
			left: 2rem;
			right: 2rem;
			height: 2px;
			background-color: #333333;
	}

	&::after {
			bottom: 0;
	}
`;

const SummaryContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: -6rem;
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
  padding: 1rem 0rem;
  margin-top: 2rem;

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
	gap: 2rem;
	padding: 0rem 2rem;
	@media (max-width: 500px) {
			grid-template-columns: 1fr;
	}
`;

interface ItemProps {
  useFirstLetter?: boolean;
}

const Item = styled.div<ItemProps>`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: justify;

  h1 {
    font-size: 3rem;
    margin-bottom: -1rem;
    text-align: center;
  }

  p {
    font-size: 2rem;
    line-height: 1.3;

    ${({ useFirstLetter }) =>
      useFirstLetter &&
      css`
        &.large-first-letter::first-letter {
          font-size: 5rem;
          font-weight: bold;
          float: left;
          line-height: 1;
          padding-right: 0.5rem;
          margin-top: 0.7rem;
        }
      `}
  }
`;




const About = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
	width: 50%;
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
  justify-items: center;
  margin: 0 auto;
	background-color: black;
	align-items: center;
	font-family: "Josefin Sans", "Josefin Sans Fallback";
`;