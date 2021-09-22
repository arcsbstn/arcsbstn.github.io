import React, {useContext} from 'react'
import Document from '../assets/arcsbstn-2021.pdf'
import { ThemeContext } from '../contexts/theme'

export default function Resume() {
  const [{ theme }] = useContext(ThemeContext)

  return (
    <span className='resume'>
      <a href={Document} target='_blank' rel='noreferrer' style={{color: theme.heroAccent}}><i className='fa fa-user' /> Resume</a>
    </span>
  )
}
