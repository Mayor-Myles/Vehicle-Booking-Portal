"use client";

import {
  Box,
  Text,
  VStack,
  Grid,
  GridItem,
  Flex,
  useColorModeValue,
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

  const bg= useColorModeValue("white","black");

const color = useColorModeValue("black","white");
  
  
  return (
    <Box mx={{base:2,md:"10",lg:"15",xl:"20"}}>

      
      {/* Title */}
      <Text fontSize="xs" fontWeight="bold" mb={4}>
        Services
      </Text>

    
      
        <Grid
          templateColumns={{base:"repeat(3,1fr)" , md:"repeat(6,1fr)"}}
          gap={3}
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
                  bg={bg}
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
                  color={color}
                >
                  {service.label}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      
    </Box>
  );
}


