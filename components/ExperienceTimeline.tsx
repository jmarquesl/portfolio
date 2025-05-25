import { useState, useEffect } from 'react'
import { YStack, XStack, Text, View, Tooltip } from 'tamagui'
import ExperienceCard from './ExperienceCard'
import { IconName } from 'lucide-react/dynamic'
import { useTranslation } from 'react-i18next'

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

function calculatePosition(date: Date, min: Date, duration: number) {
  const diff = date.getTime() - min.getTime()
  return (diff / duration) * 100
}

function getTimelineRange(experiences: Experience[]) {
  const startDates = experiences.map((e) => new Date(e.start_date))
  const endDates = experiences.map((e) =>
    e.end_date ? new Date(e.end_date) : new Date()
  )

  const min = new Date(Math.min(...startDates.map((d) => d.getTime())))
  const max = new Date(Math.max(...endDates.map((d) => d.getTime())))

  return { min, max, duration: max.getTime() - min.getTime() }
}

function generateYearMarkers(start: Date, end: Date): Date[] {
  const dates = []
  const year = start.getFullYear()
  const endYear = end.getFullYear()

  for (let y = year; y <= endYear; y++) {
    dates.push(new Date(y, 0, 1)) // Solo año
  }

  return dates
}

export function ExperienceTimeline() {
  const { i18n } = useTranslation()
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const locale = i18n.language
        const response = await fetch(`/portfolio/data/${locale}/experiences.json`)
        const data = await response.json()
        setExperiences(data)
      } catch (err) {
        console.error('Error loading experiences:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadExperiences()
  }, [i18n.language])

  if (isLoading) return null
  if (!experiences.length) return <Text>No experience data available</Text>

  const { min, max, duration } = getTimelineRange(experiences)
  const markers = generateYearMarkers(min, max)

  return (
    <YStack w="100%" p="$4">
      <YStack position="relative" height={90}>
        {/* Línea centrada */}
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
          const left = calculatePosition(from, min, duration)
          const right = calculatePosition(to, min, duration)
          const width = right - left
          const isAbove = index % 2 === 0

          return (
            <Tooltip key={index} placement={isAbove ? 'top' : 'bottom'} allowHover>
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

      {/* Fechas con solo el año */}
      <XStack justifyContent="space-between" mt="$4">
        {markers.map((date, index) => (
          <Text key={index} fontSize="$2">
            {date.getFullYear()}
          </Text>
        ))}
      </XStack>
    </YStack>
  )
}
