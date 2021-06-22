import { HStack, Tag, Text } from '@chakra-ui/react';
import React from 'react';

interface IAliasesProps {
  aliases: string[];
}

export const Aliases: React.FC<IAliasesProps> = ({ aliases }) => (
  <HStack>
    <Text>Aliases:</Text>
    {aliases.map((alias) => (
      <Tag key={alias} colorScheme="pink">
        {alias}
      </Tag>
    ))}
  </HStack>
);
