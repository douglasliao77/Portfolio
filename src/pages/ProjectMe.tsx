import { useKeenSlider } from "keen-slider/react";
import styled, { css } from "styled-components";
import "keen-slider/keen-slider.min.css";
import uttt from '../assets/images/UTTT.png';
import type { KeenSliderInstance } from 'keen-slider';
import ProjectCard from '../components/ProjectCard';


export default function App() {
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
    <SliderWrapper ref={sliderRef} className="keen-slider">
				
            <div className="keen-slider__slide">
								<ContentGrid>
                  <Item>
                    <h1>Ultimate Tic Tac Toe</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. ad minim veniam, quis nostrud 
                      exercitation. Ad minim veniam, quis nostrud 
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. ad minim veniam, quis nostrud 
                      exercitation. Ad minim veniam, quis nostrud 
                    </p>
                  </Item>
                  <Item>
                    <h1> .</h1>
                    <ProjectCard 
                      title="UTTT" 
                      imageSrc={uttt}
                      skills={[{ title: 'React' }, { title: 'TypeScript' }, 
                        { title: 'HTML'}, { title: 'CSS'}, { title: 'Vercel'}]}
                      githubUrl="https://github.com/douglasliao77/tic-tac-toe-2"
                      websiteUrl="https://metatictactoe.vercel.app/"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. ad minim veniam, quis nostrud 
                      exercitation. Ad minim veniam, quis nostrud 
                    </p>
                  </Item>
								</ContentGrid>
						</div>
            <div className="keen-slider__slide">
								<ContentGrid>
										<Item>
												<h1>Coming Soon</h1>
                        <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. ad minim veniam, quis nostrud 
                      exercitation. Ad minim veniam, quis nostrud 
                    </p>
										</Item>
								</ContentGrid>
						</div>
				</SliderWrapper>
  );
}


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
	max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
	display: flex
	align-items: center
	justify-content: center;
	color: white;
	text-align: justify;

  h1 {
    font-size: 3rem;
    margin-bottom: -1rem;
    text-align: center;
  }

  p {
    font-size: 2rem;
    line-height: 1;

    ${({ useFirstLetter }) =>
      useFirstLetter &&
      css`
        &::first-letter {
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