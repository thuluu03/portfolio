import { useState } from 'react';
import './App.css';
import './pages/hero/hero.tsx';
import Hero from './pages/hero/hero.tsx';
import Projects from './pages/projects/projects.tsx';
import AboutMe from './pages/about/about.tsx';
import Navbar from './components/navbar/navbar.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
