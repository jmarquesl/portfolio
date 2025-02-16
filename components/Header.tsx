import React from "react";
import { XStack, YStack, Text, useMedia } from "tamagui";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";
import HamburgerMenu from "./HamburgerMenu";
import Links from "./Links";

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
        <XStack gap="$4" ml="auto">
          {useMedia().sm ? (
            <Links />
          ) : (
            <HamburgerMenu ml="auto" /> // Empuja el menú hacia la derecha
          )}
        </XStack>
      </XStack>
    </YStack>
  );
}

export default Header;
