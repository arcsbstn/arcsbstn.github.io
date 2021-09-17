import '../styles/General.scss'
import '../styles/Navbar.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Navbar() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  const stripStyle = {
    backgroundColor: theme.stripBg,
    color: theme.stripText
  }
  let toggleIcon = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o'

  return (
    <section id="navbar"
      className="Navbar__container"
      style={stripStyle}>
      <div className="General__wrapper">
        <div className="Navbar__logo">Adrianne Sebastian</div>
        <ul className="Navbar__links">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <button onClick={toggleTheme}>
            <i className={toggleIcon} aria-hidden='true' />
          </button>
        </ul>
      </div>
    </section>
  )
}
