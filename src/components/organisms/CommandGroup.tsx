import { Box, Heading, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
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
  <Box color="whiteAlpha.800" paddingBottom={{ base: 8, md: 12 }}>
    <Heading textAlign={{ base: `center`, md: `right` }} fontWeight="thin">
      {category}
    </Heading>
    <Table size="md">
      <Thead>
        <Tr display={{ base: `none`, md: `table-row` }}>
          <Th>Command</Th>
          <Th>Wat it do</Th>
          <Th>Aliases</Th>
        </Tr>
      </Thead>
      <Tbody>
        {commands.map((command) => (
          <CommandInfo key={command.id} command={command} />
        ))}
      </Tbody>
    </Table>
  </Box>
);
