"use client";

import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Icon,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaApple, FaPlus } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Wallet() {
 
  const isMobile = useBreakpointValue({base:true,md:false});
    
  return (
    <HStack
      spacing={6}
      align="center"
      
    >
      {/* -------- QUOTE CARD -------- */}
      <Box
        bg="gray.900"
        color="white"
        p={5}
        rounded="xl"
        w="260px"
        boxShadow="lg"
        display={isMobile ? "none" : "block"}
      >
        <Text fontSize="lg" fontWeight="semibold">
          “Spend wisely, save smart.”
        </Text>
        <Text fontSize="sm" mt={2} opacity={0.8}>
          — Personal Finance Reminder
        </Text>
      </Box>

      {/* -------- WALLET CARD -------- */}
      <Box>
        {/* Top small card */}
        <Box
          bg="#F6C26B"
          roundedTop="2xl"
          roundedBottom="none"
          p={4}
          w={{base:"100%", md:"320px"}}
        >
          <HStack justify="space-between">
            <Avatar size="xs" bg="black" />
            <Text fontWeight="semibold">emilyvibes@gmail.com</Text>
          </HStack>
        </Box>

        {/* Main Wallet Card */}
        <Box
          bg="#8B6CFF"
          color="white"
          roundedBottom="2xl"
          p={5}
          w={{base:"100%", md:"320px"}}
          position="relative"
        >
          <Icon as={FaApple} boxSize={6} />

          <HStack justify="space-between" mt={3}>
            <Text fontWeight="semibold">09060421393</Text>
            <VStack spacing={0} align="flex-end">
              <Text fontSize="xs" opacity={0.7}>User ID</Text>
              <Text fontWeight="semibold">2011176535</Text>
            </VStack>
          </HStack>

          <VStack align="flex-start" mt={4} spacing={1}>
            <Text fontSize="xs" opacity={0.7}>Balance</Text>
            <Text fontSize="3xl" fontWeight="bold">
              $8,182.80
            </Text>
            <Text fontSize="xs" opacity={0.7}>Name</Text>
            <Text fontWeight="semibold">Paul Clement</Text>
          </VStack>

          {/* Add Card Button */}
          <HStack
            position="absolute"
            right="-20px"
            bottom="-18px"
            bg="white"
            rounded="full"
            px={2}
            py={1}
            boxShadow="md"
          >
            <Button
              size="sm"
              rounded="full"
              bg="black"
              color="white"
              leftIcon={<FaPlus />}
              _hover={{ bg: "gray.800" }}
            >
              Add Card
            </Button>
          </HStack>
        </Box>
      </Box>

      {/* -------- CALENDAR -------- */}
      <Box
        bg="white"
        rounded="xl"
        p={3}
        boxShadow="sm"
        display={isMobile ? "none" : "block"}
      >
        <Calendar />
      </Box>
    </HStack>
  );
}


