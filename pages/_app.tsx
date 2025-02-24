import {
  I18nProvider,
  languages,
  defaultLanguage,
  namespaces,
  defaultNamespace,
} from "next-i18next-static-site";
import locales from "../lib/locales";
import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack, Theme, Spacer, YStack } from 'tamagui';
import { config } from '../tamagui.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { LinearGradient } from 'tamagui/linear-gradient';
import { ThemeProvider, useThemeSetting } from '../context/ThemeProvider';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const i18n = {
    languages,
    defaultLanguage,
    namespaces,
    defaultNamespace,
    locales,
  };

  return (
    <TamaguiProvider config={config}>
      <I18nProvider i18n={i18n}>
      <ThemeProvider children={<AppContent Component={Component} pageProps={pageProps} />}>
      </ThemeProvider>
      </I18nProvider>
    </TamaguiProvider>
  );
}

type AppContentProps = Omit<AppProps, 'router'>;

const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const { theme } = useThemeSetting();
  const router = useRouter(); 

  return (
    <Theme name={theme}>
      <Stack f={1} background="$background">
      <YStack minHeight="100vh" jc="space-between">
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
