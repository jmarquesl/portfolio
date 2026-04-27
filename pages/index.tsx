import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import TermChrome from '../components/TermChrome';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('name')} - localhosts.es</title>
        <meta name="description" content={t('hero_tagline')} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="term-root">
        <TermChrome />
        <Header />
        <main className="term-main">
          <HeroSection />
          <Reveal>
            <AboutSection />
            <ExperienceSection />
            <SkillSection />
            <ContactSection />
          </Reveal>
        </main>
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </>
  );
}
