import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExperienceData, Lang } from '../lib/types';
import { SectionHeader } from './AboutSection';
import ExperienceEntryComponent from './ExperienceEntry';

function SubSectionHeader({ label }: { label: string }) {
  return (
    <div className="exp-subsection-head">
      <span className="exp-subsection-label">// {label}</span>
      <span className="exp-subsection-rule" />
    </div>
  );
}

export default function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language.startsWith('es') ? 'es' : 'en';
  const [data, setData] = useState<ExperienceData>({ current: [], past: [] });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/data/${lang}/experiences.json`)
      .then((r) => r.json())
      .then((d: ExperienceData) => setData(d));
  }, [lang]);

  return (
    <section id="experience" className="term-section">
      <SectionHeader num="02" label={t('experience')} />

      <SubSectionHeader label={t('current_experience')} />
      <div className="exp-list exp-list--current">
        {data.current.map((e) => (
          <ExperienceEntryComponent key={`${e.company}-${e.start_date}`} entry={e} />
        ))}
      </div>

      <SubSectionHeader label={t('past_experience')} />
      <div className="exp-list">
        {data.past.map((e) => (
          <ExperienceEntryComponent key={`${e.company}-${e.start_date}`} entry={e} />
        ))}
      </div>
    </section>
  );
}
