import { createContext, useEffect, useState } from 'react'

const themes = {
  dark: {
    stripBg: '#051013',
    stripText: '#E7B479',
    heroBg: '#292E33',
    heroAccent: '#B16449',
    heroText: '#DAC09E',
  },
  light: {
    stripBg: '#9A634F',
    stripText: '#E7B479',
    heroBg: '#FEEEED',
    heroAccent: '#DB846A',
    heroText: '#CAC5B5',
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
