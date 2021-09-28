import '../../styles/General.scss'
import '../../styles/Navbar.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import MobNav from './MobNav'
import WebNav from './WebNav'

export default function Navbar() {
  const [{ theme }] = useContext(ThemeContext)
  const stripStyle = {
    backgroundColor: theme.bgMain,
    color: theme.text
  }

  return (
    <nav id='navbar'
      className='Navbar__container'
      style={stripStyle}>
      <div className='General__wrapper'>
        <div className='Navbar__contentWrapper'>
          <div className='Navbar__logo'>
            <a className='underline-on-hover' href='/'>Adrianne Sebastian</a>
          </div>
          <div className='Navbar__links'>
            <MobNav />
            <WebNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
