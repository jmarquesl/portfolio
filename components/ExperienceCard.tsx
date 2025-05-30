import React from "react";
import { XStack, Card, YStack, Text, Image } from "tamagui";
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  logo: string;
  skills: string[];
  icon: IconName,
  color?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, dates, description, logo, skills, icon, color }) => {
  return (
    <Card p="$4" m="$2" animation="fast" hoverStyle={{
      scale: 1.01,
    }}
    >
      <XStack ai="flex-start" gap="$4" >
        <DynamicIcon name={icon} size={48} color={color || "purple"} />
        <YStack flexShrink={1} minWidth={0} flexWrap="wrap">
          <Text fontSize="$6" fontWeight="bold" >{title}</Text>
          <Text fontSize="$4">{company}</Text>
          <Text fontSize="$3" color="gray">{dates}</Text>
        </YStack>
      </XStack>
      <Text mt="$2">{description}</Text>
      <XStack gap="$2" mt="$2" flexWrap="wrap">
        {skills.map((skill: string) => (
          <Text key={skill} bg="purple" color="white" borderRadius="$1" p="$2" >{skill}</Text>
        ))}
      </XStack>
    </Card>
  );
};

export default ExperienceCard;