import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Icon,
  Heading
} from '@chakra-ui/react';
import { FiLock, FiBell, FiWifi, FiPhoneCall, FiPlus } from 'react-icons/fi';
import { TbScan } from "react-icons/tb";
import { CiGift } from "react-icons/ci";


const TopNav = () => {
  return (
    <Box 
      p={4} 
      bg="white" 
      borderRadius="lg" 
      boxShadow="sm" 
      maxW="md" 
      mx="auto"
      fontFamily="body"
    >
      {/* Navigation Bar */}
      <Flex justify="space-between" align="center" mb={8}>
        <IconButton
          icon={<TbScan />}
          variant="ghost"
          aria-label="Scan"
          fontSize="30px"
          color="gray.700"
        />
        <Button justify="center" align="center" variant="outline" fontWeight="medium" color="green">
         <CiGift/> Reward
        </Button>
        <IconButton
          icon={<FiBell />}
          variant="ghost"
          aria-label="Notifications"
          fontSize="30px"
          color="gray.700"
        />
      </Flex>

      {/* Balance Section */}
      <VStack spacing={2} mb={10} align="center">
        <Text fontSize="md" color="gray.600">
          Available Balance
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="gray.800">
          N 11,3466
        </Text>
      </VStack>

      {/* Function Buttons */}
      <HStack spacing={4}>
        <Button
          leftIcon={<Icon as={FiWifi} boxSize={5} />}
          variant="outline"
          width="full"
          justifyContent="flex-start"
          py={6}
          borderRadius="md"
          borderColor="gray.300"
          color="gray.700"
        >
          Buy Data
        </Button>
        <Button
          leftIcon={<Icon as={FiPhoneCall} boxSize={5} />}
          variant="outline"
          width="full"
          justifyContent="flex-start"
          py={6}
          borderRadius="md"
          borderColor="gray.300"
          color="gray.700"
        >
          Buy Airtime
        </Button>
      </HStack>
        <Button
          leftIcon={<Icon as={FiPlus} boxSize={5} />}
          bg="brown"
          color="white"
          width="full"
          justifyContent="center"
          py={6}
          borderRadius="md"
          m="2"
          _hover={{ bg: "blue.700" }}
        >
          Add Money
        </Button>
      
    </Box>
  );
};

export default TopNav;
