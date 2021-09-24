import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Resume from '../Resume'

export default function NavLinks(props) {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  let toggleIcon = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o'
  const ulStyle = {
    backgroundColor: theme.bgMain
  }
  const toggleIconStyle = {
    color: theme.text
  }

  return (
    <ul style={ulStyle}>
      <li><Resume isNav='true' /></li>
      <li><a onClick={props.closeMobNav} style={{ color: theme.text }} href='#projects'>Projects</a></li>
      <li><a onClick={props.closeMobNav} style={{ color: theme.text }} href='#contact'>Contact</a></li>
      <li>
        <button onClick={toggleTheme}>
          <i className={toggleIcon} aria-hidden='true' style={toggleIconStyle} />
        </button>
      </li>
    </ul>
  )
}
