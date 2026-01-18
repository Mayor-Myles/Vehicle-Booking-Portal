"use client";

import {
  Box,
  Text,
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Box py={{ base: 12, md: 20 }} bg="gray.50">
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Header */}
        <VStack spacing={3} mb={10} textAlign="center">
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
            Contact Us
          </Text>
          <Text color="gray.600" maxW="600px">
            Have a question or need assistance? Reach out and our team will get
            back to you shortly.
          </Text>
        </VStack>

        {/* Form */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItem>
            <Input placeholder="Full Name" size="lg" bg="white" />
          </GridItem>

          <GridItem>
            <Input placeholder="Email Address" size="lg" bg="white" />
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Input placeholder="Subject" size="lg" bg="white" />
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Textarea
              placeholder="Your Message"
              size="lg"
              rows={5}
              bg="white"
            />
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }} textAlign="center">
            <Button
              size="lg"
              bg="#4B2E83"
              color="white"
              px={10}
              _hover={{ bg: "#3E256C" }}
            >
              Send Message
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

