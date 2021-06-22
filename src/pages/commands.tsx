import { Container, VStack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react';
import { HeroContainer } from '../components/molecules/HeroContainer';
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
    <Navbar />
    <HeroContainer h="fit-content">
      <Container maxW="container.lg" backgroundColor="blackAlpha.700">
        <VStack spacing={{ md: 8 }}>
          {Object.keys(commands).map((category) => (
            <CommandGroup
              key={category}
              commands={commands[category as CommandCategory]}
              category={toStartCase(category)}
            />
          ))}
        </VStack>
      </Container>
    </HeroContainer>
  </>
);

export default Commands;
