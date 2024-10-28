import './App.css'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Navbar from './components/Navbar.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Drawings from './components/Drawings.tsx'
import Music from './components/Music.tsx'

function App() {

  return (
    <main className="bg-black body-font">
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Drawings></Drawings>
      <Music></Music>
      <Contact></Contact>
    
    </main>
  )
}

export default App
