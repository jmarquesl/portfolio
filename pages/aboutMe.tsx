import React, { useEffect, useState } from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar } from 'tamagui';
import ExperienceCard from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import { Metadata } from 'next';

export async function getStaticProps() {
  return {
    props: {
      metadata
    }
  }
}

export const metadata: Metadata ={
  title: "About Me",
  description: "About Me Page",
  keywords: "About Me, Experience, Skills"
}

const AboutMePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <YStack f={1} bg="transparent" p="$4" width="100%" alignItems="center">
      <YStack p="$6" gap="$4" width="80%"  >
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
