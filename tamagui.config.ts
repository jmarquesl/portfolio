import { createTamagui } from '@tamagui/core'
import { tokens, themes } from '@tamagui/themes'

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