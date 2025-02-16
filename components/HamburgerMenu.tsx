import { useState } from 'react';
import { Popover, Text, YStack } from 'tamagui';
import { Menu } from 'lucide-react'
import Links from './Links';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger onClick={handleToggle}>
        <Text>
          <Menu size="24" />
        </Text>
      </Popover.Trigger>
      <Popover.Content padding="$4" backgroundColor="$background" borderRadius="$4" onClick={handleClose}>
        <YStack space="$3">
          <Links/>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}