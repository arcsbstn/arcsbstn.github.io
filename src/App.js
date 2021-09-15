import './App.css';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
