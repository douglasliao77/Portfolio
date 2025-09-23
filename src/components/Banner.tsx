import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// Banner container
const BannerDiv = styled.div<{ sticky: boolean }>`
  position: ${(props) => (props.sticky ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background: #222;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: bold;
  z-index: 1;
  transition: all 0.2s ease;
  font-family: "Josefin Sans", "Josefin Sans Fallback", sans-serif;
  box-shadow: ${(props) =>
    props.sticky ? "0 4px 10px rgba(0,0,0,0.4)" : "none"};
`;

// Progress bar wrapper
const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 0.2rem;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
`;

// Progress bar fill
const ProgressBarFill = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 100%;
  background: rgb(216, 78, 44);
  transition: width 0.1s ease;
`;

// Placeholder to prevent layout jump
const Placeholder = styled.div`
  height: 10rem;
`;

const Banner: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setOffsetTop(ref.current.offsetTop);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSticky(scrollY > offsetTop);

      // Calculate progress from banner start to page bottom minus 90vh
      const viewportHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight - 0.9 * viewportHeight;

      const start = offsetTop;
      const end = pageHeight - ref.current!.offsetHeight;

      const scrolled = Math.min(Math.max(scrollY - start, 0), end - start);
      setScrollProgress((scrolled / (end - start)) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // recalc on resize
    handleScroll(); // initialize
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [offsetTop]);

  return (
    <>
      <BannerDiv ref={ref} sticky={sticky}>
        Projects
        <ProgressBarWrapper>
          <ProgressBarFill width={scrollProgress} />
        </ProgressBarWrapper>
      </BannerDiv>
      {sticky && <Placeholder />}
    </>
  );
};

export default Banner;
