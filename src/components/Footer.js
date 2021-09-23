import '../styles/General.scss'
import '../styles/Footer.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Footer() {
  const [{ theme }] = useContext(ThemeContext)
  const footerStyle = {
    backgroundColor: theme.stripBg,
    color: theme.stripText
  }

  return (
    <section id='footer'
      style={footerStyle}>
      <div className="General__wrapper">
        <p>Made with <i className='fa fa-heart' aria-hidden='true'></i> by Adrianne Sebastian</p>
        <ul className='Footer__links'>
          <li><a href='https://github.com/arcsbstn/' target='_blank' style={{ color: theme.stripText }}><i className='fa fa-github' aria-hidden='true'></i></a></li>
          <li><a href='https://codepen.io/arcsbstn/' target='_blank' style={{ color: theme.stripText }}><i className='fa fa-codepen' aria-hidden='true'></i></a></li>
          <li><a href='https://freecodecamp.org/arcsbstn' target='_blank' style={{ color: theme.stripText }}><i className='fa fa-free-code-camp' aria-hidden='true'></i></a></li>
          <li><a href='https://linkedin.com/in/arcsbstn' target='_blank' style={{ color: theme.stripText }}><i className='fa fa-linkedin' aria-hidden='true'></i></a></li>
          <li><a href='https://twitter.com/arcsbstn' target='_blank' style={{ color: theme.stripText }}><i className='fa fa-twitter' aria-hidden='true'></i></a></li>
        </ul>
      </div>
    </section>
  )
}
