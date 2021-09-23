import '../../styles/Navbar.scss'
import NavLinks from './NavLinks'
import { useState } from 'react'

export default function MobNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='Navbar__mobNav'>
      <i className='fa fa-bars hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      <div className='Navbar__mobNavLinks'>
        {isMenuOpen && <NavLinks />}
      </div>
    </nav>
  )
}
