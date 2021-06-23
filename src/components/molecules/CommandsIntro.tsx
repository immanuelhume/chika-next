import { VStack, Code, Text, Box } from '@chakra-ui/react';
import React from 'react';

export function CommandsIntro() {
  return (
    <VStack>
      <Box
        color="whiteAlpha.800"
        w="full"
        textAlign={{ base: `left`, md: `center` }}
      >
        Chika&apos;s default prefix is{` `}
        <Text fontWeight="bold" display="inline" color="whiteAlpha.800">
          ck;
        </Text>
        {` `}
        and is customizable per-server.
      </Box>
      <Box
        color="whiteAlpha.800"
        w="full"
        textAlign={{ base: `left`, md: `center` }}
      >
        A <Code colorScheme="pink">pink</Code> tag indicates a required
        argument, and a <Code>gray</Code> tag indicates an optional one.
      </Box>
    </VStack>
  );
}
