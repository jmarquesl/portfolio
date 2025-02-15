import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack, Theme } from 'tamagui';
import { config } from '../tamagui.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <Stack f={1} bg="$background">
        <Header />
        <Component {...pageProps} />
        <Footer />""
      </Stack>
      </Theme>
    </TamaguiProvider >
  );
}

export default MyApp;
