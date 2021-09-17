import { createContext, useEffect, useState } from 'react'

const themes = {
  dark: {
    stripBg: '#051013',
    stripText: '#E7B479',
    heroBg: '#292E33',
    heroAccent: '#B16449',
    heroText: '#DAC09E',
    projectsBg1: '#843226',
    projectsBg2: '#3A4E52',
    projectsAccent: '#DFB681',
    projectsText: '#3A4E52',
    contactBg: '#292E33',
    contactAccent: '#B16449',
    contactTextAreaBg: '#3A4E52',
    contactTextAreaText: '#D7C1A1'
  },
  light: {
    stripBg: '#9A634F',
    stripText: '#E7B479',
    heroBg: '#FEEEED',
    heroAccent: '#DB846A',
    heroText: '#CAC5B5',
    projectsBg1: '#CF886F',
    projectsBg2: '#FADCD1',
    projectsAccent: '#DFB681',
    projectsText: '#926553',
    contactBg: '#B16449',
    contactAccent: '#CF886F',
    contactTextAreaBg: '#F9DCD2',
    contactTextAreaText: '#CF886F'
  }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themes.dark : themes.light
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark))
    setIsDark(!isDark)
  }

  useEffect(() => {
    const isDark = localStorage.getItem('isDark' === 'true')
    setIsDark(isDark)
  }, [])

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
