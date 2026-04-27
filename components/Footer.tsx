import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="term-footer">
      <div className="term-footer-left">
        <span className="term-prompt">$</span>
        <span>exit 0</span>
        <span className="term-cursor-blink">_</span>
      </div>
      <div className="term-footer-mid">
        © 2026 Jordi Marques Llaberia · GNU GPL v3
      </div>
      <div className="term-footer-right">
        v2.0.0 · {t('footer_built')}
      </div>
    </footer>
  );
}
