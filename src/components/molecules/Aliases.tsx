import { Tag, Wrap } from '@chakra-ui/react';
import React from 'react';

interface IAliasesProps {
  aliases: string[];
}

export const Aliases: React.FC<IAliasesProps> = ({ aliases }) => (
  <Wrap>
    {aliases.map((alias) => (
      <Tag key={alias} colorScheme="pink">
        {alias}
      </Tag>
    ))}
  </Wrap>
);
