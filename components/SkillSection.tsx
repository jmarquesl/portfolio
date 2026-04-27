import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { SkillGroup, Lang } from '../lib/types';
import { AREA_ICONS } from '../lib/siteData';
import SkillIcon from './SkillIcon';
import { SectionHeader } from './AboutSection';

export default function SkillSection() {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language.startsWith('es') ? 'es' : 'en';
  const [skills, setSkills] = useState<SkillGroup[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/data/${lang}/skills.json`)
      .then((r) => r.json())
      .then((data: SkillGroup[]) => setSkills(data));
  }, [lang]);

  return (
    <section id="skills" className="term-section">
      <SectionHeader num="03" label={t('skills')} />
      <div className="skills-grid skills-list">
        {skills.map((group) => {
          const icons = AREA_ICONS[group.area.toLowerCase()] ?? [];
          return (
            <div key={group.area} className="skill-group">
              <div className="skill-group-head">
                <span className="skill-bracket">[</span>
                <span>{group.area}</span>
                <span className="skill-bracket">]</span>
                <span className="skill-count">{String(group.skills.length).padStart(2, '0')}</span>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill, i) => (
                  <li key={`${group.area}-${skill}`} className="skill-item">
                    <span className="skill-marker"><SkillIcon name={icons[i] ?? 'puzzle'} /></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
