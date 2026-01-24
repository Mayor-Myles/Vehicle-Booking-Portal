"use client";

import { Box, Flex, Heading, Spacer, Button, HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="#C04000" px={6} py={4} color="white">
      <Flex align="center">
        <Heading size="md">BusBooking</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost" color="white">Home</Button>
          <Button variant="ghost" color="white">Services</Button>
          <Button variant="ghost" color="white">About</Button>
          <Button colorScheme="whiteAlpha">Login</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
