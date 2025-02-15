import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack f={1} bg="$background">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </TamaguiProvider>
  );
}

export default MyApp;
