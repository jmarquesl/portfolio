import { YStack, Text, XStack, Button } from 'tamagui';

export const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <YStack>
    <Text fontSize="$8" fontWeight="bold">{title}</Text>
    {children}
  </YStack>
);