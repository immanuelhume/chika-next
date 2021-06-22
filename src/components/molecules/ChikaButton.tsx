import { Button } from '@chakra-ui/react';
import React from 'react';

export const ChikaButton: React.FC<React.ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => (
  <Button colorScheme="pink" {...props}>
    {children}
  </Button>
);
