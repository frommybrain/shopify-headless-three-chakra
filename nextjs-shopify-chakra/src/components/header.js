import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.200" p="4">
      <Flex justify="space-between" align="center">
        <Text fontWeight="bold" fontSize="2xl">
          My Shopify App
        </Text>
        <Text>Cart (0)</Text>
      </Flex>
    </Box>
  );
};

export default Header;