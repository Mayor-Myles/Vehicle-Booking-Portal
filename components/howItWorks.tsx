"use client";

import { Box, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { CiSearch, CiBus, CiCreditCard1 } from "react-icons/ci";

const steps = [
  { icon: CiSearch, title: "Search Route", text: "Choose your origin and destination" },
  { icon: CiBus, title: "Select Bus", text: "Pick a bus that fits your schedule" },
  { icon: CiCreditCard1, title: "Pay & Travel", text: "Secure payment and enjoy your trip" },
];

export default function HowItWorks() {
  return (
    <Box py={16} px={6} bg="gray.50">
      <Heading textAlign="center" mb={10}>How It Works</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="6xl" mx="auto">
        {steps.map((step, i) => (
          <VStack key={i} spacing={4}>
            <Box as={step.icon} w={12} h={12} color="#C04000" />
            <Text fontWeight="bold">{step.title}</Text>
            <Text textAlign="center" fontSize="sm">{step.text}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
