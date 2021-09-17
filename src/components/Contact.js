import '../styles/General.scss'
import '../styles/Contact.scss'
import React, { useContext, useState } from 'react'
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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => console.log('Message sent!'))
      .catch((error) => console.error(error));
  }

  return (
    <section id='contact'
      style={contactStyle}>
      <div className="General__wrapper">
        <h3 style={{ color: theme.contactAccent }}>Contact</h3>
        <form id='contact'
          name='contact'
          onSubmit={handleSubmit}
          method='POST'
          data-netlify='true'>
          <div className='row'>
            <label htmlFor='name'>Name</label>
            <input id='name'
              name='name'
              type='text'
              onChange={(e) => { setName(e.target.value) }}
              style={textareaStyle}
              placeholder='Your Name' />
          </div>
          <div className='row'>
            <label htmlFor='email'>Email</label>
            <input id='email'
              name='email'
              type='email'
              onChange={(e) => { setEmail(e.target.value) }}
              style={textareaStyle}
              placeholder='your@email.com' />
          </div>
          <div className='row'>
            <label htmlFor='message'>Message</label>
            <textarea id='message'
              name='message'
              onChange={(e) => { setMessage(e.target.value) }}
              style={textareaStyle} />
          </div>
          <div className="row">
            <div data-netlify-recaptcha='true'></div>
          </div>
          <div className='row'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}