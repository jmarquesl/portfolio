import React from 'react';
import { YStack, XStack, Text } from 'tamagui';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => (
  <YStack p="$4" ai="center" mt="$6">
    <XStack px="$4" gap="$" mt="$3" justifyContent="space-between" width="100%">
      <Text fontSize="$4" textAlign="left" fontWeight="bold" alignSelf="center">
        GNU GENERAL PUBLIC LICENSE Version 3
      </Text>
      <XStack gap="$4">
        <Link href="https://www.linkedin.com/in/jordi-marqu%C3%A9s-llaberia-11685145/" passHref>
          <Text>
            <Linkedin size={24} />
          </Text>
        </Link>
        <Link href="https://github.com/jmarquesl" passHref>
          <Text>
            <Github size={24} />
          </Text>
        </Link>
      </XStack>
    </XStack>
  </YStack>
);

export default Footer;
