import { Button, YStack } from 'tamagui'
import React from 'react'

export default function Home() {
  return (
    <YStack f={1} ai="center" jc="center" h="100vh">
      <Button size="$4" color="white">
        ¡Hola Tamagui!
      </Button>
    </YStack>
  )
}