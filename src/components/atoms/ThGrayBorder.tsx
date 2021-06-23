import { Th } from '@chakra-ui/react';
import React from 'react';

export const ThGrayBorder: React.FC<React.ComponentProps<typeof Th>> = ({
  children,
  ...props
}) => (
  <Th borderColor="gray.500" color="whiteAlpha.400" {...props}>
    {children}
  </Th>
);
