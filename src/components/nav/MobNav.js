import '../../styles/Navbar.scss'
import NavLinks from './NavLinks'
import { useState } from 'react'

export default function MobNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleIcon = isMenuOpen ? 'fa-times' : 'fa-bars'

  return (
    <nav className='Navbar__mobNav'>
      <i className={`fa ${toggleIcon} hamburger`} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      <div className='Navbar__mobNavLinks'>
        {isMenuOpen && <NavLinks closeMobNav={() => setIsMenuOpen(!isMenuOpen)}/>}
      </div>
    </nav>
  )
}
