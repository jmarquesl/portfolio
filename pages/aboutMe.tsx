import React, { useEffect, useState } from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar } from 'tamagui';
import ExperienceCard from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';

const AboutMePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <YStack f={1} bg="transparent" p="$4">
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
