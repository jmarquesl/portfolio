import React from "react";
import { XStack, YStack, Text } from "tamagui";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";

const Header = () => (
  <YStack
    p="$4"
    ai="center"
    bg="transparent"
    shadowColor="$shadowColor"
    shadowRadius="$2"
    shadowOffset={{ width: 0, height: 2 }}
  >
    <XStack gap="$6" mt="$3" ai="center">
      <ThemeSwitch />
      <Text fontSize="$8" fontWeight="bold" textAlign="center">
        Mi Portfolio
      </Text>
      <NavLink href="/">Inicio</NavLink>
      <NavLink href="/portfolio">Sobre Mí</NavLink>
      <NavLink href="/contact">Contacto</NavLink>
    </XStack>
  </YStack>
);

export default Header;
