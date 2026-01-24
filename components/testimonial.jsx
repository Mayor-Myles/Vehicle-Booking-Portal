"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
  VStack,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Adebayo T.",
    role: "Frequent Traveler",
    message:
      "Booking buses has never been this easy. The experience is smooth and reliable every time.",
  },
  {
    name: "Sarah K.",
    role: "Student",
    message:
      "Affordable prices and quick booking. I recommend this platform to everyone.",
  },
  {
    name: "Daniel O.",
    role: "Business Executive",
    message:
      "Clean interface, fast payment, and excellent customer service.",
  },
];

export default function Testimonial() {
  return (
    <Box py={16} px={6} bg="gray.50">
      <Heading textAlign="center" mb={10}>
        What Our Customers Say
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="7xl" mx="auto">
        {testimonials.map((item, index) => (
          <Box
            key={index}
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
          >
            <VStack spacing={4}>
              <Avatar name={item.name} bg="#C04000" color="white" />
              <Text fontWeight="bold">{item.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {item.role}
              </Text>
              <Text textAlign="center" fontSize="sm">
                “{item.message}”
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
