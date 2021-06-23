import { Td } from '@chakra-ui/react';
import React from 'react';

export const TdGrayBorder: React.FC<React.ComponentProps<typeof Td>> = ({
  children,
  ...props
}) => (
  <Td borderColor="gray.500" {...props}>
    {children}
  </Td>
);
