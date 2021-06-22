import { Box } from '@chakra-ui/react';
import React from 'react';

export const HeroContainer: React.FC = ({ children }) => (
  <Box
    w="full"
    h={{ base: `91vh`, md: `92vh` }}
    backgroundImage="/chika-gun.jpg"
    bgPosition="center right"
    backgroundSize="cover"
  >
    {children}
  </Box>
);
