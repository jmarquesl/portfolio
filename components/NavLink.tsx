import React, { HTMLAttributeAnchorTarget } from "react";
import { Text, Stack } from "tamagui";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, target }) => (
  <Link href={href} passHref legacyBehavior target={target}>
    <Stack
      as="navLink"
      px="$3"
      py="$2"
      br="$4"
      cursor="pointer"
      textDecorationLine="none"
      color="$color"
      hoverStyle={{ bg: "rgba(255, 255, 255, 0.1)", scale: 1.05 }}
      pressStyle={{ opacity: 0.6 }}
      focusStyle={{ outlineWidth: 2, outlineColor: "$color7" }}
    >
      <Text fontSize="$5" fontWeight="600" color="$color" textDecorationLine="none">
        {children}
      </Text>
    </Stack>
  </Link>
);

export default NavLink;
