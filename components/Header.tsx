import React from "react";
import { XStack, YStack, Text, useMedia } from "tamagui";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";
import HamburgerMenu from "./HamburgerMenu";
import Links from "./Links";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <YStack
      p="$4"
      bg="transparent"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      style={{ backdropFilter: "blur(10px)" }}
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
        <LanguageSwitcher />
        <XStack gap="$4" ml="auto">
          {useMedia().sm ? (
            <Links />
          ) : (
            <HamburgerMenu/>
          )}
        </XStack>
      </XStack>
    </YStack>
  );
}

export default Header;
