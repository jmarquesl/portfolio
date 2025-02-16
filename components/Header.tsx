import React from "react";
import { XStack, YStack, Text, useMedia } from "tamagui";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";
import HamburgerMenu from "./HamburugerMenu";

function Header() {
  return (
    <YStack
      p="$4"
      bg="transparent"
      shadowColor="$shadowColor"
      shadowRadius="$2"
      shadowOffset={{ width: 0, height: 2 }}
    >
      <XStack 
        gap="$6" 
        mt="$3"
        ai="center" 
        jc="center"  
        width="100%"  
        maxWidth="1200px" 
        mx="auto"
        alignItems="center"
      >
        <ThemeSwitch />
        
        <Text fontSize="$8" fontWeight="bold" textAlign="center" ai="center" jc="center" flex={1}>
          Mi Portfolio
        </Text>

        {useMedia().sm ? (
          <XStack gap="$4">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/portfolio">Sobre Mí</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
          </XStack>
        ) : (
          <HamburgerMenu ml="auto" /> // Empuja el menú hacia la derecha
        )}
      </XStack>
    </YStack>
  );
}

export default Header;
