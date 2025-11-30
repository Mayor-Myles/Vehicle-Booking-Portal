'use client';

import {
  Box,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  Badge,
} from '@chakra-ui/react';
import { FiBell, FiGift, FiCamera } from 'react-icons/fi';

export default function TopNav() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={4}
      py={2}
      bg="white"
      boxShadow="sm"
      borderRadius="md"
      w="100%"
    >
      {/* Left: QR Scanner */}
      <IconButton
        aria-label="Scan QR"
        icon={<FiCamera />}
        variant="ghost"
        size={isMobile ? 'md' : 'lg'}
      />

      {/* Center: Reward Button */}
      <Flex
        align="center"
        bg="green.500"
        color="white"
        px={4}
        py={2}
        borderRadius="full"
        gap={2}
        cursor="pointer"
        _hover={{ bg: 'green.600' }}
      >
        <FiGift />
        <Text fontWeight="medium">Reward</Text>
      </Flex>

      {/* Right: Notification Bell */}
      <Box position="relative">
        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          size={isMobile ? 'md' : 'lg'}
        />
        <Badge
          position="absolute"
          top="0"
          right="0"
          bg="red.500"
          borderRadius="full"
          boxSize="10px"
        />
      </Box>
    </Flex>
  );
}
