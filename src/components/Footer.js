import '../styles/General.scss'
import '../styles/Footer.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Footer() {
  const [{ theme }] = useContext(ThemeContext)
  const footerStyle = {
    backgroundColor: theme.bgMain,
    color: theme.text
  }
  const footerLinksStyle = {
    color: theme.text
  }

  return (
    <section id='footer'
      style={footerStyle}>
      <div className='General__wrapper'>
        <div className='Footer__contentWrapper'>
          <p>
            <a href='https://github.com/arcsbstn/arcsbstn.github.io' target='_blank' rel='noreferrer' style={footerLinksStyle}>
              Made with <i className='fa fa-heart'></i> by Adrianne Sebastian
            </a>
          </p>
          <ul className='Footer__links'>
            <li><a href='https://github.com/arcsbstn/' target='_blank' rel='noreferrer' style={footerLinksStyle}><i className='fa fa-github'></i></a></li>
            <li><a href='https://codepen.io/arcsbstn/' target='_blank' rel='noreferrer' style={footerLinksStyle}><i className='fa fa-codepen'></i></a></li>
            <li><a href='https://freecodecamp.org/arcsbstn' target='_blank' rel='noreferrer' style={footerLinksStyle}><i className='fa fa-free-code-camp'></i></a></li>
            <li><a href='https://linkedin.com/in/arcsbstn' target='_blank' rel='noreferrer' style={footerLinksStyle}><i className='fa fa-linkedin'></i></a></li>
            <li><a href='https://twitter.com/arcsbstn' target='_blank' rel='noreferrer' style={footerLinksStyle}><i className='fa fa-twitter'></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
