import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import backgroundImage from './assets/backgroundimage3.jpg'
import { NavBar, Hero, About,Skills,Experience,Projects,Contact} from './components';


function App() {

  return (
   <div style={{backgroundImage: `url(${backgroundImage}`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment: 'fixed' ,imageRendering:'auto' }}>
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience defaultColor = "bg-cyan-500"/>
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App
