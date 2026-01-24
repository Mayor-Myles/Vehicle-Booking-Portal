"use client";

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero = () => {
  const bg = useColorModeValue("brown.50", "brown.800");
  const color = useColorModeValue("boack", "white");

  return (
    <Box bg={bg} minH="80vh" px={6} py={12}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
      >
        {/* Left Content */}
        <Stack spacing={6} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h1"
            size="md"
            fontWeight="bold"
            color={color}
            lineHeight="short"
          >
            Book Your Bus Journey <br /> With Ease
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            Find routes, compare fares, and reserve your seat instantly. Travel
            made simple, safe, and reliable.
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Button
              size="lg"
              color="white"
              bg="brown"
              _hover={{ bg: "brown.500" }}
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              colorScheme="orange"
              borderColor="brown.400"
              _hover={{ bg: "brown.100" }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>

        {/* Right Image */}
        <Box flex="1" mt={{ base: 10, md: 0 }} textAlign="center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKwjhpayuhoLMcgTgQRjiTxg8IOPCL8VN6SJqFwDNhlT0sv-QoQ3NjyRf&s=10"
            alt="Bus travel"
            borderRadius="lg"
            shadow="lg"
            maxH="400px"
            mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
