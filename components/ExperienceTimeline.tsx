import { YStack, XStack, Text, View, Tooltip } from 'tamagui'
import ExperienceCard from './ExperienceCard'
import { IconName } from 'lucide-react/dynamic'

interface Experience {
  title: string
  company: string
  description: string
  logo: string
  skills: string[]
  icon: IconName
  start_date: string
  end_date: string | null
}

const experiences: Experience[] = [
  {
    title: 'QA Engineer',
    company: 'InnoIT Consulting',
    start_date: '2023-07-01',
    end_date: '2024-07-01',
    logo: '/logos/innoit.svg',
    description: 'Contributed to QA and automation testing in Agile environments.',
    skills: ['Playwright', 'Jest', 'GitHub Actions'],
    icon: 'bug'
  },
  {
    title: 'QA',
    company: 'Vibia',
    start_date: '2024-07-01',
    end_date: null,
    logo: '/logos/vibia.svg',
    description: 'Building testing platform with Playwright and Cucumber.',
    skills: ['Cucumber', 'TypeScript'],
    icon: 'check-circle'
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
        {/* Línea centrada dinámicamente */}
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

        {/* Barras intercaladas */}
        {experiences.map((exp, index) => {
          const from = new Date(exp.start_date)
          const to = exp.end_date ? new Date(exp.end_date) : new Date()
          const left = calculatePosition(from)
          const right = calculatePosition(to)
          const width = right - left
          const isAbove = index % 2 === 0

          return (
            <Tooltip key={index} placement={isAbove ? 'top' : 'bottom'}>
              <Tooltip.Trigger asChild>
                <View
                  position="absolute"
                  left={`${left}%`}
                  width={`${width}%`}
                  height={20}
                  backgroundColor="$color8"
                  borderRadius={10}
                  cursor="pointer"
                  hoverStyle={{ opacity: 0.9 }}
                  top={isAbove ? 0 : undefined}
                  bottom={isAbove ? undefined : 0}
                />
              </Tooltip.Trigger>

              <Tooltip.Content zIndex={100}>
                <ExperienceCard
                  title={exp.title}
                  company={exp.company}
                  dates={`${exp.start_date} - ${exp.end_date ?? 'Present'}`}
                  description={exp.description}
                  logo={exp.logo}
                  skills={exp.skills}
                  icon={exp.icon}
                />
              </Tooltip.Content>
            </Tooltip>
          )
        })}
      </YStack>

      {/* Fechas base */}
      <XStack justifyContent="space-between" mt="$6">
        <Text>Jul 2023</Text>
        <Text>Jul 2024</Text>
        <Text>Jul 2025</Text>
      </XStack>
    </YStack>
  )
}
