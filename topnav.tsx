'use client';

import {
  Grid,
  GridItem,
  IconButton,
  Flex,
  Text,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiCamera, FiGift, FiBell } from 'react-icons/fi';

export default function TopNav() {
  const iconSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Grid
      templateColumns="3fr 1fr 1fr"
      alignItems="center"
      bg="brown.50"
      px={4}
      py={2}
      boxShadow="sm"
      borderRadius="md"
      ww="100%"
    >
      {/* Left: QR Scanner */}
      <GridItem>
        <IconButton
          aria-label="Scan QR"
          icon={<FiCamera />}
          variant="ghost"
          size={iconSize}
          color="brown.700"
        />
      </GridItem>

    

      {/* Center: Reward Button */}
      <GridItem>
        <Flex
          justify="center"
          align="center"
          bg="brown.500"
          color="white"
          px={4}
          py={2}
          borderRadius="full"
          gap={2}
          cursor="pointer"
          _hover={{ bg: 'brown.600' }}
        >
          <FiGift />
          <Text fontWeight="medium">Reward</Text>
        </Flex>
      </GridItem>

      {/* Right: Notification Bell */}
      <GridItem justifySelf="end" position="relative">
        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          size={iconSize}
          color="brown.700"
        />
        <Badge
          position="absolute"
          top="0"
          right="0"
          bg="red.500"
          borderRadius="full"
          boxSize="10px"
        />
      </GridItem>
    </Grid>
  );
}
