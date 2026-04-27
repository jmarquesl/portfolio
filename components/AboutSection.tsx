import { useTranslation } from 'react-i18next';

function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <header className="section-head">
      <div className="section-head-row">
        <span className="section-num">{num}</span>
        <span className="section-divider" />
        <span className="section-label">// {label}</span>
      </div>
    </header>
  );
}

export { SectionHeader };

export default function AboutSection() {
  const { t } = useTranslation();
  const identity = {
    name: t('name'),
    role: t('role'),
    location: t('location'),
    currently: t('currently'),
    status: t('status'),
    years_in_qa: new Date().getFullYear() - 2015,
    stack_focus: t('stack_focus'),
    hobbies: t('hobbies', { returnObjects: true }),
  };

  return (
    <section id="about" className="term-section">
      <SectionHeader num="01" label={t('about_me')} />
      <div className="about-grid">
        <div className="about-prose">
          <p>{t('intro')}</p>
          <p>{t('mission')}</p>
          <p>{t('belief')}</p>
        </div>
        <aside className="about-card">
          <div className="about-card-head">~/identity.json</div>
          <pre className="about-card-body">{JSON.stringify(identity, null, 2)}</pre>
        </aside>
      </div>
    </section>
  );
}
