'use client';

import React from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue, VStack } from '@chakra-ui/react';
import { TopNav } from '@/topnav';
import { Sidebar } from '@/sidebar';
import Wallet from '@/wallet';
import Stats from '@/stats';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <TopNav openSidebar={onOpen} />

      
          {!isMobile && <Sidebar isOpen={true} onClose={onClose}   />}
          {isMobile && <Sidebar isOpen={isOpen} onClose={onClose}  />}
        
        <VStack>
        <Box flex="1" p={{ base: 4, md: 6 }}>
          <Wallet />
            
          </Box>
          <Stats/>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
