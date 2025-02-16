import React from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar } from 'tamagui';
import ExperienceCard from '../components/Experience';
import experiences from '../data/experiences.json';
import { Section } from '../components/Section';

const Portfolio = () => {
  return (
    <YStack f={1} bg="transparent" p="$4">

      {/* Header */}
      <YStack p="$6" gap="$4">
        <Section title="Sobre Mí">
          <Text fontSize="$5" mt="$2" pl="$4">
            Soy un ingeniero en QA y desarrollo especializado en pruebas automatizadas, CI/CD y mejora de calidad en entornos DevOps...
          </Text>
        </Section>

        <Section title="Experiencia">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} title={exp.title} company={exp.company} dates={exp.dates} description={exp.description} />
          ))}
        </Section>

        <Section title="Habilidades">
          <XStack pl="$4" flexWrap="wrap" gap="$2" mt="$4">
            {["Selenium", "Cypress", "Playwright", "Jenkins", "Docker", "Kubernetes"].map(skill => (
              <Button key={skill}>{skill}</Button>
            ))}
          </XStack>
        </Section>

        <Section title="Proyectos">
          <YStack pl="$4">
            <YStack mt="$4">
              <Text fontSize="$6" fontWeight="bold">Automated Test Framework</Text>
              <Text fontSize="$4">Desarrollo de un framework de pruebas en Selenium + Java...</Text>
            </YStack>
            <YStack mt="$4">
              <Text fontSize="$6" fontWeight="bold">CI/CD Testing Pipeline</Text>
              <Text fontSize="$4">Integración de pruebas automatizadas en GitHub Actions...</Text>
            </YStack>
          </YStack>
        </Section>
      </YStack>
    </YStack>
  );
};

export default Portfolio;
