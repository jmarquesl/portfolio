import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack, Theme, Spacer, YStack } from 'tamagui';
import { config } from '../tamagui.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { LinearGradient } from 'tamagui/linear-gradient';
import { ThemeProvider, useThemeSetting } from '../context/ThemeProvider';
import { useRouter } from 'next/router';
import "../i18n"; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={config}>
      <ThemeProvider children={<AppContent Component={Component} pageProps={pageProps} />}>
      </ThemeProvider>
    </TamaguiProvider>
  );
}

// 🔧 Aquí cambiamos el tipo de las props para evitar el error
type AppContentProps = Omit<AppProps, 'router'>;

const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const { theme } = useThemeSetting();
  const router = useRouter(); // ⬅️ Ya no necesitamos router en las props

  return (
    <Theme name={theme}>
      <LinearGradient
        width="100%"
        height="100%"
        colors={['$backgroundFocus', '$background']}
        start={[0, 1]}
        end={[0, 0]}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      />
      <Stack f={1} bg="transparent">
      <YStack minHeight="100vh" jc="space-between"> {/* Estructura que empuja el footer */}
        <YStack flex={1} paddingTop="80px">
        <Header />
        <Component {...pageProps} />
        </YStack>
        <Footer />
        </YStack>
      </Stack>
    </Theme>
  );
};

export default MyApp;
