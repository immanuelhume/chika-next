import { Badge, Tooltip } from '@chakra-ui/react';
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
        <Badge colorScheme="gray" variant="subtle">
          {name}
        </Badge>
      </Tooltip>
    );
  }
  return (
    <Tooltip label="This argument is required">
      <Badge colorScheme="pink" variant="subtle">
        {name}
      </Badge>
    </Tooltip>
  );
};
