import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CollapsibleCards from "./pages/Portfolio";
import AboutMe from "./pages/About";
import Intro from "./pages/Intro";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Overlay from "./components/Overlay";

// --- Styled components ---
const IntroWrapper = styled.div<{ $opacity: number; $scale: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  opacity: ${(props) => props.$opacity};
  transform: scale(${(props) => props.$scale});
  transition: opacity 0.1s, transform 0.1s;
  background: #e8e8e3;
`;

const Spacer = styled.div`
  height: 100vh; 
  background: #e8e8e3;
`;

// --- Home page content with scroll/fade effect ---
function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const introOpacity = Math.max(1 - scroll / 500, 0);
  const introScale = Math.max(1 - scroll / 5000, 0.9);

  return (
    <div>
      <IntroWrapper $opacity={introOpacity} $scale={introScale}>
        <Intro />
      </IntroWrapper>

      <Spacer />

      <AboutMe />
      <CollapsibleCards />
      <Project />
    </div>
  );
}

// --- App with Routes ---
function App() {
  return (
    <Router basename="/Portfolio/">
      <Overlay /> {/* Overlay always listening to route changes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
