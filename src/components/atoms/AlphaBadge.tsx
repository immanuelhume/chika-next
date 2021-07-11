import { Badge } from '@chakra-ui/react';
import React from 'react';

export const AlphaBadge: React.FC<React.ComponentProps<typeof Badge>> = () => (
  <Badge
    variant="subtle"
    colorScheme="pink"
    position="absolute"
    right={-1}
    top={-1}
  >
    alpha
  </Badge>
);
