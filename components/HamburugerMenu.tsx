import { useState } from 'react';
import { Popover, Button, YStack } from 'tamagui';
import NavLink from './NavLink';

export default function HamburgerMenu() {
  return (
    <Popover>
      <Popover.Trigger>
        <Button/>
      </Popover.Trigger>
      <Popover.Content padding="$4" backgroundColor="$background" borderRadius="$4">
        <YStack space="$3">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/portfolio">Sobre Mí</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}