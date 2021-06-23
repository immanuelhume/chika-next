import { VStack, Code, Text } from '@chakra-ui/react';
import React from 'react';

export function CommandsIntro() {
  return (
    <VStack>
      <Text color="whiteAlpha.800">
        Chika&apos;s default prefix is{` `}
        <Text fontWeight="bold" display="inline">
          ck;
        </Text>
        {` `}
        and is customizable per-server.
      </Text>
      <Text color="whiteAlpha.800">
        A <Code colorScheme="pink">pink</Code> tag indicates a required
        argument, and a <Code>gray</Code> tag indicates an optional one.
      </Text>
    </VStack>
  );
}
