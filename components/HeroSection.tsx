import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const BOOT_LINES = [
  { text: '$ booting localhosts.es v2.0.0...', delay: 0 },
  { text: '[ OK ] kernel loaded', delay: 200 },
  { text: '[ OK ] mounting /dev/qa-engineer', delay: 350 },
  { text: '[ OK ] running 1247 test suites... all green', delay: 500 },
  { text: '[ OK ] ready', delay: 700 },
  { text: '', delay: 800 },
  { text: '> whoami', delay: 900, prompt: true },
];

export default function HeroSection() {
  const { t } = useTranslation();
  const [shown, setShown] = useState(0);
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    setShown(0);
    const timers = BOOT_LINES.map((l, i) =>
      setTimeout(() => setShown(i + 1), l.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const goToContact = () => {
    setJumping(true);
    window.setTimeout(() => setJumping(false), 700);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="term-section term-hero">
      <div className="hero-boot">
        <div className="hero-boot-log">
          {BOOT_LINES.slice(0, shown).map((l, i) => (
            <div key={i} className={l.prompt ? 'boot-line boot-prompt' : 'boot-line'}>
              {l.text || ' '}
            </div>
          ))}
        </div>
        {shown >= BOOT_LINES.length && (
          <div className="hero-boot-card">
            <h1 className="hero-name">
              {t('name')}
              <span className="hero-cursor">█</span>
            </h1>
            <div className="hero-meta">
              <span className="hero-tag">[ {t('role')} ]</span>
              <span className="hero-sep">::</span>
              <span className="hero-tag">{t('location')}</span>
              <span className="hero-sep">::</span>
              <span className="hero-tag green">{t('since')}</span>
            </div>
            <p className="hero-tagline">{t('hero_tagline')}</p>
            <p className="hero-bio">{t('hero_bio')}</p>
            <div className="hero-actions">
              <button type="button" className={`btn-term hero-cta${jumping ? ' is-jumping' : ''}`} onClick={goToContact}>
                <span className="btn-prompt">$</span> {t('get_in_touch')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
