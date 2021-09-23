import '../../styles/General.scss'
import '../../styles/Navbar.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import MobNav from './MobNav'
import WebNav from './WebNav'

export default function Navbar() {
  const [{ theme }] = useContext(ThemeContext)
  const stripStyle = {
    backgroundColor: theme.stripBg,
    color: theme.stripText
  }

  return (
    <nav id='navbar'
      className='Navbar__container'
      style={stripStyle}>
      <div className='General__wrapper'>
        <div className='Navbar__wrapper'>
          <div className='Navbar__logo'>Adrianne Sebastian</div>
          <div className='Navbar__links'>
            <MobNav />
            <WebNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
