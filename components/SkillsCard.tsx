import React, { useEffect, useState } from "react";
import { XStack, Card, YStack, Text, H2 } from "tamagui";


interface SkillCardProps {
  area: string;
  skills: [string];
}

const SkillCard: React.FC<SkillCardProps> = ({ area, skills }) => {
  return (
    <Card pt="$2" pb="$5" pl="$5" pr="$5" m="$2">
      <Card.Header p="$2">
      <Text fontSize="$6" fontWeight="bold">{area}</Text>
      </Card.Header>
        <YStack gap="$2">
          {skills.map((skill: string) => (
            <Text key={skill} bg="purple" color="white" p="$2" borderRadius="$1">{skill}</Text>
          ))}
        </YStack>
    </Card>
  );
};

export default SkillCard;