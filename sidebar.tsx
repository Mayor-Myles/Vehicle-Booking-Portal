
'use client';

import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Badge,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Flex,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiShoppingCart,
  FiSmartphone,
  FiMessageSquare,
  FiHelpCircle,
  FiMail,
  FiUser,
  FiMenu,
  FiSearch,
  FiChevronLeft,
} from 'react-icons/fi';

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [activeItem, setActiveItem] = useState('home');
  
  // Responsive sidebar behavior
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarWidth = isMobile ? (isOpen ? '250px' : '0') : '270px';
  
  // Menu items
  const menuItems = [
    { id: 'home', label: 'Home', icon: React.createElement(FiHome), isActive: activeItem === 'home' },
    { id: 'buy-data', label: 'Buy Data', icon: React.createElement(FiShoppingCart), isActive: activeItem === 'buy-data' },
    { id: 'buy-airtime', label: 'Buy Airtime', icon: React.createElement(FiSmartphone), isActive: activeItem === 'buy-airtime' },
    { id: 'bulk-sms', label: 'Bulk SMS', icon: React.createElement(FiMessageSquare), count: 3, isActive: activeItem === 'bulk-sms' },
    { id: 'support', label: 'Support', icon: React.createElement(FiHelpCircle), isActive: activeItem === 'support' },
    { id: 'contact', label: 'Contact Us', icon: React.createElement(FiMail), isActive: activeItem === 'contact' },
    { id: 'profile', label: 'Profile', icon: React.createElement(FiUser), isActive: activeItem === 'profile' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isOpen ? React.createElement(FiChevronLeft) : React.createElement(FiMenu)}
          onClick={onToggle}
          position="fixed"
          top="4"
          right="4"
          zIndex="modal"
          bgGradient="linear(to-r, purple.300, purple.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, purple.600, purple.700)' }}
          size="md"
          borderRadius="lg"
        />
      )}

      {/* Sidebar */}
      <Box
        position={'fixed'}
        left="0"
        top="0"
        h="100vh"
        w={sidebarWidth}
        bgGradient="linear(to-r, purple.500, purple.600)"
        color="white"
        boxShadow="xl"
        transition="all 0.3s ease"
        zIndex="9999"
        overflowY="auto"
        overflowX="hidden"
        mr="3em"
      >
        {/* Logo and Search Section */}
        <VStack spacing={6} p={6} align="stretch">
          {/* Logo */}
          <HStack justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="tight">
              Mylezic
            </Text>
            {isMobile && isOpen && (
              <IconButton
                aria-label="Close Sidebar"
                icon={React.createElement(FiChevronLeft)}
                onClick={onToggle}
                variant="ghost"
                color="white"
                _hover={{ bg: 'purple.600' }}
                size="sm"
              />
            )}
          </HStack>

          {/* Search */}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiSearch color="white" />
            </InputLeftElement>
            <Input
              placeholder="Search..."
              bg="rgba(255, 255, 255, 0.15)"
              border="none"
              color="white"
              _placeholder={{ color: 'whiteAlpha.700' }}
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
              _focus={{ bg: 'rgba(255, 255, 255, 0.2)', boxShadow: 'outline' }}
            />
          </InputGroup>
        </VStack>

        <Divider borderColor="whiteAlpha.300" />

        {/* Menu Items */}
        <Stack spacing={1} p={4}>
          {menuItems.map((item) => (
            <Flex
              key={item.id}
              align="center"
              p={3}
              borderRadius="lg"
              cursor="pointer"
              bg={item.isActive ? 'whiteAlpha.200' : 'transparent'}
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={() => setActiveItem(item.id)}
              transition="all 0.2s"
            >
              <Box fontSize="lg" mr={3}>
                {item.icon}
              </Box>
              <Text fontWeight="medium" flex={1}>
                {item.label}
              </Text>
              {item.count && (
                <Badge
                  colorScheme="whiteAlpha"
                  bg="whiteAlpha.300"
                  color="white"
                  borderRadius="full"
                  px={2}
                >
                  {item.count}
                </Badge>
              )}
            </Flex>
          ))}
        </Stack>

        <Divider borderColor="whiteAlpha.300" my={4} />

        {/* User Profile Section */}
        <Box p={6}>
          <HStack spacing={3}>
            <Avatar
              size="md"
              name="John Doe"
              src="https://bit.ly/dan-abramov"
              border="2px solid white"
            />
            <Box>
              <Text fontWeight="bold" fontSize="sm">
                John Doe
              </Text>
              <HStack spacing={1} align="center">
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg="green.300"
                  boxShadow="0 0 8px rgba(72, 187, 120, 0.6)"
                />
                <Text fontSize="xs" color="whiteAlpha.800">
                  Online
                </Text>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </Box>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
          zIndex="overlay"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;
