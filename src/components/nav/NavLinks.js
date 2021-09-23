import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'

export default function NavLinks() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)

  let toggleIcon = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o'
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
    <ul>
      <li><a style={{ color: theme.stripText }} href='#projects'>Projects</a></li>
      <li><a style={{ color: theme.stripText }} href='#contact'>Contact</a></li>
      <button onClick={toggleTheme}>
        <i className={toggleIcon} aria-hidden='true' style={toggleIconStyle} />
      </button>
    </ul>
  )
}
