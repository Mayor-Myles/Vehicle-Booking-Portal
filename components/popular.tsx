"use client";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const routes = [
  "Lagos → Ibadan",
  "Abuja → Kaduna",
  "Lagos → Benin",
  "PH → Owerri",
  "Ibadan → Ilorin",
  "Abeokuta → Lagos",
];

export default function PopularRoutes() {
  return (
    <Box py={16} px={6} maxW="7xl" mx="auto">
      <Heading mb={8} textAlign="center">Popular Routes</Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
        {routes.map((route, i) => (
          <Box
            key={i}
            p={5}
            textAlign="center"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            _hover={{ borderColor: "#C04000", color: "#C04000" }}
          >
            <Text fontWeight="medium">{route}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
