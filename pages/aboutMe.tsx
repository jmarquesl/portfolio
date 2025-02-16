import React, { useEffect, useState } from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar } from 'tamagui';
import ExperienceCard from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';

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
           {t("presentation")}
          </Text>
        </Section>

        <Section title={t("experience")}>
          <ExperienceSection/>
        </Section>

        <Section title={t("skills")}>
          <SkillSection/>
        </Section>
      </YStack>
    </YStack>
  )
}

export default AboutMePage;
