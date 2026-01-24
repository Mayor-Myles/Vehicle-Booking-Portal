

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
  useToast,
} from "@chakra-ui/react";
import TopNavbar from "@/topnavbar";
import BottomNav from "@/bottomNav";
import {useState,useEffect} from "react";
import {useAtom} from "jotai";
import {plansState} from "@/state";




const networks = [
  { name: "MTN", color: "#FACC15" },
  { name: "Airtel", color: "red" },
  { name: "Glo", color: "seagreen" },
  { name: "_9mobile", color: "mediumseagreen" },
];




export default function BuyData() {
  
  const [networkSelected,setNetworkSelected] = useState(null);

  const [selectedPlan,setSelectedPlan] = useState(null);

  const [phoneNumber,setPhoneNumber] = useState(null);

const [plans,setPlans] = useAtom(plansState);

const toast = useToast();

const popUp = (title,message,type) => {

  if(!phoneNumber){
    
   toast.closeAll(); 
    
  setSelectedPlan(null);
    
  toast({
      title: title,
      description: message,
      status: type,
      duration: 3000,
      isClosable: true,
      position:"top",
    });

  }

  return null;
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
                onClick={()=>setNetworkSelected(net.name)}
                w="70px"
                h="70px"
                bg={networkSelected === net.name ? net.color : "#9CA3AF"}
                color="white"
                borderRadius="xl"
                align="center"
                justify="center"
                border={net.name === "MTN" ? "3px solid purple.500" : "none"}
              >
                
            <Text fontSize="14px" fontWeight="bold">{net.name}</Text>
              
              </Flex>
                      
            </VStack>
          ))}
        </HStack>

        {/* Recipient Number */}
        <Box display={selectedPlan?.size ? "none" : "block" } p={4} borderRadius="2xl" mb={6} boxShadow="sm">
          <Text fontSize="sm" color="gray.500" mb={2}>
            RECIPIENT NUMBER
          </Text>
          <Input
            size="md"
            fontWeight="bold"
            defaultValue={phoneNumber}
            variant="flushed"
            onChange={(e)=>setPhoneNumber(e.target.value)}
            required="required"
          />
        </Box>

        {/* Data Plans*/}
        <Flex justify="space-between" mb={3} display={selectedPlan ? "none" : "flex"} >
          <Text fontWeight="bold">Data Plans</Text>          
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}  >
          {(plans[networkSelected] || []).map((plan, i) => (
            <Box
              key={i}
              display={selectedPlan?.size ? "none" : "flex"}
             
              justifyContent="center"
              align="center"
              flexFlow="column wrap"
              p={2}
              borderRadius="2xl"
              boxShadow="lg"
              border={plan.size === "1.5GB" ? "2px solid purple.600" : "none"}
              onClick={()=> {setSelectedPlan(plan); popUp("Heads Up!","Enter recipient phone number!","warning");}}
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
              <Text fontWeight="medium">{selectedPlan?.price}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Service Fee</Text>
              <Text fontWeight="medium">₦0.00</Text>
            </Flex>

            <Box h="1px" bg="purple.600" my={2} />

            <Flex justify="space-between" align="center">
              <Text fontWeight="bold">Total Amount</Text>
              <Text fontSize="2xl" fontWeight="bold" color="putple.600">
                {selectedPlan?.price}
              </Text>
            </Flex>

          
          </VStack>
        </Box>

        {/* Proceed */}
        <Flex justify="space-between" align="center" display={selectedPlan ? "inline-block" : "none"}
        >
          
          <Button
            size="lg"
            bg="purple.500"
            color="white"
            px={8}
            borderRadius="xl"
            _hover={{ bg: "purple.100" }}
          >
            Proceed →
          </Button>

          <Button ml={10} color="black" onClick={()=>setSelectedPlan(null)}  bg="gray.50" size="lg">Cancel</Button>
        </Flex>
      </Box>
      <BottomNav />
    </Box>
  );
}
