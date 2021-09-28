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
      <li className='underline-on-hover'><Resume isNav='true' /></li>
      <li className='underline-on-hover'><a onClick={props.closeMobNav} style={{ color: theme.text }} href='#projects'>Projects</a></li>
      <li className='underline-on-hover'><a onClick={props.closeMobNav} style={{ color: theme.text }} href='#contact'>Contact</a></li>
      <li>
        <button onClick={toggleTheme}>
          <i className={toggleIcon} style={toggleIconStyle} />
        </button>
      </li>
    </ul>
  )
}
