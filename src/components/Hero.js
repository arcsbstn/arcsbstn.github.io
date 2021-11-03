import '../styles/General.scss'
import '../styles/Hero.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import Resume from './Resume'

export default function Hero() {
  const [{ theme }] = useContext(ThemeContext)
  const heroStyle = {
    backgroundColor: theme.bgMain,
    color: theme.text
  }

  return (
    <section id='hero'
      style={heroStyle}>
      <div className='General__wrapper'>
        <div className='Hero__wrapper'>
          <h1 style={{ color: theme.accentMain }}> Hi, I'm Adrianne!</h1>
          <h2>JavaScript developer, currently building cool things at <a className='underline-on-hover' target="_blank" rel="noreferrer" style={{color: theme.text}} href="https://www.fpsinc.com/">Full Potential Solutions</a>.</h2>
          <ul className='Hero__links' style={{ color: theme.accentMain }}>
            <li>
              <Resume />
            </li>
            <li>
              <a style={{ color: theme.accentMain }} href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
