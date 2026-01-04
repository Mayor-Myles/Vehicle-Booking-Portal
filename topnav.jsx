
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
import { SearchIcon, BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';
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
      {/* Mobile Layout - Exactly like screenshot */}
      <Box display={{ base: 'block', md: 'none' }}>
        {/* First Row: Welcome and User Info */}
        <Flex justify="space-between" align="center" px={4} py={3}>
          <VStack align="start" spacing={0}>
            <Text fontSize="xs" color="gray.600">
              Welcome.
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Clement Adekunle
            </Text>
          </VStack>
          
          <HStack spacing={3}>
            <IconButton
              aria-label="Notifications"
              icon={<BellIcon />}
              variant="ghost"
              size="sm"
              colorScheme="gray"
              color="gray.600"
            />
            <Avatar 
              size="sm" 
              name="Clement Adekunle" 
              bg="purple.500" 
              color="white"
              fontSize="xs"
            />
          </HStack>
        </Flex>

        <Divider />

        {/* Second Row: Balance and Phone */}
        <Flex justify="space-between" align="center" px={4} py={3}>
          <HStack spacing={4}>
            <Text fontSize="2xl" fontWeight="bold" color="purple.600">
              N350
            </Text>
            <Text fontSize="sm" color="gray.600">
              07014443165
            </Text>
          </HStack>
          
          <HStack spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="green.600">
              N1,6795.25
            </Text>
            <IconButton
              aria-label="Add"
              icon={<Box fontSize="lg">+</Box>}
              variant="outline"
              colorScheme="purple"
              size="sm"
              width="30px"
              height="30px"
              borderRadius="full"
            />
          </HStack>
        </Flex>
      </Box>

      {/* Desktop Layout */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Flex align="center" justify="space-between" px={6} py={4}>
          {/* Left: Logo and Menu Button */}
          <HStack spacing={6}>
            <IconButton
              aria-label="Open menu"
              icon={<FiMenu />}
              onClick={onMenuClick}
              variant="ghost"
              size="md"
              color="gray.600"
            />
            <Text fontSize="2xl" fontWeight="bold" color="purple.600">
              Mylezic
            </Text>
          </HStack>

          {/* Center: Search Input */}
          <Box flex="1" maxW="500px" mx={8}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input 
                placeholder="Search..." 
                bg="gray.50" 
                borderRadius="full"
                fontSize="md"
                height="45px"
                _placeholder={{ color: 'gray.400' }}
                _focus={{
                  borderColor: 'purple.400',
                  boxShadow: '0 0 0 1px purple.400',
                }}
              />
            </InputGroup>
          </Box>

          {/* Right: User Profile and Notifications */}
          <HStack spacing={6}>
            <IconButton
              aria-label="Notifications"
              icon={<BellIcon />}
              variant="ghost"
              size="md"
              color="gray.600"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                bg: 'red.500',
                borderRadius: 'full',
              }}
            />
            
            <HStack spacing={4}>
              <VStack spacing={0} align="end">
                <Text fontSize="sm" fontWeight="bold" color="gray.800">
                  Clement Adekunle
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Agent ID: #A78945
                </Text>
              </VStack>
              
              <HStack spacing={2}>
                <Avatar 
                  size="md" 
                  name="Clement Adekunle" 
                  bg="purple.500" 
                  color="white"
                  icon={<BsPersonCircle fontSize="1.5rem" />}
                />
                <ChevronDownIcon color="gray.500" />
              </HStack>
            </HStack>
          </HStack>
        </Flex>

        {/* Desktop Balance Bar */}
        <Flex 
          bg="purple.50" 
          px={6} 
          py={3} 
          borderTop="1px" 
          borderColor="purple.100"
          justify="space-between"
          align="center"
        >
          <HStack spacing={6}>
            <VStack align="start" spacing={0}>
              <Text fontSize="xs" color="purple.600" fontWeight="medium">
                Available Balance
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="purple.600">
                N1,6795.25
              </Text>
            </VStack>
            
            <VStack align="start" spacing={0}>
              <Text fontSize="xs" color="gray.600" fontWeight="medium">
                Phone Number
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="gray.800">
                07014443165
              </Text>
            </VStack>
          </HStack>

          <HStack spacing={4}>
            <IconButton
              aria-label="Add funds"
              icon={<Box fontSize="lg" fontWeight="bold">+</Box>}
              variant="outline"
              colorScheme="purple"
              size="md"
              width="45px"
              height="45px"
              borderRadius="full"
            />
            <Badge 
              colorScheme="green" 
              fontSize="sm" 
              px={3} 
              py={1}
              borderRadius="full"
            >
              ● Online
            </Badge>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
