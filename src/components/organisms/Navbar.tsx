import { LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { ChikaLogo } from '../atoms/ChikaLogo';
import { ChikaButton } from '../molecules/ChikaButton';

export const Navbar: React.FC = () => (
  <Box bgColor="gray.700" color="whiteAlpha.900">
    <Container
      maxW="container.lg"
      as={Flex}
      flexDir="row"
      justifyContent="flex-end"
      alignItems="center"
      h={{ base: `9vh`, md: `8vh` }}
      minH={{ base: 16, md: 16 }}
    >
      <ChikaLogo
        marginRight="auto"
        size={useBreakpointValue({ base: `lg`, md: `xl` })}
      />
      <ButtonGroup>
        <NextLink href="/commands">
          <ChikaButton
            variant="outline"
            colorScheme="whiteAlpha"
            display={{ base: `none`, md: `block` }}
          >
            Commands
          </ChikaButton>
        </NextLink>
        <ChikaButton
          rightIcon={<LinkIcon />}
          as={Link}
          href={process.env.INVITE_URL}
        >
          Invite
        </ChikaButton>
      </ButtonGroup>
    </Container>
  </Box>
);
