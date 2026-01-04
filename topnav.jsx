
"use client";

import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  Badge,
  Text,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FiMenu, FiBell, } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';

export const TopNav = ({ onMenuClick }) => {
  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="sm"
    >
         
        <Flex justify="space-between" align="center" px={4} py={3}>
        
          <Flex>
          <Avatar 
              size="md" 
              name="Clement Adekunle" 
              bg="purple.500" 
              color="white"
              fontSize="xs"
              src="https://imgcdn.stablediffusionweb.com/2024/10/21/53295b80-0406-4810-aa02-b423c302ecbd.jpg"
            />
          <VStack align="start" spacing={0}>
            <Text fontSize="xs" color="gray.600">
              Welcome,
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Clement Adekunle
            </Text>
          </VStack>
         </Flex>
          
          <HStack spacing={3}>
            <IconButton
              aria-label="Notifications"
              icon={<FiBell size="md" />}
              variant="ghost"
              size="lg"
              colorScheme="gray"
              color="gray.600"
            />
          </HStack>
        </Flex> 
        
      </Box>
    
  );
};
