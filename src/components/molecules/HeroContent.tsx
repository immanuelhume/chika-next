import { LinkIcon } from '@chakra-ui/icons';
import {
  Container,
  Flex,
  Heading,
  Link,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { ChikaButton } from './ChikaButton';

export const HeroContent: React.FC = () => (
  <Container
    maxW="container.lg"
    h="full"
    as={Flex}
    justify="left"
    align="center"
    bgColor="blackAlpha.700"
  >
    <VStack spacing={{ base: 4, md: 12 }} alignItems="start">
      <Heading color="whiteAlpha.900">tbh, Hayasaka is best girl</Heading>
      <Heading color="whiteAlpha.900">do check out this bot anyway</Heading>
      <NextLink href="/commands">
        <ChikaButton size={useBreakpointValue({ base: `md`, md: `lg` })}>
          See Chika&apos;s commands
        </ChikaButton>
      </NextLink>
      <ChikaButton
        colorScheme="whiteAlpha"
        rightIcon={<LinkIcon />}
        as={Link}
        href={process.env.INVITE_URL}
        display={{ base: `flex`, md: `none` }}
      >
        Invite Chika
      </ChikaButton>
    </VStack>
  </Container>
);
