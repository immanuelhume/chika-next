import { LinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
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
      <Heading color="whiteAlpha.900">
        tbh,{` `}
        <Text display="inline" color="yellow.100" textDecoration="underline">
          Hayasaka
        </Text>
        {` `}
        is best girl
      </Heading>
      <Heading color="whiteAlpha.900">do check out this bot anyway!</Heading>
      <Wrap spacing={{ base: 4 }}>
        <NextLink href="/commands">
          <ChikaButton size={useBreakpointValue({ base: `md`, md: `lg` })}>
            See Chika&apos;s commands
          </ChikaButton>
        </NextLink>
        <IconButton
          aria-label="github"
          colorScheme="whiteAlpha"
          rounded="md"
          size={useBreakpointValue({ base: `md`, md: `lg` })}
          icon={<FaGithubAlt fontSize={28} />}
          variant="solid"
          as={Link}
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
        />
      </Wrap>
      <Button
        colorScheme="whiteAlpha"
        rightIcon={<LinkIcon />}
        as={Link}
        href={process.env.NEXT_PUBLIC_INVITE_URL}
        size="md"
        display={{ base: `flex`, md: `none` }}
      >
        Invite Chika
      </Button>
    </VStack>
  </Container>
);
