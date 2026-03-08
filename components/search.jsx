
"use client";
import {useState} from "react";
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
import {useRouter} from "next/navigation";

const cities = [
  'Ibadan',
  'Lagos',
  'Mowe',
  'Ibafo',
  'Kogi',
  'Ilorin',
  'Oshogbo',
];

export default function SearchForm() {
  const bg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('orange.200', 'gray.700');
  const inputBg = useColorModeValue('orange.50', 'gray.700');
  const iconColor = useColorModeValue('orange.500', 'orange.300');
  const labelColor = useColorModeValue('gray.700', 'gray.300');
  const [loading,setLoading] = useState(false);
  const [formData,setFormData] = useState({

    location:null,
    destination:null,
    date:null,
    passengers:null,
    
  });
  const router = useRouter();

  const updateFormData = (name,value) => {

  setFormData((prev) => ({...prev,name:value}));

  }
    
  const search = () => {

 setLoading(true);
    
    setTimeout(()=> {

      router.push({
        "pathname": "/bus-listing",
        
      query:{ location,destination,date,passengers}
      })

    },3000);

    
  }
  
  return (
    <Flex align="center" justify="center" direction="column" px={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
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
                onChange={(e)=>updateFormData("location",e.target.value)}
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
              <Select
                bg={inputBg}
                pl={12}
                height="52px"
                borderRadius="lg"
                onChange={(e)=>updateFormData("destination",e.target.value)}
      
              >
                <option value="">Select Destination City</option>
                {cities.map(city => (
                  <option key={city}>{city}</option>
                ))}
              </Select>
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
                  onChange={(e)=>updateFormData("date",e.target.value)}
      
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel color={labelColor}>Passengers</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlinePersonOutline size={24} color={iconColor} />
                </InputLeftElement>
                <Select
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
                  onChange={(e)=>updateFormData("passengers",e.target.value)}
      
                >
                  <option value="1">1 </option> 
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                </Select>
              </InputGroup>
            </FormControl>
          </SimpleGrid>

          {/* CTA */}
          <Button
            isLoading={loading}
            onClick={search}
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
    </Flex>
  );
}
