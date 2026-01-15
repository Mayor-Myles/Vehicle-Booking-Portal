"use client";

import {
  Box,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FiPhone,
  FiWifi,
  FiPenTool,
  FiScissors,
  FiEdit3,
  FiMonitor,
  FiMessageSquare,
  FiGrid,
} from "react-icons/fi";

const services = [
  { label: "Airtime", icon: FiPhone },
  { label: "Data", icon: FiWifi },
  { label: "Graphics Design", icon: FiPenTool },
  { label: "Fashion", icon: FiScissors },
  { label: "Drawing Art", icon: FiEdit3 },
  { label: "Web Design", icon: FiMonitor },
  { label: "Bulk SMS", icon: FiMessageSquare },
  { label: "More", icon: FiGrid },
];

export default function ServicesMenu() {
  return (
    <Flex justify="center">
      {/* Title */}
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Services
      </Text>

      {/* Menu */}
      <Flex overflowX="auto" pb={2}>
        <HStack spacing={6}>
          {services.map((service, index) => (
            <VStack
              key={index}
              spacing={2}
              cursor="pointer"
              _hover={{ transform: "translateY(-2px)" }}
              transition="0.2s ease"
            >
              {/* Icon Circle */}
              <Flex
                w="56px"
                h="56px"
                borderRadius="full"
                bg="white"
                align="center"
                justify="center"
                boxShadow="sm"
              >
                <Icon
                  as={service.icon}
                  boxSize={6}
                  color="purple.500"
                />
              </Flex>

              {/* Label */}
              <Text fontSize="sm" fontWeight="medium" textAlign="center">
                {service.label}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
