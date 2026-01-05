
"use client";

import { HStack, Avatar, Text, Box, IconButton, Badge, Icon, useColorMode} from "@chakra-ui/react";
import { FiMenu, FiBell } from "react-icons/fi";
import { CiLight, CiDark } from "react-icons/ci";
  

export const TopNav = ({openSidebar}) => {
 
  const {colorMode, toggleColorMode} = useColorMode();
  
  return (

    <Box
     position="sticky"
      top="0"

    zIndex="10"
      >
        
    <HStack
      w="100%"
      justify="space-between"
      align="center"
      py={2}
      px={3}
      bg={colorMode === "light" ? "white" : "#1e1e1e"}
    >
      {/* Left section */}
      <HStack spacing={3}>
        <Avatar
          name="Clement Adekunle"
          src="https://biteable.com/wp-content/uploads/2025/06/2006_thumb_small.jpg"
          size="md"
          shadow="md"
        />

        <Box>
          <Text fontSize="sm" color="gray.500">
            Welcome.
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Clement Adekunle
          </Text>
        </Box>
      </HStack>

      {/* Right section */}
      <HStack spacing={3}>
        
        <Box position="relative">
          <IconButton
            aria-label="Notifications"
            icon={<FiBell size="1.5em" />}
            rounded="lg"
            
          />
          <Badge
            position="absolute"
            top="0.6"
            right="0.6"
            boxSize="8px"
            rounded="full"
            bg="red.500"
            p="0"
          />
          
        </Box>
        
        
          <IconButton onClick={toggleColorMode} size="md" >
            {colorMode=== "dark" ? ( <CiLight size="md"/>) : ( <CiDark size="md" />) }
          </IconButton>
             
        
          
          
          
          
<IconButton
          onClick={openSidebar}
          aria-label="Menu"
          icon={<FiMenu />}
          rounded="lg"
          bgGradient="linear(to-r, purple.400, purple.500)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, purple.500, purple.600)" }}
        />

      </HStack>

      
    </HStack>
      </Box>
  );
}
