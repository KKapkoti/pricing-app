//src/api/context/ThemeContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)


  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('darkMode') || 'false')
    setDarkMode(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme)
  }, [])


  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}