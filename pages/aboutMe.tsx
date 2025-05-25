import React, { useEffect, useState } from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar, useMedia } from 'tamagui';
import ExperienceCard from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import { Metadata } from 'next';
import { ExperienceTimeline } from '../components/ExperienceTimeline';

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
  const { t } = useTranslation()
  const media = useMedia()

  const isMobile = media.sm

  return (
    <YStack f={1} bg="transparent" width="100%" alignItems="center" paddingTop="80px">
      <YStack p="$6" gap="$4" width={!isMobile ? "100%" : "80%"}>
        <Section title={t("about_me")}>
          <Text fontSize="$5" mt="$2" pl="$4">
            {t("presentation")}
          </Text>
        </Section>

        <Section title={t("experience")}>
          {isMobile ?  <ExperienceTimeline /> : <ExperienceSection /> }
        </Section>

        <Section title={t("skills")}>
          <SkillSection />
        </Section>
      </YStack>
    </YStack>
  )
}

export default AboutMePage;
