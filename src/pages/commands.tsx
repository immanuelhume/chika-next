import { Box, Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { HSpace } from '../components/atoms/HSpace';
import { CommandsIntro } from '../components/molecules/CommandsIntro';
import { CommandGroup } from '../components/organisms/CommandGroup';
import { Navbar } from '../components/organisms/Navbar';
import client from '../graphql/apollo-client';
import {
  Command,
  CommandCategory,
  GetAllCommandsDocument,
} from '../graphql/generated/types';
import { toStartCase } from '../lib/util-funcs';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GetAllCommandsDocument,
  });

  const commands = data.getAllCommands.reduce(
    (acc: Record<CommandCategory, Command[]>, curr: Command) => {
      const { category } = curr;
      if (!acc[category]) acc[category] = [];
      acc[category].push(curr);
      return acc;
    },
    {} as Record<CommandCategory, Command[]>,
  );

  return { props: { commands } };
};

interface ICommandsProps {
  commands: Record<CommandCategory, Command[]>;
}

const Commands: React.FC<ICommandsProps> = ({ commands }) => (
  <>
    <Head>
      <title>Commands</title>
    </Head>
    <Navbar />
    <Box backgroundColor="gray.700">
      <HSpace size="md" />
      <Container maxW="container.lg">
        <CommandsIntro />
        <HSpace size="md" />
        {Object.keys(commands).map((category) => (
          <CommandGroup
            key={category}
            commands={commands[category as CommandCategory]}
            category={toStartCase(category)}
          />
        ))}
      </Container>
    </Box>
  </>
);

export default Commands;
