import { createTamagui } from 'tamagui'
import { themes } from './themes/themes'
import { defaultConfig } from '@tamagui/config/v4'

export const config = createTamagui({
    ...defaultConfig,
    themes,
})