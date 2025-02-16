import React from "react";
import { Card, Text } from "tamagui";

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props: ExperienceCardProps) => {
  return (
    <Card p="$4" mt="$4" >
      <Text fontSize="$6" fontWeight="bold">{props.title} - {props.company}</Text>
      <Text fontSize="$4">{props.dates}</Text>
      <Text fontSize="$4">{props.description}</Text>
    </Card>
  );
};

export default ExperienceCard;