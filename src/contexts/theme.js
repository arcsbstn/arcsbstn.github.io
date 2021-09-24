import { createContext, useEffect, useState } from 'react'

const themes = {
  dark: {
    bgMain: '#1F3853',
    bgTweaked: '#122131',
    accentMain: '#E18168',
    accentTweaked: '#EF5C42',
    text: '#F6F4EA'
  },
  light: {
    bgMain: '#F6F4EA',
    bgTweaked: '#CED4C2',
    accentMain: '#E18168',
    accentTweaked: '#EF5C42',
    text: '#1F3853'
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
