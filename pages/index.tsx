import { Button, YStack } from 'tamagui'

export default function Home() {
  return (
    <YStack f={1} ai="center" jc="center" h="100vh">
      <Button size="$4" bg="$blue10" color="white">
        ¡Hola Tamagui!
      </Button>
    </YStack>
  )
}