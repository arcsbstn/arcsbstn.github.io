import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Resume from '../Resume'

export default function NavLinks() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)

  let toggleIcon = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o'
  const ulStyle = {
    backgroundColor: theme.stripBg
  }
  const toggleIconStyle = {
    color: theme.stripText,
    border: `1px solid ${theme.stripText}`,
    borderRadius: '100%',
    paddingTop: '6px',
    paddingRight: '1px',
    width: '33px',
    height: '33px'
  }

  return (
    <ul style={ulStyle}>
      <li><a style={{ color: theme.stripText }} href='#projects'>
        <Resume isNav='true'/>
      </a>
      </li>
      <li><a style={{ color: theme.stripText }} href='#projects'>Projects</a></li>
      <li><a style={{ color: theme.stripText }} href='#contact'>Contact</a></li>
      <li>
        <button onClick={toggleTheme}>
          <i className={toggleIcon} aria-hidden='true' style={toggleIconStyle} />
        </button>
      </li>
    </ul>
  )
}
