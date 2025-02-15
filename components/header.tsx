import React from 'react';
import { XStack, Text, Button } from 'tamagui';
import Link from 'next/link';
import { ThemeToggle } from '../context/ThemeToggle';

const Header = () => (
  <XStack bg="$gray5" p="$4" jc="space-between" ai="center">
    <ThemeToggle />
    <Text fontSize="$6" fontWeight="bold">Mi Portfolio</Text>
    <XStack gap="$4">
      <Link href="/" passHref><Button>Inicio</Button></Link>
      <Link href="/portfolio" passHref><Button>Sobre Mí</Button></Link>
      <Link href="/contact" passHref><Button>Contacto</Button></Link>
    </XStack>
  </XStack>
);

export default Header;