
"use client";

import { HStack, Avatar, Text, Box, IconButton, Badge } from "@chakra-ui/react";
import { FiMenu, FiBell } from "react-icons/fi";

expor
  

export const TopNav = ({isSidebar) => {
  return (
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
          src="/avatar.png" // replace with your image
          boxSize="40px"
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
        <IconButton
          aria-label="Menu"
          icon={<FiMenu />}
          rounded="lg"
          bgGradient="linear(to-r, purple.400, purple.500)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, purple.500, purple.600)" }}
        />

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
      </HStack>
    </HStack>
  );
}
