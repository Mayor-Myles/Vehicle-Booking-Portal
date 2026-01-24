
"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { MdLocationOn, MdCalendarToday, MdPersonOutline } from 'react-icons/md';

export default function SearchForm() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');
  const labelColor = useColorModeValue('gray.600', 'gray.300');
  const iconColor = useColorModeValue('brown.500', 'brown.300');
  const inputBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box
      maxW="720px"
      mx="auto"
      p={{ base: 5, md: 8 }}
      borderWidth={1}
      borderRadius="xl"
      boxShadow="lg"
      bg={bg}
      borderColor={border}
    >
      {/* Header */}
      <Stack spacing={1} mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Find your next journey
        </Text>
        <Text fontSize="sm" color={labelColor}>
          Search and book bus tickets easily
        </Text>
      </Stack>

      <Stack spacing={5}>
        {/* From / To */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl>
            <FormLabel color={labelColor}>From</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdLocationOn color={iconColor} />
              </InputLeftElement>
              <Input
                bg={inputBg}
                placeholder="Departure city"
                _focus={{ borderColor: 'brown.500' }}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel color={labelColor}>To</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdLocationOn color={iconColor} />
              </InputLeftElement>
              <Input
                bg={inputBg}
                placeholder="Destination city"
                _focus={{ borderColor: 'brown.500' }}
              />
            </InputGroup>
          </FormControl>
        </SimpleGrid>

        {/* Date & Guests */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl>
            <FormLabel color={labelColor}>Travel Date</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdCalendarToday color={iconColor} />
              </InputLeftElement>
              <Input
                type="date"
                bg={inputBg}
                _focus={{ borderColor: 'brown.500' }}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel color={labelColor}>Passengers</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdPersonOutline color={iconColor} />
              </InputLeftElement>
              <Select
                bg={inputBg}
                pl={10}
                _focus={{ borderColor: 'brown.500' }}
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </Select>
            </InputGroup>
          </FormControl>
        </SimpleGrid>

        {/* CTA */}
        <Button
          size="lg"
          mt={4}
          bgGradient="linear(to-r, brown.500, brown.600)"
          color="white"
          _hover={{
            bgGradient: 'linear(to-r, brown.600, brown.700)',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          }}
          _active={{ transform: 'scale(0.98)' }}
        >
          Search Buses
        </Button>
      </Stack>
    </Box>
  );
}
