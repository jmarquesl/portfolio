import { Card, Text } from "tamagui";

const ExperienceCard = ({ title, company, dates, description }) => (
  <Card p="$4" mt="$4" bg="$gray3">
    <Text fontSize="$6" fontWeight="bold">{title} - {company}</Text>
    <Text fontSize="$4" color="$gray9">{dates}</Text>
    <Text fontSize="$4" mt="$2">{description}</Text>
  </Card>
);

export default ExperienceCard;