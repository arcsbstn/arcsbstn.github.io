import '../styles/General.scss'
import '../styles/Contact.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Contact() {
  const [{ theme }] = useContext(ThemeContext)
  const contactStyle = {
    backgroundColor: theme.bgMain,
    color: theme.text
  }
  const textareaStyle = {
    backgroundColor: theme.bgTweaked,
    color: theme.text
  }
  const buttonStyle = {
    backgroundColor: theme.accentMain,
    color: theme.text
  }

  return (
    <section id='contact'
      style={contactStyle}>
      <div className='General__wrapper'>
        <div className='Contact__contentWrapper'>
          <h3 style={{ color: theme.accentMain }}>Contact</h3>
          <form name='contact' method='POST' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />
            <div className='row'>
              <label htmlFor='name'>Name</label>
              <input id='name'
                name='name'
                type='text'
                style={textareaStyle}
                placeholder='Your Name' />
            </div>
            <div className='row'>
              <label htmlFor='email'>Email</label>
              <input id='email'
                name='email'
                type='email'
                style={textareaStyle}
                placeholder='your@email.com' />
            </div>
            <div className='row'>
              <label htmlFor='message'>Message</label>
              <textarea id='message'
                name='message'
                style={textareaStyle} />
            </div>
            <div className='row'>
              <button type='submit' style={buttonStyle}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
