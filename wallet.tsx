"use client";

import { Box, Text, HStack, VStack, Flex } from "@chakra-ui/react";

export default function Wallet() {
  return (
    <Box
      
      borderRadius="2xl"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-r, #5A4FCF, #3F3A8F)"
      color="white"
      boxShadow="xl"
      
    >
      {/* Decorative curve */}
      <Box
        position="absolute"
        top="-40px"
        right="-60px"
        w="220px"
        h="220px"
        bg="rgba(0,0,0,0.15)"
        borderRadius="full"
      />

      <VStack align="flex-start" spacing={6} p={6}>
        {/* Card Number */}
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="xs" opacity={0.7} letterSpacing="widest">
            CARD NUMBER
          </Text>
          <HStack spacing={2}>
            <Text letterSpacing="3px">****</Text>
            <Text letterSpacing="3px">****</Text>
            <Text letterSpacing="3px">****</Text>
            <Text fontWeight="bold" fontSize="lg">
              1234
            </Text>
          </HStack>
        </VStack>

        {/* Bottom Details */}
        <Flex w="100%" justify="space-between" align="flex-end">
          <HStack spacing={10}>
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="xs" opacity={0.7}>
                VALID
              </Text>
              <Text fontWeight="semibold">01/25</Text>
            </VStack>

            <VStack align="flex-start" spacing={0}>
              <Text fontSize="xs" opacity={0.7}>
                CVV
              </Text>
              <Text fontWeight="semibold">345</Text>
            </VStack>
          </HStack>

          {/* Mastercard dots */}
          <HStack spacing={-2}>
            <Box w="28px" h="28px" bg="#EB001B" borderRadius="full" />
            <Box w="28px" h="28px" bg="#F79E1B" borderRadius="full" />
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
}
