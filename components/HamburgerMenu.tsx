import { useState } from 'react';
import { Popover, Text, YStack } from 'tamagui';
import { Menu } from 'lucide-react'
import LinkList from './LinkList';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger onClick={handleToggle}>
        <Text>
          <Menu size="24" />
        </Text>
      </Popover.Trigger>
      <Popover.Content
        padding="$4"
        backgroundColor="$background"
        borderRadius="$4"
        onClick={handleToggle}
        animation="fast"
        enterStyle={{ opacity: 0, scale: 0.95 }}
        exitStyle={{ opacity: 0, scale: 0.95 }}
        elevation="$4"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
      >
        <YStack space="$3">
          <LinkList />
        </YStack>
      </Popover.Content>
    </Popover>
  );
}