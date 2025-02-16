import React from 'react';
import { XStack, YStack, Text, Button } from 'tamagui';
import Link from 'next/link';

const Header = () => (
  <YStack p="$4" ai="center" bg="transparent" shadowColor="$shadowColor" shadowRadius="$2" shadowOffset={{ width: 0, height: 2 }}>
    <XStack gap="$4" mt="$3">
      <Text fontSize="$8" fontWeight="bold" textAlign="center">Mi Portfolio</Text>
      <Link href="/" passHref>
        <Button size="$4" fontWeight="bold" textDecorationLine="none">Inicio</Button>
      </Link>
      <Link href="/portfolio" passHref>
        <Button size="$4" fontWeight="bold" textDecorationLine="none">Sobre Mí</Button>
      </Link>
      <Link href="/contact" passHref>
        <Button size="$4" fontWeight="bold" textDecorationLine="none">Contacto</Button>
      </Link>
    </XStack>
  </YStack>
);

export default Header;
