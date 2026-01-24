"use client";

import { Box, SimpleGrid, Text, VStack, Heading } from "@chakra-ui/react";
import { CiDelivery } from "react-icons/ci";

const feats = [
  { icon: CiDeliveryTruck, title: "Wide Network", desc: "Travel anywhere with our extensive bus network." },
  { icon: CiDeliveryTruck, title: "Easy Booking", desc: "Book tickets quickly with just a few clicks." },
  { icon: CiDeliveryTruck, title: "Secure Payments", desc: "Safe and reliable payment options for all users." },
];

export default function Features() {
  return (
    <Box py={16} px={6} maxW="7xl" mx="auto">
      <Heading textAlign="center" mb={10}>Why Choose Us</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {feats.map((feature, idx) => (
          <VStack key={idx} spacing={4}>
            <Box as={feature.icon} w={12} h={12} color="#C04000" />
            <Heading size="md">{feature.title}</Heading>
            <Text textAlign="center">{feature.desc}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

