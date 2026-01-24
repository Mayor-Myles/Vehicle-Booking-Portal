
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
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  MdOutlineLocationOn,
  MdOutlineCalendarToday,
  MdOutlinePersonOutline,
  MdSwapVert,
} from 'react-icons/md';

const cities = [
  'Ibadan',
  'Lagos',
  'Mowe',
  'Ibafo',
  'Kogi',
  'Ilorin',
  'Oshogbo',
];

export default function BusSearchForm() {
  const bg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('orange.200', 'gray.700');
  const inputBg = useColorModeValue('orange.50', 'gray.700');
  const iconColor = useColorModeValue('orange.500', 'orange.300');
  const labelColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box px={4} pt={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Find your next journey
      </Text>

      <Box
        bg={bg}
        borderRadius="2xl"
        borderWidth="1px"
        borderColor={cardBorder}
        p={5}
        boxShadow="md"
      >
        <Stack spacing={5}>
          {/* FROM CITY */}
          <FormControl>
            <FormLabel color={labelColor}>From City</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationOn size={24} color={iconColor} />
              </InputLeftElement>
              <Select
                bg={inputBg}
                pl={12}
                height="52px"
                borderRadius="lg"
              >
                <option value="">Select departure city</option>
                {cities.map(city => (
                  <option key={city}>{city}</option>
                ))}
              </Select>
            </InputGroup>
          </FormControl>

          {/* SWAP */}
          <Flex justify="center" mt={-2} mb={-2}>
            <IconButton
              aria-label="Swap cities"
              icon={<MdSwapVert size={26} />}
              variant="outline"
              colorScheme="orange"
              borderRadius="full"
            />
          </Flex>

          {/* TO CITY */}
          <FormControl>
            <FormLabel color={labelColor}>To City</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationOn size={24} color={iconColor} />
              </InputLeftElement>
              <Input
                bg={inputBg}
                pl={12}
                height="52px"
                borderRadius="lg"
                placeholder="Enter destination city"
              />
            </InputGroup>
          </FormControl>

          {/* DATE & GUESTS */}
          <SimpleGrid columns={2} spacing={4}>
            <FormControl>
              <FormLabel color={labelColor}>Date</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlineCalendarToday size={22} color={iconColor} />
                </InputLeftElement>
                <Input
                  type="date"
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel color={labelColor}>Guests</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlinePersonOutline size={24} color={iconColor} />
                </InputLeftElement>
                <Select
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
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
            mt={4}
            height="56px"
            borderRadius="xl"
            bg="orange.600"
            color="white"
            fontSize="lg"
            _hover={{ bg: 'orange.700' }}
            _active={{ transform: 'scale(0.98)' }}
          >
            Search Buses
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
