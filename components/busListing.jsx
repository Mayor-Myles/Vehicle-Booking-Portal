"use client";

import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Badge,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const buses = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJgq_O6EmvH_FIlotKD68ZgWTJ-G0MkBayj7RZveb8Q&s=10",
    from: "Lagos",
    to: "Ibadan",
    departure: "08:00 AM",
    arrival: "10:30 AM",
    price: 7500,
    seatsLeft: 6,
  },
  {
    id: 2,
    image: "/bus2.jpg",
    from: "Abuja",
    to: "Lokoja",
    departure: "09:30 AM",
    arrival: "12:15 PM",
    price: 9500,
    seatsLeft: 2,
  },
  {
    id: 3,
    image: "/bus3.jpg",
    from: "Benin",
    to: "Asaba",
    departure: "01:00 PM",
    arrival: "02:40 PM",
    price: 5500,
    seatsLeft: 12,
  },
];

export default function BusListing() {
  const cardBg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={8}>
      <Heading size="lg" mb={6}>
        Available Buses
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
        {buses.map((bus) => (
          <Box
            key={bus.id}
            bg={cardBg}
            borderWidth="1px"
            borderColor={border}
            borderRadius="2xl"
            overflow="hidden"
            transition="0.2s"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
          >
            {/* BUS IMAGE */}
            <Image
              src={bus.image}
              alt="Bus"
              h="180px"
              w="100%"
              objectFit="cover"
            />

            <Box p={5}>
              {/* ROUTE */}
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="bold" fontSize="lg">
                  {bus.from} → {bus.to}
                </Text>

                <Badge
                  colorScheme={bus.seatsLeft <= 3 ? "red" : "green"}
                  borderRadius="full"
                  px={3}
                >
                  {bus.seatsLeft} seats left
                </Badge>
              </HStack>

              {/* TIME */}
              <HStack
                justify="space-between"
                color="gray.500"
                fontSize="sm"
                mb={4}
              >
                <Text>Departs: {bus.departure}</Text>
                <Text>Arrives: {bus.arrival}</Text>
              </HStack>

              {/* PRICE + CTA */}
              <Flex align="center" justify="space-between">
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" color="gray.500">
                    Price
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="orange.600">
                    ₦{bus.price.toLocaleString()}
                  </Text>
                </VStack>

                <Button
                  colorScheme="orange"
                  size="md"
                  borderRadius="xl"
                >
                  Book Seat
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
