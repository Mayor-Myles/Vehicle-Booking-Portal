"use client";

import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Badge,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import TopNavbar from "@/topnavbar";
import BottomNavbar from "@/bottomNav";

const categories = ["All", "Fashion", "Website Developer" , "Graphics", "Drawing Art", "Bulk SMS" ]; 


export default function ExpertsMobileView() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box minH="100vh" bg={bg} px={3} py={4}>
    <TopNavbar />
      <Stack spacing={4} maxW="420px" mx="auto">
        {/* Search */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color={textMuted} />
          </InputLeftElement>
          <Input
            placeholder="Search..."
            bg={inputBg}
            
            _focus={{ borderColor: "purple.400" }}
          />
        </InputGroup>

        {/* Filters */}
        <Flex gap={2} overflowX="auto" pb={1}>
          {categories.map((category,i) => (
      
      <Button
            key={i}
            colorScheme="purple"
            borderRadius="full"
            size="sm"
            variant="outline"
            _hover={{bg:"purple.600"}}
            flexShrink={0}
          >
        {category}
      
          </Button>

      ))}

          
        </Flex>

        

        {/* Expert Card */}
        <Box
          bg={cardBg}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          mx="1em"
        >
          {/* Image */}
          <Box position="relative">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Expert"
              w="100%"
              h={{ base: "220px", sm: "260px" }}
              objectFit="cover"
            />

            <Badge
              position="absolute"
              top={3}
              right={3}
              colorScheme="green"
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
            >
              ● ONLINE
            </Badge>
          </Box>

          {/* Content */}
          <Stack spacing={3} p={4}>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight="bold" fontSize="md">
                  Julianne Veronica
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="semibold"
                  color="purple.400"
                >
                  CREATIVE DIRECTOR
                </Text>
              </Box>

              <Flex align="center" gap={1}>
                <Icon as={StarIcon} color="yellow.400" boxSize={4} />
                <Text fontWeight="bold" fontSize="sm">
                  4.9
                </Text>
              </Flex>
            </Flex>

            {/* Projects */}
            <Badge
              w="fit-content"
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
              colorScheme="gray.50"
              variant="subtle"
            >
              ✓ 45 Projects
            </Badge>

            {/* Actions */}
            <Flex gap={3} pt={2}>
              <Button
                variant="outline"
                borderRadius="sm"
                size="sm"
                w="40%"
              >
                Profile
              </Button>

              <Button
                colorScheme="purple"
                borderRadius="sm"
                size="sm"
                w="60%"
              >
                Hire Now
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Stack>
      <BottomNavbar />
    </Box>
  );
}
