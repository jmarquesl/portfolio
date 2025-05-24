import {
  I18nProvider,
  languages,
  defaultLanguage,
  namespaces,
  defaultNamespace,
} from "next-i18next-static-site";
import locales from "../lib/locales";
import type { AppProps } from 'next/app';
import { TamaguiProvider, Stack, Theme, YStack } from 'tamagui';
import { config } from '../tamagui.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { ThemeProvider, useThemeSetting } from '../context/ThemeProvider';
import Head from 'next/head';

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
      <ThemeProvider>
        <I18nProvider i18n={i18n}>
          <AppContent Component={Component} pageProps={pageProps} />
        </I18nProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}

type AppContentProps = Omit<AppProps, 'router'>;

const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const { theme } = useThemeSetting();

  const pageTitle = pageProps?.metadata?.title 
    ? `${pageProps.metadata.title} | Jordi Marqués Llaberia`
    : "Jordi's Portfolio";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {pageProps?.metadata?.description && (
          <meta name="description" content={pageProps.metadata.description} />
        )}
        {pageProps?.metadata?.keywords && (
          <meta name="keywords" content={pageProps.metadata.keywords} />
        )}
      </Head>

      <Theme name={theme}>
        <Stack f={1} background="$background">
          <YStack minHeight="100vh" jc="space-between">
            <YStack flex={1}>
              <Header />
              <Component {...pageProps} />
            </YStack>
            <Footer />
          </YStack>
        </Stack>
      </Theme>
    </>
  );
};

export default MyApp;
