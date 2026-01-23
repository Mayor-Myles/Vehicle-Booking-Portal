
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
import TopNavbar from "@/topnavbar";
import BottomNav from "@/bottomNav";
import {useState,useEffect} from "react";





const networks = [
  { name: "MTN", color: "#FACC15" },
  { name: "Airtel", color: "red" },
  { name: "Glo", color: "seagreen" },
  { name: "9mobile", color: "mediumseagreen" },
];

const plans = [
  { size: "1.5GB", duration: "30 Days", price: "₦1,200" },
  { size: "2GB", duration: "Weekly", price: "₦600" },
  { size: "10GB", duration: "30 Days", price: "₦3,000" },
];

export default function DataAirtimePage() {
  
  const [networkSelected,setNetworkSelected] = useState(null);

  const [selectedPlan,setSelectedPlan] = useState(null);

  const [phoneNumber,setPhoneNumber] = useState("080xxxxxxxx");


  
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
                onClick={()=>setNetworkSelected(net.name)}
                w="72px"
                h="72px"
                bg={networkSelected === net.name ? net.color : "#9CA3AF"}
                color="white"
                borderRadius="xl"
                align="center"
                justify="center"
                border={net.name === "MTN" ? "3px solid purple.500" : "none"}
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
            size="md"
            fontWeight="bold"
            defaultValue={phoneNumber}
            variant="flushed"
            
          />
        </Box>

        {/* Data Plans*/}
        <Flex display={selectedPlan && "none"} justify="space-between" mb={3}>
          <Text fontWeight="bold">Data Plans</Text>
          
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
          {plans.map((plan, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="center"
              align="center"
              flexFlow="column wrap"
              p={2}
              borderRadius="2xl"
              boxShadow="lg"
              border={plan.size === "1.5GB" ? "2px solid purple.600" : "none"}
            onClick={()=>setSelectedPlan(plan)}
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
          p={5}
          borderRadius="2xl"
          border="2px solid"
          borderColor="purle.600"
          mb={6}
          display={selectedPlan ? "block" : "none"}
        >
          <Text
            fontWeight="bold"
            letterSpacing="widest"
            
            mb={4}
          >
            TRANSACTION SUMMARY
          </Text>

          <VStack spacing={3} align="stretch">
            <Flex justify="space-between">
              <Text color="gray.600">Service</Text>
              <Text fontWeight="medium"> {networkSelected} Data ({selectedPlan?.duration} {selectedPlan?.size})</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Phone Number</Text>
              <Text fontWeight="medium">{phoneNumber}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Plan Cost</Text>
              <Text fontWeight="medium">₦{selectedPlan?.price}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Service Fee</Text>
              <Text fontWeight="medium">₦0.00</Text>
            </Flex>

            <Box h="1px" bg="purple.600" my={2} />

            <Flex justify="space-between" align="center">
              <Text fontWeight="bold">Total Amount</Text>
              <Text fontSize="2xl" fontWeight="bold" color="putple.600">
                ₦{selectedPlan?.price}
              </Text>
            </Flex>

          
          </VStack>
        </Box>

        {/* Proceed */}
        <Flex justify="space-between" align="center" display={selectedPlan ? "block" : "none"}
        >
          <Box>
            <Text fontSize="sm" color="gray.500">
              TOTAL TO PAY
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              ₦{selectedPlan?.price}
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
      <BottomNav />
    </Box>
  );
}
