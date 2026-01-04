
"use client";

import { HStack, Avatar, Text, Box, IconButton, Badge } from "@chakra-ui/react";
import { FiMenu, FiBell } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa6";

  

export const TopNav = ({openSidebar}) => {
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
      bg="white"
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
            icon={<FiBell />}
            rounded="lg"
            bg="gray.100"
          />
          <Badge
            position="absolute"
            top="0.5"
            right="0.5"
            boxSize="10px"
            rounded="full"
            bg="red.400"
            p="0"
          />
          
        </Box>
        
        <IconButton
          
          aria-label="Toggle light/dark mode"
          icon={<FaRegLightbulb size="md" />}
          rounded="lg"
          color="black"
          variant="ghost"
          
          />
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
