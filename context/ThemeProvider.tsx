"use client"
import { Theme, ThemeName, useThemeSetting } from '@tamagui/core'
import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  theme: ThemeName
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeName
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme name={theme}>{children}</Theme>
    </ThemeContext.Provider>
  )
}

export const useThemeSwitcher = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useThemeSwitcher must be used within ThemeProvider")
  return context
}
