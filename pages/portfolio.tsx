import React from 'react';
import { Stack, Text, Button, XStack, YStack, Avatar } from 'tamagui';
import ExperienceCard from '../components/Experience';
import experiences from '../data/experiences.json';

const Portfolio = () => {
  return (
    <YStack f={1} bg="transparent" p="$4">

      {/* Header */}
      <YStack ai="center" jc="center" pt="$4" pb="$4" alignItems="center">
        <XStack gap="$4" ai="center" jc="center" alignItems="center">
          <Avatar circular size="$10">
            <Avatar.Image
              src="/static/images/profile.jpg"
            />
            <Avatar.Fallback backgroundColor="$backgroundFocus" />
          </Avatar>
          <YStack marginLeft="&6" maxWidth="100%" flexWrap="wrap" jc="center">
            <Text fontSize="$10" fontWeight="bold" wordWrap="break-word" whiteSpace="pre-wrap">Jordi Marqués Llaberia</Text>
            <Text fontSize="$6">QA and Agile Enthusiast</Text>
          </YStack>
        </XStack>
      </YStack>

      <YStack p="$6" gap="$4">
        {/* Acerca de mí */}
        <YStack>
          <Text fontSize="$8" fontWeight="bold">Sobre Mí</Text>
          <Text fontSize="$5" mt="$2">Soy un ingeniero en QA y desarrollo especializado en pruebas automatizadas, CI/CD y mejora de calidad en entornos DevOps...</Text>
        </YStack>

        {/* Experiencia */}
        <YStack>
          <Text fontSize="$8" fontWeight="bold">Experiencia</Text>
          {experiences.map((exp) => (
            <ExperienceCard title={exp.title} company={exp.company} dates={exp.dates} description={exp.description} />
          ))}
        </YStack>

        {/* Habilidades */}
        <YStack>
          <Text fontSize="$8" fontWeight="bold">Habilidades</Text>
          <XStack pl="$4" flexWrap="wrap" gap="$2" mt="$4">
            <Button>Selenium</Button>
            <Button>Cypress</Button>
            <Button>Playwright</Button>
            <Button>Jenkins</Button>
            <Button>Docker</Button>
            <Button>Kubernetes</Button>
          </XStack>
        </YStack>

        {/* Proyectos */}
        <YStack>
          <Text fontSize="$8" fontWeight="bold">Proyectos</Text>
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
        </YStack>
      </YStack>
    </YStack>
  );
};

export default Portfolio;
