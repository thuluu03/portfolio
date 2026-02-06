import { useState } from 'react';
import './App.css';
import './pages/hero.tsx';
import Hero from './pages/hero.tsx';
import Projects from './pages/projects/projects.tsx';
import AboutMe from './pages/aboutme.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero></Hero>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
