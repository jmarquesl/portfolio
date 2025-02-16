import { useState } from 'react';
import { Popover, Text, YStack } from 'tamagui';
import NavLink from './NavLink';
import { Menu } from 'lucide-react'

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
          <NavLink href="/" onClick={handleClose}>Inicio</NavLink>
          <NavLink href="/portfolio" onClick={handleClose}>Sobre Mí</NavLink>
          <NavLink href="/contact" onClick={handleClose}>Contacto</NavLink>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}