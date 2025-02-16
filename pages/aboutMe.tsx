import React, { useEffect, useState } from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar } from 'tamagui';
import ExperienceCard from '../components/Experience';
import experiences from '../data/experiences.json';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';

const AboutMePage = () => {
  const { t, i18n } = useTranslation();

  const [experiences, setExperiences] = useState([]);
  const [isExperiencesLoading, setIsExperiencesLoading] = useState(true);

  useEffect(() => {
    const loadExperiences = async () => {
      const locale = i18n.language;
      const response = await fetch(`/data/${locale}/experiences.json`);
      const data = await response.json();
      setExperiences(data);
      setIsExperiencesLoading(false);
    };
    loadExperiences();
  }, [i18n.language]);

  return (
    <YStack f={1} bg="transparent" p="$4">

      {/* Header */}
      <YStack p="$6" gap="$4">
        <Section title={t("about_me")}>
          <Text fontSize="$5" mt="$2" pl="$4">
            Soy un ingeniero en QA y desarrollo especializado en pruebas automatizadas, CI/CD y mejora de calidad en entornos DevOps...
          </Text>
        </Section>

        <Section title={t("experience")}>
          {isExperiencesLoading ? (<Text>TuPUtaMadre</Text> ) : (experiences.map((exp) => (
              <ExperienceCard
                key={exp.title}
                title={exp.title}
                company={exp.company}
                dates={exp.dates}
                description={exp.description}
                logo={exp.logo}
                skills={exp.skills}
              />
            )))}
        </Section>

        <Section title={t("skills")}>
          <XStack pl="$4" flexWrap="wrap" gap="$2" mt="$4">
            {["Selenium", "Cypress", "Playwright", "Jenkins", "Docker", "Kubernetes"].map(skill => (
              <Button key={skill}>{skill}</Button>
            ))}
          </XStack>
        </Section>
      </YStack>
    </YStack>
  );
};

export default AboutMePage;
