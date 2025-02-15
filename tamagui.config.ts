import { createTamagui, createTheme } from '@tamagui/core'
import { tokens } from '@tamagui/themes'

const themes = {
    light: {
      background: '#ffffff',
      color: '#000000',
      primary: '#6200ee',
    },
    dark: {
      background: '#121212',
      color: '#ffffff',
      primary: '#bb86fc',
    },
  }

const config = createTamagui({
  themes,
  tokens,
  shorthands: {
    p: 'padding',
    m: 'margin',
    bg: 'backgroundColor',
  },
})

export type AppConfig = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
