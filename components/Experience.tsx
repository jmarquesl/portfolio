import React from "react";
import { XStack, YStack, Text, Image } from "tamagui";

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  logo: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, dates, description, logo, skills }: ExperienceCardProps) => {
  return (
    <YStack p="$4" bg="white" borderRadius="$4" shadow="md">
      <XStack ai="center" gap="$4">
        <Image src={logo} width={50} height={50} alt={company} />
        <YStack>
          <Text fontSize="$6" fontWeight="bold">{title}</Text>
          <Text fontSize="$4">{company}</Text>
          <Text fontSize="$3" color="gray">{dates}</Text>
        </YStack>
      </XStack>
      <Text mt="$2">{description}</Text>
      <XStack gap="$2" mt="$2" flexWrap="wrap">
        {skills.map((skill: string) => (
          <Text key={skill} bg="gray" color="white" p="$2" borderRadius="$2">{skill}</Text>
        ))}
      </XStack>
    </YStack>
  );
};

export default ExperienceCard;