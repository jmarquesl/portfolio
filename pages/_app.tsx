import type { AppProps } from 'next/app';
import {
  I18nProvider,
  languages,
  defaultLanguage,
  namespaces,
  defaultNamespace,
} from 'next-i18next-static-site';
import locales from '../lib/locales';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const i18n = {
    languages,
    defaultLanguage,
    namespaces,
    defaultNamespace,
    locales,
  };

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}
