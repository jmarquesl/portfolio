import React from 'react';
import {YStack, XStack, Text, Button } from 'tamagui';
import Link from 'next/link';

const Footer = () => (
  <YStack p="$4" ai="center" mt="$6" bg="transparent" shadowColor="$shadowColor" shadowRadius="$2" shadowOffset={{ width: 0, height: 2 }}>
    <XStack gap="$4" mt="$3" justifyContent="space-between" width="100%">
      <Text fontSize="$4" textAlign="left" fontWeight="bold" alignSelf="center">GNU GENERAL PUBLIC LICENSE Version 3</Text>
      <XStack gap="$4">
      <Link href="https://linkedin.com" passHref><Button size="$4" variant="outlined" alignSelf="center">LinkedIn</Button></Link>
      <Link href="https://github.com" passHref><Button size="$4" variant="outlined" alignSelf="center">GitHub</Button></Link>
      </XStack>
    </XStack>
  </YStack>
);

export default Footer;
