import React, { useEffect, useState } from "react";
import { XStack, Card, YStack, Text, H2 } from "tamagui";
import i18n from "../i18n";


interface SkillCardProps {
  area: string;
  skills: [string];
}

const SkillCard: React.FC<SkillCardProps> = ({ area, skills }) => {
  return (
    <Card p="$4" m="$2">
      <Card.Header padded>
      <Text fontSize="$6" fontWeight="bold">{area}</Text>
      </Card.Header>
        <YStack gap="$2">
          {skills.map((skill: string) => (
            <Text key={skill} bg="gray" color="white" p="$2" borderRadius="$2">{skill}</Text>
          ))}
        </YStack>
    </Card>
  );
};

export default SkillCard;