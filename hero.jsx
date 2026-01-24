"use client";

import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <Box
      bgGradient="linear(to-r, #C04000, #FF7043)"
      color="white"
      py={{ base: 12, md: 24 }}
      textAlign="center"
    >
      <Stack spacing={6} maxW="3xl" mx="auto">
        <Heading fontSize={{ base: "3xl", md: "5xl" }}>Book Your Bus Tickets Instantly</Heading>
        <Text fontSize={{ base: "md", md: "xl" }}>Fast, convenient, and reliable bus booking at your fingertips.</Text>
        <SearchForm />
      </Stack>
    </Box>
  );
}
