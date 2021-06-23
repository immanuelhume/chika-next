import { Box } from '@chakra-ui/react';
import React from 'react';

interface IHSpaceProps {
  size: 'sm' | 'md' | 'lg';
}

const sizeChart = {
  sm: 4,
  md: 8,
  lg: 12,
};

export const HSpace: React.FC<IHSpaceProps> = ({ size }) => (
  <Box h={sizeChart[size] || 0} />
);
