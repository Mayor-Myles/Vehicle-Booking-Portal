'use client';

import React from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { TopNav } from '@/topnav';
import { Sidebar } from '@/sidebar';
import Wallet from '@/wallet';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <TopNav openSidebar={onOpen} />
        <Flex>
          {!isMobile && <Sidebar isOpen={true} onClose={onClose}   />}
          {isMobile && <Sidebar isOpen={isOpen} onClose={onClose}  />}
          <Box p={{ base: 4, md: 6 }}>
          <Wallet />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
