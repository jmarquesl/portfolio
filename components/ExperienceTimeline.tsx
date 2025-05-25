import { useState, useEffect } from 'react'
import { YStack, Text, View, Tooltip } from 'tamagui'
import ExperienceCard from './ExperienceCard'
import { IconName } from 'lucide-react/dynamic'
import { useTranslation } from 'react-i18next'
import { DynamicIcon } from 'lucide-react/dynamic'


interface Experience {
    title: string
    company: string
    description: string
    logo: string
    skills: string[]
    icon: IconName
    start_date: string
    end_date: string | null
    color?: string
    dates: string
}

function getContrastingColor(hex: string): string {
    const c = hex.replace('#', '')
    const r = parseInt(c.substr(0, 2), 16)
    const g = parseInt(c.substr(2, 2), 16)
    const b = parseInt(c.substr(4, 2), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 160 ? '#000000' : '#FFFFFF'
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
    let currentYear = start.getFullYear()
    if (start.getMonth() > 0) {
        currentYear += 1
    }
    const endYear = end.getFullYear()
    for (let y = currentYear; y <= endYear; y++) {
        dates.push(new Date(y, 0, 1))
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
            <YStack position="relative" height={110}>
                {/* Línea central */}
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

                {/* Texto del año (separado del marcador) */}
                {markers.map((date, index) => {
                    const left = calculatePosition(date, min, duration)
                    return (
                        <Text
                            key={`label-${index}`}
                            position="absolute"
                            left={`${left}%`}
                            top={-25}
                            fontSize="$2"
                            color="$color8"
                            textAlign="center"
                            transform={[{ translateX: '-50%' }]}
                            zIndex={10}
                            pointerEvents="none"
                        >
                            {date.getFullYear()}
                        </Text>
                    )
                })}

                {/* Líneas verticales de año */}
                {markers.map((date, index) => {
                    const left = calculatePosition(date, min, duration)
                    return (
                        <View
                            key={`line-${index}`}
                            position="absolute"
                            left={`${left}%`}
                            top={0}
                            bottom={0}
                            width={1}
                            backgroundColor="$color5"
                            marginVertical="auto"
                            transform={[{ translateX: '-50%' }]}
                            pointerEvents="none"
                        />
                    )
                })}

                {/* Barras de experiencia intercaladas */}
                {experiences.map((exp, index) => {
                    const from = new Date(exp.start_date)
                    const to = exp.end_date ? new Date(exp.end_date) : new Date()
                    const left = calculatePosition(from, min, duration)
                    const right = calculatePosition(to, min, duration)
                    const width = right - left
                    const isAbove = index % 2 === 0
                    const barColor = exp.color ?? '$background'

                    return (
                        <Tooltip key={index} placement={isAbove ? 'top' : 'bottom'} delay={0}>
                            <Tooltip.Trigger asChild>
                                <View
                                    position="absolute"
                                    left={`${left}%`}
                                    width={`${width}%`}
                                    height={20}
                                    backgroundColor={barColor}
                                    borderRadius={10}
                                    cursor="pointer"
                                    hoverStyle={{ opacity: 0.9 }}
                                    top={isAbove ? 0 : undefined}
                                    bottom={isAbove ? undefined : 0}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <DynamicIcon
                                        name={exp.icon}
                                        size={14}
                                        color={getContrastingColor(barColor.startsWith('#') ? barColor : '#888888')}
                                    />
                                </View>
                            </Tooltip.Trigger>

                            <Tooltip.Content
                                zIndex={100}
                                backgroundColor="transparent"
                                borderWidth={0}
                                p="$0"
                                elevation={0}
                                borderRadius={0}
                                animation="fast"
                                enterStyle={{ opacity: 0, scale: 0.95 }}
                                exitStyle={{ opacity: 0, scale: 0.95 }}
                            >
                                <ExperienceCard
                                    title={exp.title}
                                    company={exp.company}
                                    dates={exp.dates}
                                    description={exp.description}
                                    logo={exp.logo}
                                    skills={exp.skills}
                                    icon={exp.icon}
                                    color={exp.color}
                                />
                            </Tooltip.Content>
                        </Tooltip>
                    )
                })}
            </YStack>
        </YStack>
    )
}
