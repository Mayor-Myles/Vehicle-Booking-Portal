"use client";

import { Box, Text, HStack, VStack, Flex, Avatar, } from "@chakra-ui/react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FiCreditCard } from "react-icons/fi";


export default function Wallet() {

  
  return (

<Flex mt="4" mx={{base:"1em", md:"8em", lg:"14em", xl:"18em" }} justifyContent="center">
     
    <Box
      h="150px"
      borderRadius="2xl"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-r, #5A4FCF, #3F3A8F)"
      color="white"
      boxShadow="xl"
      w={{base:"100%"}}
      
      
      
    >
      {/* Decorative curve */}
      <Box
        position="absolute"
        top="-40px"
        right="-60px"
        w="220px"
        h="220px"
        bg="rgba(0,0,0,0.15)"
        borderRadius="full"
      />

      <VStack align="flex-start" spacing={6} p={6}>
        {/* Card Number */}
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="xs" opacity={0.7} letterSpacing="widest">
            USER ID
          </Text>
          <HStack spacing={2}>
            <Text letterSpacing="3px">09060421356</Text>
             <Text fontWeight="bold" fontSize="lg">
              
            </Text>
          </HStack>
        </VStack>

        {/* Bottom Details */}
        <Flex w="100%" justify="space-between" align="flex-end">
          <HStack spacing={10}>
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="xs" opacity={0.7}>
                BALANCE
              </Text>
              <Text fontWeight="semibold">5,525</Text>
            </VStack>

            <VStack align="flex-start" spacing={0}>
              <Text fontSize="xs" opacity={0.7}>
                BONUS
              </Text>
              <Text fontWeight="semibold">345</Text>
            </VStack>
          </HStack>

          
      
        </Flex>
      </VStack>
    </Box>

  
    
</Flex>
  );
}
