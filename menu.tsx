"use client";

import {
  Box,
  Text,
  VStack,
  Grid,
  GridItem,
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
    <Box>
      {/* Title */}
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Services
      </Text>

      {/* Scrollable Grid */}
      <Box overflowX="auto">
        <Grid
          templateColumns="repeat(8, minmax(72px, 1fr))"
          gap={6}
          minW="max-content"
        >
          {services.map((service, index) => (
            <GridItem key={index}>
              <VStack
                spacing={2}
                cursor="pointer"
                transition="0.2s ease"
                _hover={{ transform: "translateY(-2px)" }}
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
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  textAlign="center"
                  whiteSpace="nowrap"
                >
                  {service.label}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}


