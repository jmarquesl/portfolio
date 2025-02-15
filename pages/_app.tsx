import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import Header from '../components/header';
import Footer from '../components/footer';
import { ThemeProvider } from '../context/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ThemeProvider>
        <Stack f={1} bg="$background">
        <Header />
        <Component {...pageProps} />
        <Footer />""
      </Stack>
    </ThemeProvider>
    </TamaguiProvider >
  );
}

export default MyApp;
