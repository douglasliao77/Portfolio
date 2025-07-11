import Introduction from './components/Introduction'
import { useEffect } from 'react';
import Higlight from './components/Highlight'
import About from './components/About'

function App() {

  useEffect(() => {
    document.title = "Douglas Liao";
  }, []);
  return (
    <>
      <title>Douglas Liao Portfolio</title>
      <Introduction/>
      <About/>
      <Higlight/>
    </>
  )
}

export default App