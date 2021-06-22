import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

// wrap any components which uses hooks in this
export const ClientOnly: React.FC = ({ children, ...props }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;
  return <Box {...props}>{children}</Box>;
};
