import React from "react";
import { Button } from "tamagui";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} passHref>
    <Button size="$4" fontWeight="bold" textDecorationLine="none">
      {children}
    </Button>
  </Link>
);

export default NavLink;
