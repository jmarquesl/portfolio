import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack f={1} bg="$background">
        <Header /> {/* Header se renderiza en TODAS las páginas */}
        <Component {...pageProps} />
      </Stack>
    </TamaguiProvider>
  );
}

export default MyApp;