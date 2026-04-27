import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SECTIONS = [
  { id: 'hero', labelKey: 'home', num: '00' },
  { id: 'about', labelKey: 'about_me', num: '01' },
  { id: 'experience', labelKey: 'experience', num: '02' },
  { id: 'skills', labelKey: 'skills', num: '03' },
  { id: 'contact', labelKey: 'contact', num: '04' },
];

export default function Header() {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState('hero');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const activeRef = useRef(active);
  const lang = i18n.language.startsWith('es') ? 'es' : 'en';

  useEffect(() => {
    let raf = 0;

    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let nextActive = SECTIONS[0].id;
      let bestDistance = Number.POSITIVE_INFINITY;

      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!isVisible) return;

        const distance = Math.abs((rect.top + rect.bottom) / 2 - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          nextActive = s.id;
        }
      });

      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };

    const onScrollOrResize = () => {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const switchLanguage = (nextLang: 'en' | 'es') => {
    void i18n.changeLanguage(nextLang);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <nav className="term-nav">
      <div className="term-nav-brand">
        <span className="term-prompt">$</span>
        <span className="term-nav-handle">jmarquesl</span>
        <span className="term-nav-cursor">_</span>
      </div>
      <ul className="term-nav-list">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <button
              className={`term-nav-item${active === s.id ? ' is-active' : ''}`}
              onClick={() => go(s.id)}
            >
              <span className="term-nav-num">{s.num}</span>
              <span className="term-nav-line" />
              <span className="term-nav-label">{t(s.labelKey)}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-controls">
        <div className="nav-toggle-group">
          <button
            className={`nav-toggle-btn${lang === 'en' ? ' is-active' : ''}`}
            onClick={() => switchLanguage('en')}
            aria-label="Switch to English"
          >EN</button>
          <button
            className={`nav-toggle-btn${lang === 'es' ? ' is-active' : ''}`}
            onClick={() => switchLanguage('es')}
            aria-label="Switch to Spanish"
          >ES</button>
        </div>
        <div className="nav-controls-sep" />
        <button
          className={`nav-theme-btn${theme === 'light' ? ' is-light' : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="nav-theme-icon" aria-hidden="true">
            {theme === 'dark' ? '◑' : '◐'}
          </span>
          <span className="nav-theme-label">{theme}</span>
        </button>
      </div>
    </nav>
  );
}
