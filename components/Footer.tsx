import React from 'react';
import {YStack, XStack, Text, Button } from 'tamagui';
import Link from 'next/link';

const Footer = () => (
  <YStack p="$4" ai="center" mt="$6" bg="$background" shadowColor="$shadowColor" shadowRadius="$2" shadowOffset={{ width: 0, height: 2 }}>
    <XStack gap="$4" mt="$3">
      <Text fontSize="$4" textAlign="center">GNU GENERAL PUBLIC LICENSE Version 3</Text>
      <Link href="https://linkedin.com" passHref><Button size="$4" variant="outlined">LinkedIn</Button></Link>
      <Link href="https://github.com" passHref><Button size="$4" variant="outlined">GitHub</Button></Link>
    </XStack>
  </YStack>
);

export default Footer;
