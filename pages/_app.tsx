import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack, Theme } from 'tamagui';
import { config } from '../tamagui.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { LinearGradient } from 'tamagui/linear-gradient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <LinearGradient
          width="100%"
          height="100vh"
          colors={['$backgroundFocus', '$background']}
          start={[0, 1]}
          end={[0, 0]}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        />
        <Stack f={1} bg="transparent">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Stack>
      </Theme>
    </TamaguiProvider >
  );
}

export default MyApp;
