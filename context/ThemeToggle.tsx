"use client"
import { useThemeSwitcher } from '../context/ThemeProvider'
import { Button } from 'tamagui'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeSwitcher()

  return (
    <Button onPress={toggleTheme}>
      {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
    </Button>
  )
}