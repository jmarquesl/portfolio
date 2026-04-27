import Head from 'next/head';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TermChrome from '../components/TermChrome';
import FallingZeros from '../components/FallingZeros';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ArkanoidGame from '../components/ArkanoidGame';

export default function HomePage() {
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(true);
  const [booted, setBooted] = useState(false);
  const [gameActive, setGameActive] = useState(false);

  const handleBootDone = () => {
    setBooted(true);
    setTimeout(() => setShowLoader(false), 700);
  };

  return (
    <>
      {showLoader && <LoadingScreen onDone={handleBootDone} />}
      {gameActive && <ArkanoidGame onExit={() => setGameActive(false)} />}
      <Head>
        <title>{t('name')} - localhosts.es</title>
        <meta name="description" content={t('hero_tagline')} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className={`term-root${booted ? ' is-booted' : ''}${gameActive ? ' game-active' : ''}`}>
        <FallingZeros onActivate={() => setGameActive(true)} />
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
