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
  useToast,
} from "@chakra-ui/react";
import TopNavbar from "@/topnavbar";
import BottomNav from "@/bottomNav";
import { useState } from "react";

const networks = [
  { name: "MTN", color: "#FACC15" },
  { name: "Airtel", color: "red" },
  { name: "Glo", color: "seagreen" },
  { name: "_9mobile", color: "mediumseagreen" },
];

export const airtimeAmounts = [
  100,
  200,
  500,
  1000,
  2000,
  5000,
];


export default function BuyAirtime() {
  const [networkSelected, setNetworkSelected] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const toast = useToast();

  const handleProceed = () => {
    if (!networkSelected || !phoneNumber || !amount) {
     toast.closeAll();
      toast({
        title: "Incomplete details",
        description: "Please select network, enter phone number and amount",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setShowSummary(true);
  };

  return (
    <Box minH="100vh" py={6}>
      <TopNavbar />

      <Box pt={4} maxW="480px" mx="auto" px={4}>
        {/* Select Network */}
        <Text fontWeight="bold" mb={3}>
          Select Network
        </Text>

        <HStack spacing={4} mb={6}>
          {networks.map((net, i) => (
            <VStack key={i} spacing={1}>
              <Flex
                onClick={() => setNetworkSelected(net.name)}
                w="70px"
                h="70px"
                bg={networkSelected === net.name ? net.color : "#9CA3AF"}
                color="white"
                borderRadius="xl"
                align="center"
                justify="center"
              >
                <Text fontSize="14px" fontWeight="bold">
                  {net.name}
                </Text>
              </Flex>
            </VStack>
          ))}
        </HStack>

        {/* Recipient Number */}
        {!showSummary && (
          <Flex p={4} borderRadius="2xl" mb={6} boxShadow="sm">
            <Text fontSize="sm" color="gray.500" mb={2}>
              RECIPIENT NUMBER
            </Text>
            <Input
              size="md"
              fontWeight="bold"
              variant="flushed"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
              
          
            <Text fontSize="sm" color="gray.500" mb={2}>
              AMOUNT
            </Text>
            <Input
              size="md"
              fontWeight="bold"
              variant="flushed"
              placeholder="₦0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          
          </Flex>
        )}

    

        {/* Airtime Amount */}
{!showSummary && (
  <>
    <Text fontWeight="bold" mb={3}>
      Select Amount
    </Text>

    <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
      {airtimeAmounts.map((value) => (
        <Box
          key={value}
          p={3}
          borderRadius="sm"
          boxShadow="lg"
          textAlign="center"
          cursor="pointer"
          border={amount == value ? "2px solid purple.600" : "none"}
          onClick={() => setAmount(value)}
        >
          <Text fontWeight="bold" fontSize="lg">
            ₦{value}
          </Text>
        </Box>
      ))}
    </Grid>

    
  </>
)}


        {/* Transaction Summary */}
        {showSummary && (
          <Box
            p={5}
            borderRadius="2xl"
            border="2px solid"
            borderColor="purple.600"
            mb={6}
          >
            <Text fontWeight="bold" letterSpacing="widest" mb={4}>
              TRANSACTION SUMMARY
            </Text>

            <VStack spacing={3} align="stretch">
              <Flex justify="space-between">
                <Text color="gray.600">Service</Text>
                <Text fontWeight="medium">
                  {networkSelected} Airtime
                </Text>
              </Flex>

              <Flex justify="space-between">
                <Text color="gray.600">Phone Number</Text>
                <Text fontWeight="medium">{phoneNumber}</Text>
              </Flex>

              <Flex justify="space-between">
                <Text color="gray.600">Amount</Text>
                <Text fontWeight="medium">₦{amount}</Text>
              </Flex>

              <Flex justify="space-between">
                <Text color="gray.600">Service Fee</Text>
                <Text fontWeight="medium">₦0.00</Text>
              </Flex>

              <Box h="1px" bg="purple.600" my={2} />

              <Flex justify="space-between" align="center">
                <Text fontWeight="bold">Total Amount</Text>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="purple.600"
                >
                  ₦{amount}
                </Text>
              </Flex>
            </VStack>
          </Box>
        )}

        {/* Actions */}
        <Flex justify="space-between" align="center">
          {!showSummary ? (
            <Button
              size="lg"
              bg="purple.500"
              color="white"
              w="100%"
              borderRadius="xl"
              _hover={{ bg: "purple.400" }}
              onClick={handleProceed}
            >
              Proceed →
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                bg="purple.500"
                color="white"
                px={8}
                borderRadius="xl"
              >
                Pay →
              </Button>

              <Button
                ml={6}
                color="gray.50"
                bg="gray.50"
                onClick={() => setShowSummary(false)}
              >
                Cancel
              </Button>
            </>
          )}
        </Flex>
      </Box>

      <BottomNav />
    </Box>
  );
}
