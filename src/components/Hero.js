import '../styles/General.scss'
import '../styles/Hero.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import Resume from './Resume'

export default function Hero() {
  const [{ theme }] = useContext(ThemeContext)
  const heroStyle = {
    backgroundColor: theme.heroBg,
    color: theme.heroText
  }

  return (
    <section id='hero'
      style={heroStyle}>
      <div className='General__wrapper'>
        <div className='Hero__wrapper'>
          <h1 style={{ color: theme.heroAccent }}> Hi, I'm Adrianne!</h1>
          <h2>Currently seeking opportunities to help build beautiful, useful, and useable experiences.</h2>
          <ul className='Hero__links' style={{ color: theme.heroAccent }}>
            <li>
              <Resume />
            </li>
            <li>
              <a style={{ color: theme.heroAccent }} href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
