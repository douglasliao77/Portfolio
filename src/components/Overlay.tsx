// OverlayAnimation.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  border-top-left-radius: 6rem;
  border-top-right-radius: 6rem;
  z-index: 9999;
`;

const OverlayAnimation: React.FC = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true); // show on route change
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <Overlay
          key={location.pathname}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          exit={{ y: "100vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }} // can be long now
          onAnimationComplete={() => setShow(false)} // hide only after anim ends
        />
      )}
    </AnimatePresence>
  );
};

export default OverlayAnimation;
