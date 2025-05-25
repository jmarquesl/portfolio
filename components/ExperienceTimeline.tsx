import { YStack, XStack, Text, View, Tooltip, Card } from 'tamagui'

const experiences = [
  {
    title: 'QA Engineer',
    company: 'InnoIT Consulting',
    from: new Date('2023-07-01'),
    to: new Date('2024-07-01'),
    color: '#9333ea',
    description: 'Contributed to QA and automation testing in Agile environments.'
  },
  {
    title: 'QA',
    company: 'Vibia',
    from: new Date('2024-07-01'),
    to: new Date('2025-05-01'),
    color: '#7c3aed',
    description: 'Building testing platform with Playwright and Cucumber.'
  }
]

const startTimeline = new Date('2023-07-01')
const endTimeline = new Date('2025-07-01')
const timelineDuration = endTimeline.getTime() - startTimeline.getTime()

function calculatePosition(date: Date) {
  const diff = date.getTime() - startTimeline.getTime()
  return (diff / timelineDuration) * 100
}

export function ExperienceTimeline() {
  return (
    <YStack w="100%" p="$4">
      <YStack position="relative" height={90}>
        {/* Línea horizontal centrada verticalmente */}
        <View
          position="absolute"
          left={0}
          right={0}
          height={2}
          backgroundColor="$color"
          top={0}
          bottom={0}
          marginVertical="auto"
        />

        {/* Barras de experiencia intercaladas */}
        {experiences.map((exp, index) => {
          const left = calculatePosition(exp.from)
          const right = calculatePosition(exp.to)
          const width = right - left
          const isAbove = index % 2 === 0

          return (
            <Tooltip key={index} placement={isAbove ? "top" : "bottom"}>
              <Tooltip.Trigger asChild>
                <View
                  position="absolute"
                  left={`${left}%`}
                  width={`${width}%`}
                  height={20}
                  backgroundColor={exp.color}
                  borderRadius={10}
                  cursor="pointer"
                  hoverStyle={{ opacity: 0.9 }}
                  top={isAbove ? 0 : undefined}
                  bottom={isAbove ? undefined : 0}
                />
              </Tooltip.Trigger>

              <Tooltip.Content>
                <Card elevate size="$3" bordered p="$3" width={260}>
                  <Card.Header>
                    <Text fontWeight="bold">{exp.title} @ {exp.company}</Text>
                  </Card.Header>
                  <Card.Footer>
                    <Text>{exp.description}</Text>
                  </Card.Footer>
                </Card>
              </Tooltip.Content>
            </Tooltip>
          )
        })}
      </YStack>

      {/* Fechas debajo */}
      <XStack justifyContent="space-between" mt="$6">
        <Text>Jul 2023</Text>
        <Text>Jul 2024</Text>
        <Text>Jul 2025</Text>
      </XStack>
    </YStack>
  )
}
