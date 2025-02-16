import { Button, YStack, Text, Avatar, XStack, Stack } from 'tamagui';
import React from 'react';

export default function Home() {
  return (
    <YStack f={1} ai="center" w="100%" p="$4" gap="$6" alignItems="center">

      {/* Sección de presentación */}
      <YStack maxWidth="90%%" p="$4">
        <XStack gap="$4" ai="center">
          <XStack alignItems="center">
          <Avatar circular size="$10" alignItem="cen">
            <Avatar.Image src="/static/images/profile.jpg" />
            <Avatar.Fallback backgroundColor="$backgroundFocus" />
          </Avatar>
          </XStack>
          <YStack marginLeft="&6" maxWidth="80%" flexWrap="wrap" jc="center">
            <Text fontSize="$10" fontWeight="bold" wordWrap="break-word">Jordi Marqués Llaberia</Text>
            <Text fontSize="$6">QA and Agile Enthusiast</Text>
          </YStack>
        </XStack>
      </YStack>

      {/* Texto de presentación */}
      <YStack w="90%" maxWidth={700} p="$4">
        <Text fontSize="$8" fontWeight="bold" textAlign="center">
          Ingeniero de formación y apasionado por el desarrollo de software y las metodologías ágiles.
        </Text>
        <Text fontSize="$6" textAlign="center" mt="$3">
          Mi misión es impulsar a los equipos hacia la entrega de software de alta calidad, aprovechando todas las herramientas disponibles para asegurar un feedback rápido y constante sobre el estado de cada área del producto.
        </Text>
        <Text fontSize="$6" textAlign="center" mt="$3">
          Creo firmemente que, para que un equipo ágil funcione, debe enfocarse en fomentar la mejora continua y permitir que sus miembros se adapten a los desafíos, logrando así soluciones sólidas y alineadas con las necesidades del negocio, siempre colocando a las personas que hacen crecer el software en el centro.
        </Text>
      </YStack>

      {/* Frase inspiracional */}
      <YStack w="90%" maxWidth={600} p="$4">
        <Text fontSize="$7" fontWeight="bold" textAlign="center">
          "El optimismo es un riesgo laboral de la programación; el feedback es el tratamiento"
        </Text>
        <Text fontSize="$6" textAlign="center" mt="$2">- Kent Beck</Text>
      </YStack>
    </YStack>
  );
}
