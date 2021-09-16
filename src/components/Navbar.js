import '../styles/Navbar.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Navbar() {
  const [{ theme }, toggleTheme] = useContext(ThemeContext)
  const stripStyle = {
    backgroundColor: theme.stripBg,
    color: theme.stripText
  }

  return (
    <section id="navbar"
      className="Navbar__container"
      style={stripStyle}>
      <div className="Navbar__logo">Adrianne Sebastian</div>
      <ul className="Navbar__links">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <button onClick={toggleTheme}>☺️</button>
      </ul>
    </section>
  )
}
