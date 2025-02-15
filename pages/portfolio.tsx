import React from 'react';
import { TamaguiProvider, Stack, Text, Button, XStack, YStack } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import ExperienceCard from '../components/experience';

const Portfolio = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack f={1} bg="$background" p="$4">
        
        {/* Header */}
        <YStack ai="center" jc="center" py="$6">
          <Text fontSize="$10" fontWeight="bold">Tu Nombre</Text>
          <Text fontSize="$6" color="$gray10">SDET | QA Automation | DevOps Enthusiast</Text>
          <XStack gap="$4" mt="$4">
            <Button>LinkedIn</Button>
            <Button>GitHub</Button>
            <Button>Email</Button>
          </XStack>
        </YStack>

        {/* Acerca de mí */}
        <YStack p="$6">
          <Text fontSize="$8" fontWeight="bold">Sobre Mí</Text>
          <Text fontSize="$5" mt="$2">Soy un ingeniero en QA y desarrollo especializado en pruebas automatizadas, CI/CD y mejora de calidad en entornos DevOps...</Text>
        </YStack>

        {/* Experiencia */}
        <YStack p="$6">
          <Text fontSize="$8" fontWeight="bold">Experiencia</Text>
          <ExperienceCard title="SDET" company="Empresa X" dates="2020 - Presente" description="Automatización de pruebas, integración de CI/CD, uso de Selenium, Cypress, Playwright..." />
          <ExperienceCard title="QA Engineer" company="Empresa Y" dates="2018 - 2020" description="Diseño y ejecución de estrategias de testing, pruebas de API con Postman y Jest..." />
        </YStack>

        {/* Habilidades */}
        <YStack p="$6">
          <Text fontSize="$8" fontWeight="bold">Habilidades</Text>
          <XStack flexWrap="wrap" gap="$2" mt="$4">
            <Button>Selenium</Button>
            <Button>Cypress</Button>
            <Button>Playwright</Button>
            <Button>Jenkins</Button>
            <Button>Docker</Button>
            <Button>Kubernetes</Button>
          </XStack>
        </YStack>

        {/* Proyectos */}
        <YStack p="$6">
          <Text fontSize="$8" fontWeight="bold">Proyectos</Text>
          <YStack mt="$4">
            <Text fontSize="$6" fontWeight="bold">Automated Test Framework</Text>
            <Text fontSize="$4">Desarrollo de un framework de pruebas en Selenium + Java...</Text>
          </YStack>
          <YStack mt="$4">
            <Text fontSize="$6" fontWeight="bold">CI/CD Testing Pipeline</Text>
            <Text fontSize="$4">Integración de pruebas automatizadas en GitHub Actions...</Text>
          </YStack>
        </YStack>

        {/* Contacto */}
        <YStack p="$6" ai="center">
          <Text fontSize="$8" fontWeight="bold">Contacto</Text>
          <Text fontSize="$5" mt="$2">Puedes escribirme a: <Text fontWeight="bold">tucorreo@example.com</Text></Text>
        </YStack>
      </Stack>
    </TamaguiProvider>
  );
};

export default Portfolio;
