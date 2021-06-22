import { Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export const ChikaLogo: React.FC<React.ComponentProps<typeof Heading>> = (
  props,
) => (
  <Heading {...props} as={Link}>
    <NextLink href="/">chika.ts</NextLink>
  </Heading>
);
