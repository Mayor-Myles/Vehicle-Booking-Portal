'use client';

import { ChakraProvider, Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Sidebar } from '@/Sidebar';
import { TopNav } from '@/TopNav';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <TopNav onMenuClick={onOpen} />
        <Box display="flex">
          {!isMobile && <Sidebar isOpen={true} onClose={onClose} />}
          {isMobile && <Sidebar isOpen={isOpen} onClose={onClose} isMobile={true} />}
          <Box flex="1" p={{ base: 4, md: 6 }}>
            {/* Your main content here */}
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
