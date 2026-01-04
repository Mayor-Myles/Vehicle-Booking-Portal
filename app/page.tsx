'use client';

import React from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { TopNav } from '@/topnav';
import { Sidebar } from '@/sidebar';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <TopNav openSidebar={onOpen} />
        <Flex>
          {!isMobile && <Sidebar isOpen={true} onClose={onClose} onOpen={onOpen}  />}
          {isMobile && <Sidebar isOpen={false} onClose={onClose} onOpen={onOpen} />}
          <Box flex="1" p={{ base: 4, md: 6 }}>
            <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
              <h1 style={{ fontSize: '2xl', fontWeight: 'bold', marginBottom: '16px' }}>
                Welcome to Mylezic Dashboard
              </h1>
              <p style={{ color: 'gray.600' }}>
                Your main content goes here. Navigate using the sidebar menu items.
              </p>
            </Box>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
