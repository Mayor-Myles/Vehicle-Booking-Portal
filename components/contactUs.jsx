"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import { CiMail, CiUser, CiChat1 } from "react-icons/ci";

export default function ContactUs() {
  return (
    <Box py={16} px={6} maxW="7xl" mx="auto">
      <Heading textAlign="center" mb={10}>
        Contact Us
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack spacing={4}>
          <Input placeholder="Your Name" leftIcon={<CiUser />} />
          <Input placeholder="Email Address" type="email" leftIcon={<CiMail />} />
          <Textarea placeholder="Your Message" rows={5} />
          <Button
            w="full"
            bg="#C04000"
            color="white"
            _hover={{ bg: "#a83500" }}
            leftIcon={<CiChat1 />}
          >
            Send Message
          </Button>
        </VStack>

        <Box>
          <Heading size="md" mb={4}>
            Get in Touch
          </Heading>
          <Box color="gray.600" fontSize="sm">
            We’d love to hear from you. Whether you have a question about
            bookings, pricing, or anything else, our team is ready to answer.
            <br />
            <br />
            📍 Lagos, Nigeria  
            <br />
            📧 support@busbooking.com  
            <br />
            📞 +234 800 000 0000
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
