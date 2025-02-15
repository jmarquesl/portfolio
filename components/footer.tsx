import React from 'react';
import { XStack, Text, Button } from 'tamagui';
import Link from 'next/link';

const Footer = () => (
  <XStack p="$4" jc="space-between" ai="center" mt="$6">
    <Text fontSize="$4">GNU GENERAL PUBLIC LICENSE Version 3</Text>
    <XStack gap="$4">
      <Link href="https://linkedin.com" passHref><Button>LinkedIn</Button></Link>
      <Link href="https://github.com" passHref><Button>GitHub</Button></Link>
    </XStack>
  </XStack>
);

export default Footer;
