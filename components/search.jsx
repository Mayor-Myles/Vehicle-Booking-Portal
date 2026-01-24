"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdLocationOn, MdCalendarToday, MdPersonOutline } from 'react-icons/md';

export default function SearchForm() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');
  const labelColor = useColorModeValue('gray.700', 'gray.300');
  const iconColor = useColorModeValue('brown.600', 'brown.300');
  const buttonColor = useColorModeValue('brown.600', 'brown.400');
  const buttonHover = useColorModeValue('brown.700', 'brown.500');

  return (
    <Box
      maxW="600px"
      mx="auto"
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      bg={bg}
      borderColor={border}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color={labelColor}>
        Find your next journey
      </Text>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel color={labelColor}>From City</FormLabel>
          <Flex align="center" gap={2}>
            <MdLocationOn color={iconColor} />
            <Input placeholder="Enter departure city" />
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel color={labelColor}>To City</FormLabel>
          <Flex align="center" gap={2}>
            <MdLocationOn color={iconColor} />
            <Input placeholder="Enter destination city" />
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel color={labelColor}>Date</FormLabel>
          <Flex align="center" gap={2}>
            <MdCalendarToday color={iconColor} />
            <Input type="date" defaultValue="2023-10-24" />
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel color={labelColor}>Guests</FormLabel>
          <Flex align="center" gap={2}>
            <MdPersonOutline color={iconColor} />
            <Select defaultValue="1 Adult">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </Select>
          </Flex>
        </FormControl>

        <Button
          bg={buttonColor}
          color="white"
          _hover={{ bg: buttonHover }}
          size="lg"
          width="full"
        >
          Search Buses
        </Button>
      </Stack>
    </Box>
  );
}
