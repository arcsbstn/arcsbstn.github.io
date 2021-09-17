import '../styles/Contact.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Contact() {
  const [{ theme }] = useContext(ThemeContext)
  const contactStyle = {
    backgroundColor: theme.contactBg,
    color: theme.contactTextareaText
  }
  const textareaStyle = {
    backgroundColor: theme.contactTextareaBg,
    color: theme.contactTextareaText
  }

  return (
    <section id='contact'
      style={contactStyle}>
      <h3 style={{ color: theme.contactAccent }}>Contact</h3>
      <form id='contact'
        name='contact'>
        <label htmlFor='name'>Name</label>
        <input id='name'
          name='name'
          type='text'
          style={textareaStyle}
          placeholder='Your Name'/>
        <label htmlFor='email'>Email</label>
        <input id='email'
          name='email'
          type='email'
          style={textareaStyle}
          placeholder='your@email.com'/>
        <label htmlFor='message'>Message</label>
        <textarea id='message'
          name='message'
          style={textareaStyle}/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}