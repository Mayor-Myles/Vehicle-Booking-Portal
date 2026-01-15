"use client";

import { Box, Text, HStack, VStack, Icon, Flex, useColorModeValue, } from "@chakra-ui/react";
import { FiBriefcase, FiActivity, FiCheckCircle } from "react-icons/fi";




const stats = [
  {
    title: "Total Projects",
    value: "24",
    change: "+4 this month",
    icon: FiBriefcase,
  },
  {
    title: "Active Projects",
    value: "6",
    change: "+2 ongoing",
    icon: FiActivity,
  },
  {
    title: "Completed Projects",
    value: "18",
    change: "+12%",
    icon: FiCheckCircle,
  },
];

export default function Stats() {

  const bg = useColorModeValue("white","black");
  
  return (
    <Flex justify="center" align="center" mx={3} overflowX="auto" pb={2} mt="5">
      <HStack spacing={4} minW="max-content">
        {stats.map((item, index) => (
          <Box
            key={index}
            bg={bg}
            borderRadius="2xl"
            boxShadow="sm"
            px={5}
            py={4}
            minW="200px"
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
              <Text fontSize="lg" fontWeight="bold">
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
