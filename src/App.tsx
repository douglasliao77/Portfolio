import AboutMe from './pages/AboutMe';
import Intro from './pages/Intro';

function App() {
  return (
    <>

        <Intro/>
        <AboutMe/>
        <img src={`${import.meta.env.BASE_URL}boat.png`} alt="Boat" width={300} height={300} />
    </>
  );
}

export default App;