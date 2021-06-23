import { Button } from '@chakra-ui/react';
import React from 'react';

export const ChikaButton: React.FC<React.ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => (
  <Button
    background="pink.300"
    _hover={{ background: `pink.400` }}
    color="whiteAlpha.900"
    {...props}
  >
    {children}
  </Button>
);
