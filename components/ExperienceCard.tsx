import React from "react";
import { XStack, Card, YStack, Text, Image } from "tamagui";
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { LinearGradient } from "tamagui/linear-gradient";

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  logo: string;
  skills: string[];
  icon: IconName
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, dates, description, logo, skills, icon }) => {
  return (
    <Card  p="$4" m="$2">
      <XStack ai="center" gap="$4">
      <DynamicIcon name={icon} size={48} color="purple"/>
        <YStack>
          <Text fontSize="$6" fontWeight="bold">{title}</Text>
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