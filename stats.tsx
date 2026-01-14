"use client";

import { Box, Text, HStack, VStack, Icon, Flex } from "@chakra-ui/react";
import { FiBriefcase, FiActivity, FiCheckCircle } from "react-icons/fi";

const stats = [
  {
    title: "Total Engagements",
    value: "24",
    change: "+4 this month",
    icon: FiBriefcase,
  },
  {
    title: "Active Contracts",
    value: "6",
    change: "+2 ongoing",
    icon: FiActivity,
  },
  {
    title: "Completed Engagements",
    value: "18",
    change: "+12%",
    icon: FiCheckCircle,
  },
];

export default function Stats() {
  return (
    <Flex overflowX="auto" pb={2}>
      <HStack spacing={4} minW="max-content">
        {stats.map((item, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="2xl"
            boxShadow="sm"
            px={5}
            py={4}
            minW="220px"
          >
            <VStack align="flex-start" spacing={3}>
              {/* Top */}
              <HStack justify="space-between" w="100%">
                <Text fontSize="sm" color="gray.500" fontWeight="medium">
                  {item.title}
                </Text>
                <Icon as={item.icon} boxSize={5} color="purple.500" />
              </HStack>

              {/* Value */}
              <Text fontSize="2xl" fontWeight="bold">
                {item.value}
              </Text>

              {/* Change */}
              <Text fontSize="sm" color="green.500" fontWeight="medium">
                {item.change}
              </Text>
            </VStack>
          </Box>
        ))}
      </HStack>
    </Flex>
  );
}
