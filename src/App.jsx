import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/hero';
import NavBar from './sections/navBar';
import ServicesSection from './sections/services';
import ProjectsSection from './sections/projects'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        
        <NavBar/>
        <Hero />
        <ServicesSection/>
        <ProjectsSection/>
      </div>
    </>
  );
}
export default App;