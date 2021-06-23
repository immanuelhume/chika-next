/* eslint-disable @typescript-eslint/no-use-before-define */
import { Text, Tr, VStack, Wrap } from '@chakra-ui/react';
import React from 'react';
import { Command } from '../../graphql/generated/types';
import { ArgInfo } from '../atoms/ArgInfo';
import { Aliases } from './Aliases';
import { TdGrayBorder } from '../atoms/TdGrayBorder';

interface ICommandProps {
  command: Command;
}

export const CommandInfo: React.FC<ICommandProps> = ({ command }) => (
  <>
    <CommandInfoBase command={command} />
    <CommandInfoMd command={command} />
  </>
);

function CommandInfoBase({ command }: ICommandProps) {
  const { name, description, aliases, args } = command;
  return (
    <Tr display={{ base: `table-row`, md: `none` }}>
      <TdGrayBorder paddingLeft={0}>
        <VStack align="start">
          <Wrap>
            <Text fontWeight="bold" key={name}>
              {name}
            </Text>
            {args?.map((arg) => (
              <ArgInfo arg={arg} key={arg.id} />
            ))}
          </Wrap>
          <Text>{description}</Text>
          {!!aliases?.length && (
            <Wrap align="center">
              <Text>Aliases</Text>
              <Aliases aliases={aliases} />
            </Wrap>
          )}
        </VStack>
      </TdGrayBorder>
    </Tr>
  );
}

function CommandInfoMd({ command }: ICommandProps) {
  const { name, description, aliases, args } = command;
  return (
    <Tr display={{ base: `none`, md: `table-row` }}>
      <TdGrayBorder w="2xs">
        <Wrap>
          <Text>{name}</Text>
          {args?.map((arg) => (
            <ArgInfo key={arg.id} arg={arg} />
          ))}
        </Wrap>
      </TdGrayBorder>
      <TdGrayBorder>{description}</TdGrayBorder>
      <TdGrayBorder w="3xs">
        {!!aliases?.length && <Aliases aliases={aliases} />}
      </TdGrayBorder>
    </Tr>
  );
}
