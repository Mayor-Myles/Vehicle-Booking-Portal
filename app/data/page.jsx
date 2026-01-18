
"use client";

import {
  Box,
  Text,
  Flex,
  Grid,
  VStack,
  HStack,
  Button,
  Input,
  Badge,
  Switch,
} from "@chakra-ui/react";
import TopNavbar from "@/topnavnar";



const networks = [
  { name: "MTN", color: "#FACC15" },
  { name: "Airtel", color: "#9CA3AF" },
  { name: "Glo", color: "#9CA3AF" },
  { name: "9mobile", color: "#9CA3AF" },
];

const plans = [
  { size: "1.5GB", duration: "30 Days", price: "₦1,200" },
  { size: "2GB", duration: "Weekly", price: "₦600" },
  { size: "10GB", duration: "30 Days", price: "₦3,000" },
];

export default function DataAirtimePage() {
  return (
    <Box minH="100vh" py={6}>

      <TopNavbar />
      
      <Box maxW="480px" mx="auto" px={4}>
        {/* Select Network */}
        <Text fontWeight="bold" mb={3}>
          Select Network
        </Text>

        <HStack spacing={4} mb={6}>
          {networks.map((net, i) => (
            <VStack key={i} spacing={1}>
              <Flex
                w="72px"
                h="72px"
                bg={net.color}
                color="white"
                borderRadius="xl"
                align="center"
                justify="center"
                border={net.name === "MTN" ? "3px solid #3B82F6" : "none"}
              >
                
            <Text fontWeight="bold">{net.name}</Text>
              </Flex>
                      
            </VStack>
          ))}
        </HStack>

        {/* Recipient Number */}
        <Box p={4} borderRadius="2xl" mb={6} boxShadow="sm">
          <Text fontSize="sm" color="gray.500" mb={2}>
            RECIPIENT NUMBER
          </Text>
          <Input
            size="lg"
            fontWeight="bold"
            defaultValue="0803 456 7890"
          />
        </Box>

        {/* Data Plans*/}
        <Flex justify="space-between" mb={3}>
          <Text fontWeight="bold">Frequently Bought</Text>
          <Text color="purple.500" fontWeight="medium" cursor="pointer">
            See All
          </Text>
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
          {plans.map((plan, i) => (
            <Box
              key={i}
              bg="white"
              p={2}
              borderRadius="2xl"
              boxShadow="sm"
              border={plan.size === "1.5GB" ? "2px solid purple.600" : "none"}
            >
              <Text fontWeight="bold">{plan.size}</Text>
              <Text fontSize="sm" color="gray.500">
                {plan.duration}
              </Text>
              <Text
                mt={2}
                fontWeight="bold"
                color="purple.600"
                fontSize="lg"
              >
                {plan.price}
              </Text>
            </Box>
          ))}
        </Grid>

      
        {/* Transaction Summary */}
        <Box
          bg="purple.50"
          p={5}
          borderRadius="2xl"
          border="1px solid #BFDBFE"
          mb={6}
        >
          <Text
            fontWeight="bold"
            letterSpacing="widest"
            color="blue.600"
            mb={4}
          >
            TRANSACTION SUMMARY
          </Text>

          <VStack spacing={3} align="stretch">
            <Flex justify="space-between">
              <Text color="gray.600">Service</Text>
              <Text fontWeight="medium">MTN Data (Monthly 10GB)</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Phone Number</Text>
              <Text fontWeight="medium">0803 456 7890</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Plan Cost</Text>
              <Text fontWeight="medium">₦3,000.00</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Service Fee</Text>
              <Text fontWeight="medium">₦0.00</Text>
            </Flex>

            <Box h="1px" bg="purple.200" my={2} />

            <Flex justify="space-between" align="center">
              <Text fontWeight="bold">Total Amount</Text>
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                ₦3,000.00
              </Text>
            </Flex>

          
          </VStack>
        </Box>

        {/* Proceed */}
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontSize="sm" color="gray.500">
              TOTAL TO PAY
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              ₦3,000.00
            </Text>
          </Box>

          <Button
            size="lg"
            bg="purple.500"
            color="white"
            px={8}
            borderRadius="xl"
            _hover={{ bg: "#1D4ED8" }}
          >
            Proceed →
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
