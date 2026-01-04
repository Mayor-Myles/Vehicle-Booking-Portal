
'use client';

import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Avatar,
  Badge,
  Divider,
  Flex,
} from "@chakra-ui/react";
import {
  FiHome,
  FiShoppingCart,
  FiSmartphone,
  FiMessageSquare,
  FiHelpCircle,
  FiMail,
  FiUser,
  FiChevronLeft,
  FiSearch,
} from "react-icons/fi";

export default function Sidebar({isOpen,onOpen,Onclose}) {
  return (
    <Box
      w="280px"
      h="100vh"
      bgGradient="linear(to-b, purple.500, purple.600)"
      color="white"
      p={5}
    >
      {/* Header */}
      <HStack justify="space-between" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Mylezic
        </Text>
        <Icon as={FiChevronLeft} boxSize={5} />
      </HStack>

      {/* Search */}
      <InputGroup mb={6}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="whiteAlpha.700" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          variant="filled"
          bg="whiteAlpha.200"
          _placeholder={{ color: "whiteAlpha.700" }}
          _hover={{ bg: "whiteAlpha.300" }}
          _focus={{ bg: "whiteAlpha.300" }}
        />
      </InputGroup>

      <Divider opacity={0.3} mb={6} />

      {/* Menu Items */}
      <VStack align="stretch" spacing={3}>
        <MenuItem icon={FiHome} label="Home" />
        <MenuItem icon={FiShoppingCart} label="Buy Data" />
        <MenuItem icon={FiSmartphone} label="Buy Airtime" />

        <MenuItem icon={FiMessageSquare} label="Bulk SMS">
          <Badge
            bg="whiteAlpha.300"
            color="white"
            rounded="full"
            px={2}
            fontSize="xs"
          >
            3
          </Badge>
        </MenuItem>

        <MenuItem icon={FiHelpCircle} label="Support" />
        <MenuItem icon={FiMail} label="Contact Us" />
        <MenuItem icon={FiUser} label="Profile" />
      </VStack>

      <Flex flex="1" />

      <Divider opacity={0.3} my={5} />

      {/* Profile Footer */}
      <HStack>
        <Avatar name="John Doe" bg="whiteAlpha.700" color="black" />
        <Box>
          <Text fontWeight="semibold">John Doe</Text>
          <HStack spacing={2}>
            <Box boxSize={2} bg="green.300" rounded="full" />
            <Text fontSize="sm">Online</Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}

/* Reusable Menu Item */
function MenuItem({ icon, label, children }) {
  return (
    <HStack
      bg="whiteAlpha.200"
      _hover={{ bg: "whiteAlpha.300" }}
      px={3}
      py={3}
      rounded="lg"
      justify="space-between"
    >
      <HStack spacing={3}>
        <Icon as={icon} />
        <Text>{label}</Text>
      </HStack>
      {children}
    </HStack>
  );
}
