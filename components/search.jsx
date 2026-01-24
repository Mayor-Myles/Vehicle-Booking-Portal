"use client";

import { Box, Input, Button, SimpleGrid } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";

export default function SearchForm() {
  return (
    <Box mt={6} bg="white" p={6} borderRadius="md" color="black" boxShadow="md">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
        <Input placeholder="From" icon={<CiLocationOn />} />
        <Input placeholder="To" icon={<CiLocationOn />} />
        <Input type="date" placeholder="Date" />
        <Button colorScheme="orange">Search</Button>
      </SimpleGrid>
    </Box>
  );
}

