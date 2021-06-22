import { Code, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { Argument } from '../../graphql/generated/types';

interface IArgProps {
  arg: Argument;
}

export const ArgInfo: React.FC<IArgProps> = ({ arg }) => {
  const { name, optional } = arg;
  if (optional) {
    return (
      <Tooltip label="This is an optional argument">
        <Code colorScheme="gray" variant="subtle">
          {name}
        </Code>
      </Tooltip>
    );
  }
  return (
    <Tooltip label="This argument is required">
      <Code colorScheme="pink" variant="subtle">
        {name}
      </Code>
    </Tooltip>
  );
};
