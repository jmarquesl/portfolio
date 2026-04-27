import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExperienceEntry } from '../lib/types';
import ExperienceIcon from './ExperienceIcon';

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
}

function formatDuration(start: string, end: string | null, locale: string): string {
  const startDate = new Date(start + 'T00:00:00');
  const endDate = end ? new Date(end + 'T00:00:00') : new Date();
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const isEs = locale.startsWith('es');

  const yStr = years > 0
    ? `${years} ${isEs ? (years === 1 ? 'año' : 'años') : (years === 1 ? 'year' : 'years')}`
    : '';
  const mStr = months > 0
    ? `${months} ${isEs ? (months === 1 ? 'mes' : 'meses') : (months === 1 ? 'month' : 'months')}`
    : '';

  return [yStr, mStr].filter(Boolean).join(' ') || (isEs ? '< 1 mes' : '< 1 month');
}

interface ExperienceEntryProps {
  entry: ExperienceEntry;
}

export default function ExperienceEntry({ entry: e }: ExperienceEntryProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith('es') ? 'es-ES' : 'en-US';
  const [open, setOpen] = useState(false);

  const dateRange = `${formatDate(e.start_date, locale)} — ${e.end_date ? formatDate(e.end_date, locale) : t('present')}`;
  const duration = formatDuration(e.start_date, e.end_date, locale);

  return (
    <div className={`exp-row${open ? ' is-open' : ''}`}>
      <button className="exp-row-header" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <div className="exp-dates">
          <span className="exp-dates-range">{dateRange}</span>
          <span className="exp-dates-duration">{duration}</span>
        </div>
        <div className="exp-bar-wrap">
          <span className="exp-marker" style={{ color: e.color }}>
            <ExperienceIcon name={e.icon} color="currentColor" size={24} />
          </span>
        </div>
        <div className="exp-info">
          <div className="exp-company">{e.company}</div>
          <div className="exp-role">{e.title}</div>
        </div>
        <div className="exp-chevron" aria-hidden="true">›</div>
      </button>
      <div className="exp-body">
        <div className="exp-body-inner">
          <div className="exp-location">
            <span className="exp-location-label">📍</span>
            {e.location}
          </div>
          {e.description && (
            <p className="exp-description">{e.description}</p>
          )}
          {e.skills.length > 0 && (
            <div className="exp-skills">
              {e.skills.map((s) => (
                <span key={s} className="exp-skill-tag">{s}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
