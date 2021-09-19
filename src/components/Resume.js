import React, {useContext} from 'react'
import Document from '../arcsbstn-resume-2021b.pdf'
import { ThemeContext } from '../contexts/theme'

export default function Resume() {
  const [{ theme }] = useContext(ThemeContext)

  return (
    <span className='resume'>
      <a href={Document} target='_blank' style={{color: theme.heroAccent}}><i class="fa fa-user" /> Resume</a>
    </span>
  )
}
