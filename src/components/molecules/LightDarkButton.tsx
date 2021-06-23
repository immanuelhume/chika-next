import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const LightDarkButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="toggle theme"
      icon={colorMode === `light` ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
    />
  );
};
