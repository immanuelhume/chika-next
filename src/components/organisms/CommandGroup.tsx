import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Command } from '../../graphql/generated/types';
import { CommandInfo } from '../molecules/CommandInfo';

interface ICommandGroupProps {
  category: string;
  commands: Command[];
}

export const CommandGroup: React.FC<ICommandGroupProps> = ({
  category,
  commands,
}) => (
  <Box
    borderColor="pink.7=300"
    borderWidth="thin"
    color="whiteAlpha.900"
    padding={{ md: 4 }}
    borderRadius="lg"
    w="full"
  >
    <Heading size="lg">{category}</Heading>
    <Divider marginTop={4} marginBottom={4} />
    <VStack align="start" spacing={4}>
      {commands.map((command) => (
        <CommandInfo command={command} key={command.id} />
      ))}
    </VStack>
  </Box>
);
