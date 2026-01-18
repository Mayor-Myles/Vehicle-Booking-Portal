"use client";

import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FiPhone,
  FiWifi,
  FiScissors,
  FiPenTool,
  FiEdit3,
  FiMonitor,
  FiMessageSquare,
} from "react-icons/fi";

const services = [
  { title: "Airtime", icon: FiPhone },
  { title: "Data", icon: FiWifi },
  { title: "Fashion", icon: FiScissors },
  { title: "Graphics Design", icon: FiPenTool },
  { title: "Drawing Art", icon: FiEdit3 },
  { title: "Web Design", icon: FiMonitor },
  { title: "Bulk SMS", icon: FiMessageSquare },
];

export default function Services() {
  return (
    <Box py={{ base: 10, md: 16 }} >
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Section Header */}
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb={2}
        >
          Our Services
        </Text>

        <Text color="gray.600" mb={8} maxW="600px">
          Access professional services and essential digital utilities in one
          trusted platform.
        </Text>

        {/* Services Grid */}
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {services.map((service, index) => (
            <GridItem key={index}>
              <VStack
                
                p={3}
                borderRadius="2xl"
                boxShadow="md"
                spacing={4}
                cursor="pointer"
                transition="0.25s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "lg",
                }}
              >
                {/* Icon */}
                <Flex
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  bg="purple.100"
                  align="center"
                  justify="center"
                >
                  <Icon
                    as={service.icon}
                    boxSize={4}
                    color="purple.700"
                  />
                </Flex>

                {/* Title */}
                <Text fontSize="14px" fontWeight="semibold" textAlign="center">
                  {service.title}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

