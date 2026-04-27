export interface ExperienceEntry {
  title: string;
  company: string;
  start_date: string;
  end_date: string | null;
  location: string;
  description: string;
  skills: string[];
  logo: string;
  icon: string;
  color: string;
}

export interface ExperienceData {
  current: ExperienceEntry[];
  past: ExperienceEntry[];
}

export interface SkillGroup {
  area: string;
  skills: string[];
}

export type Lang = 'en' | 'es';
