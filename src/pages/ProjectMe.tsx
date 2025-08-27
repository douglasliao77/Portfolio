import { useKeenSlider } from "keen-slider/react";
import styled, { css } from "styled-components";
import "keen-slider/keen-slider.min.css";
import type { KeenSliderInstance } from 'keen-slider';
import ProjectCard from '../components/ProjectCard';
import uttt from '../assets/images/uttt.png'
import bostad from '../assets/images/bostad.png'
import { useState } from "react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstance, setSliderInstance] = useState<KeenSliderInstance | null>(null);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(slider) {
        setSliderInstance(slider);
      },
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
    <>
    <SliderWrapper ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <ContentGrid>
          <Item>
            <h1>Ultimate Tic Tac Toe</h1>
            <div>

            <p>
              Ultimate Tic-Tac-Toe is an advanced twist on the classic 
              Tic-Tac-Toe game. Instead of one 3×3 board, you play on nine 
              smaller Tic-Tac-Toe boards arranged in a 3×3 meta-board. 
              The unique twist: The square you choose in a small board 
              determines which board your opponent must play in next, making 
              every move strategic.
            </p>
            <p>
              The game includes three AI difficulty levels — Easy, Medium, and 
              Hard — allowing you to choose the level of challenge. You can also 
              play in Player vs Player mode for a head-to-head match with a friend.
            </p>
            <p>
              The AI is powered by Monte Carlo Tree Search (MCTS), which works 
              by simulating thousands of possible games to figure out the most 
              promising moves. This lets the bot balance trying new strategies
              with sticking to moves that have worked well before, making it 
              tough to beat at higher difficulty levels.
            </p>
            </div>
          </Item>
          <Item>
            <ProjectCard 
              title="UTTT" 
              imageSrc={uttt}
              skills={[{ title: 'React' }, { title: 'TypeScript' }, 
                { title: 'HTML'}, { title: 'CSS'}, { title: 'Vercel'}, 
                { title: 'MCTS'}]}
              githubUrl="https://github.com/douglasliao77/tic-tac-toe-2"
              websiteUrl="https://metatictactoe.vercel.app/"
            />
          </Item>

        </ContentGrid>
      </div>
      <div className="keen-slider__slide">
        <ContentGrid>
          <Item>
              <h1>Coming Soon</h1>
          </Item>
          <Item>
            <ProjectCard 
              title="Bostadpris" 
              imageSrc={bostad}
              skills={[{ title: 'Python' }, 
                { title: 'HTML'}, { title: 'CSS'}, { title: 'Streamlit'}]}
              githubUrl="https://github.com/douglasliao77/tic-tac-toe-2"
              websiteUrl="https://metatictactoe.vercel.app/"
            />
          </Item>
        </ContentGrid>
      </div>
      <div className="keen-slider__slide">
        <ContentGrid>
          <Item>
              <h1>Coming Soon</h1>
          </Item>
        </ContentGrid>
      </div>
    </SliderWrapper>
    <DotsContainer>
      {sliderInstance?.track.details.slides.map((_, idx) => (
        <Dot
          key={idx}
          onClick={() => sliderInstance.moveToIdx(idx)}
          active={currentSlide === idx}
        />
      ))}
    </DotsContainer>

    </>
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


const SliderWrapper = styled.div`
  cursor: grab;
  padding: 1rem 0rem;
  margin-top: 2rem;

  &:active {
    cursor: grabbing;
  }

  
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? "#fff" : "#888")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc;
  }
`;