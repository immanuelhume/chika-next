import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Command } from '../../graphql/generated/types';
import { ArgInfo } from '../atoms/ArgInfo';
import { Aliases } from './Aliases';

interface ICommandProps {
  command: Command;
}

export const CommandInfo: React.FC<ICommandProps> = ({ command }) => {
  const { name, description, aliases, args } = command;
  return (
    <VStack
      alignItems="flex-start"
      borderLeftWidth="thick"
      borderLeftColor="pink.300"
      borderRadius={{ md: `sm` }}
      paddingLeft={{ md: 2 }}
    >
      <HStack>
        <Text fontWeight="black" color="pink.200">
          ck;{name}
        </Text>
        {args?.map((arg) => (
          <ArgInfo arg={arg} key={arg.id} />
        ))}
      </HStack>
      <Text>{description}</Text>
      {!!aliases?.length && <Aliases aliases={aliases} />}
    </VStack>
  );
};
