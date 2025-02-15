import type { AppProps } from 'next/app'
import { TamaguiProvider } from '@tamagui/core'
import tamaguiConfig from '../tamagui.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Component {...pageProps} />
    </TamaguiProvider>
  )
}

export default MyApp