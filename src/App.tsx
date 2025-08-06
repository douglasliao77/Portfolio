import AboutMe from './pages/AboutMe';
import Intro from './pages/Intro';

function App() {
  return (
    <>

        <Intro/>
        <AboutMe/>
        <img
        src="/boat.png"
        alt="Boat"
        width={300}
        height={300}
        style={{ display: 'block', border: '2px solid white', zIndex: '100' }}
      />
    </>
  );
}

export default App;