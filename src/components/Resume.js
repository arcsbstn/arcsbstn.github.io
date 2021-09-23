import React, { useContext } from 'react'
import Document from '../assets/arcsbstn-2021.pdf'
import { ThemeContext } from '../contexts/theme'

export default function Resume(props) {
  const [{ theme }] = useContext(ThemeContext)
  const resumeStyle = {
    color: props.isNav
      ? theme.stripText
      : theme.heroAccent
  }

  return (
    <span className='resume'>
      <a href={Document} target='_blank' rel='noreferrer' style={resumeStyle}>Resume</a>
    </span>
  )
}
