import './styles/General.scss'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
