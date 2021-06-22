import {
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
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
    <VStack alignItems="flex-start" color="whiteAlpha.900">
      <Heading size={useBreakpointValue({ md: `md` })}>{name}</Heading>
      <HStack>
        <Text>ck;{name}</Text>
        {args?.map((arg) => (
          <ArgInfo arg={arg} key={arg.id} />
        ))}
      </HStack>
      <Text>{description}</Text>
      {!!aliases?.length && <Aliases aliases={aliases} />}
    </VStack>
  );
};
