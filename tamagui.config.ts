import { createTamagui } from 'tamagui'
import { themes } from './themes/themes'
import { defaultConfig } from '@tamagui/config/v4'
import { createAnimations } from '@tamagui/animations-css'

export const config = createTamagui({
    ...defaultConfig,
    themes,
    animations: createAnimations({
        fast: 'ease-in 150ms',
        medium: 'ease-in 300ms',
        slow: 'ease-in 450ms',
    })
})