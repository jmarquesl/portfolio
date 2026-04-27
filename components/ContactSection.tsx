import { useTranslation } from 'react-i18next';
import { LINKS } from '../lib/siteData';
import { SectionHeader } from './AboutSection';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="term-section">
      <SectionHeader num="04" label={t('contact')} />
      <div className="contact-block">
        <pre className="contact-prompt">
          <span className="term-prompt">$</span> ssh jordi@localhosts.es
        </pre>
        <h2 className="contact-headline">{t('contact_headline')}</h2>
        <p className="contact-sub">{t('contact_sub')}</p>
        <div className="contact-links">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-link-key">linkedin</span>
            <span className="contact-link-arrow">→</span>
            <span className="contact-link-val">/in/jordi-marques</span>
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-link-key">github</span>
            <span className="contact-link-arrow">→</span>
            <span className="contact-link-val">/jmarquesl</span>
          </a>
          <a href={LINKS.email} className="contact-link">
            <span className="contact-link-key">email</span>
            <span className="contact-link-arrow">→</span>
            <span className="contact-link-val">jordi.marquesllaberia@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
