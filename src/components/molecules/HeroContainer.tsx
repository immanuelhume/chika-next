import { Box } from '@chakra-ui/react';
import React from 'react';

export const HeroContainer: React.FC<React.ComponentProps<typeof Box>> = ({
  children,
  ...props
}) => (
  <Box
    w="full"
    h={{ base: `91vh`, md: `92vh` }}
    backgroundImage="/chika-gun.jpg"
    bgPosition="center right"
    backgroundSize="cover"
    backgroundAttachment="fixed"
    {...props}
  >
    {children}
  </Box>
);
