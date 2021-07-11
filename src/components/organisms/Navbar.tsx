import { LinkIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AlphaBadge } from '../atoms/AlphaBadge';
import { ChikaLogo } from '../atoms/ChikaLogo';
import { ChikaButton } from '../molecules/ChikaButton';

export const Navbar: React.FC = () => (
  <Box bgColor="gray.700" color="whiteAlpha.900" w="full">
    <Container
      maxW="container.xl"
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
      <ButtonGroup spacing={2} alignItems="center">
        <NextLink href={process.env.NEXT_PUBLIC_DASHBOARD_URL}>
          <Button
            variant="ghost"
            colorScheme="gray"
            display={{ base: `none`, md: `block` }}
            _hover={{ background: `gray.600` }}
          >
            Dashboard
            <AlphaBadge />
          </Button>
        </NextLink>
        <NextLink href="/commands">
          <Button
            variant="ghost"
            colorScheme="gray"
            display={{ base: `none`, md: `block` }}
            _hover={{ background: `gray.600` }}
          >
            Commands
          </Button>
        </NextLink>
        <ChikaButton
          rightIcon={<LinkIcon />}
          as={Link}
          href={process.env.NEXT_PUBLIC_INVITE_URL}
        >
          Invite
        </ChikaButton>
      </ButtonGroup>
    </Container>
  </Box>
);
