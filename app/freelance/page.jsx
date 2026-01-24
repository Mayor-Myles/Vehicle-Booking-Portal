
"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Avatar,
  Button,
  Badge,
  Divider,
  Grid,
  GridItem,
  useBreakpointValue,
  Container,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
import { FiGrid, FiUser, FiMail, FiBriefcase } from "react-icons/fi";

export default function Hire() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

  const categories = ["All Experts", "Fashion Design", "Styling"];

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header Section */}
      <Box bg="purple.600" px={4} py={3}>
        <Flex justify="space-between" align="center">
          <HStack spacing={3}>
            {isMobile && (
              <IconButton
                aria-label="Back"
                icon={<ArrowBackIcon />}
                variant="ghost"
                color="white"
                size="sm"
              />
            )}
            <Box>
              <Text fontSize="sm" color="purple.200" fontWeight="medium">
                Search experts...
              </Text>
              <Flex align="center">
                <SearchIcon color="white" fontSize="sm" mr={2} />
                <Text color="white" fontSize="lg" fontWeight="bold">
                  AllExperts
                </Text>
              </Flex>
            </Box>
          </HStack>
          
          <HStack spacing={2}>
            {!isMobile && (
              <>
                {categories.map((cat, index) => (
                  <Badge
                    key={cat}
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg={index === 0 ? "white" : "purple.500"}
                    color={index === 0 ? "purple.600" : "white"}
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    {cat}
                  </Badge>
                ))}
              </>
            )}
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Categories */}
      {isMobile && (
        <Box px={4} py={3} bg="white" borderBottom="1px solid" borderColor="gray.200">
          <HStack spacing={2} overflowX="auto" pb={2}>
            {categories.map((cat, index) => (
              <Badge
                key={cat}
                px={3}
                py={1}
                borderRadius="full"
                bg={index === 0 ? "purple.100" : "white"}
                color={index === 0 ? "purple.600" : "gray.600"}
                fontSize="xs"
                fontWeight="bold"
                border={index !== 0 ? "1px solid" : "none"}
                borderColor="gray.300"
                whiteSpace="nowrap"
              >
                {cat}
              </Badge>
            ))}
          </HStack>
        </Box>
      )}

      {/* Main Content */}
      <Container maxW="container.lg" px={4} py={6}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "300px 1fr",
            lg: "350px 1fr",
          }}
          gap={6}
        >
          {/* Left Column - Profile Card */}
          <GridItem>
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
            >
              {/* Profile Header */}
              <Box
                bg="purple.50"
                p={6}
                textAlign="center"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Avatar
                  size="2xl"
                  name="Julianne V."
                  src="/api/placeholder/150/150"
                  mb={4}
                  border="4px solid white"
                  boxShadow="md"
                />
                <Heading as="h1" size="lg" color="purple.700" mb={2}>
                  Julianne V.
                </Heading>
                <Text color="purple.600" fontSize="sm" fontWeight="medium" mb={4}>
                  CREATIVE DIRECTOR
                </Text>
                
                <HStack justify="center" spacing={4} mb={4}>
                  <VStack spacing={0}>
                    <Text fontSize="2xl" fontWeight="bold" color="purple.700">
                      45
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      Projects
                    </Text>
                  </VStack>
                  
                  <Divider orientation="vertical" height="40px" />
                  
                  <VStack spacing={0}>
                    <HStack spacing={0.5}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} color="yellow.400" boxSize={3} />
                      ))}
                    </HStack>
                    <Text fontSize="xs" color="gray.600">
                      4.9 Rating
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              {/* Profile Navigation */}
              <VStack spacing={0} align="stretch">
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  py={4}
                  px={6}
                  leftIcon={<FiUser />}
                  color="purple.600"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  borderRadius="none"
                  _hover={{ bg: "purple.50" }}
                >
                  Profile
                </Button>
                
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  py={4}
                  px={6}
                  leftIcon={<FiBriefcase />}
                  color="gray.600"
                  fontWeight="medium"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  borderRadius="none"
                  _hover={{ bg: "purple.50" }}
                >
                  Portfolio
                </Button>
                
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  py={4}
                  px={6}
                  leftIcon={<FiMail />}
                  color="gray.600"
                  fontWeight="medium"
                  borderRadius="none"
                  _hover={{ bg: "purple.50" }}
                >
                  Messages
                </Button>
              </VStack>

              {/* Hire Now Button */}
              <Box p={6}>
                <Button
                  w="full"
                  size="lg"
                  bg="purple.600"
                  color="white"
                  fontWeight="bold"
                  borderRadius="lg"
                  _hover={{ bg: "purple.700" }}
                  _active={{ bg: "purple.800" }}
                  py={6}
                  fontSize="md"
                >
                  Hire Now
                </Button>
              </Box>
            </Box>

            {/* Quick Stats - Desktop Only */}
            {!isMobile && (
              <Box
                mt={6}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                border="1px solid"
                borderColor="gray.200"
              >
                <Text fontSize="md" fontWeight="bold" color="purple.700" mb={4}>
                  Quick Stats
                </Text>
                
                <VStack spacing={3} align="stretch">
                  <Flex justify="space-between">
                    <Text color="gray.600">Experience</Text>
                    <Text fontWeight="semibold">8 years</Text>
                  </Flex>
                  
                  <Flex justify="space-between">
                    <Text color="gray.600">Response Time</Text>
                    <Text fontWeight="semibold">&lt; 2 hours</Text>
                  </Flex>
                  
                  <Flex justify="space-between">
                    <Text color="gray.600">Location</Text>
                    <Text fontWeight="semibold">New York, USA</Text>
                  </Flex>
                  
                  <Flex justify="space-between">
                    <Text color="gray.600">Languages</Text>
                    <Text fontWeight="semibold">English, French</Text>
                  </Flex>
                </VStack>
              </Box>
            )}
          </GridItem>

          {/* Right Column - Content */}
          <GridItem>
            {/* Projects Grid */}
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              p={6}
              mb={6}
              border="1px solid"
              borderColor="gray.200"
            >
              <Flex justify="space-between" align="center" mb={6}>
                <Heading as="h2" size="md" color="purple.700">
                  Recent Projects
                </Heading>
                <Button
                  variant="ghost"
                  color="purple.600"
                  size="sm"
                  rightIcon={<FiGrid />}
                >
                  View All
                </Button>
              </Flex>

              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={4}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Box
                    key={item}
                    aspectRatio="1/1"
                    borderRadius="lg"
                    bg="purple.100"
                    position="relative"
                    overflow="hidden"
                    _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
                  >
                    <Box
                      position="absolute"
                      top={2}
                      right={2}
                      bg="white"
                      borderRadius="full"
                      p={2}
                      boxShadow="sm"
                    >
                      <StarIcon color="purple.500" boxSize={3} />
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>

            {/* About Section */}
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              p={6}
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading as="h2" size="md" color="purple.700" mb={4}>
                About Julianne
              </Heading>
              
              <Text color="gray.600" lineHeight="tall" mb={4}>
                Creative Director with over 8 years of experience in fashion design and styling. 
                Specialized in luxury branding and editorial styling. Passionate about creating 
                innovative design solutions that blend aesthetics with functionality.
              </Text>
              
              <HStack spacing={4} flexWrap="wrap">
                <Badge px={3} py={1} borderRadius="full" bg="purple.100" color="purple.700">
                  Fashion Design
                </Badge>
                <Badge px={3} py={1} borderRadius="full" bg="purple.100" color="purple.700">
                  Styling
                </Badge>
                <Badge px={3} py={1} borderRadius="full" bg="purple.100" color="purple.700">
                  Branding
                </Badge>
                <Badge px={3} py={1} borderRadius="full" bg="purple.100" color="purple.700">
                  Editorial
                </Badge>
              </HStack>
            </Box>

            {/* Mobile Quick Stats */}
            {isMobile && (
              <Box
                mt={6}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                border="1px solid"
                borderColor="gray.200"
              >
                <Text fontSize="md" fontWeight="bold" color="purple.700" mb={4}>
                  Quick Stats
                </Text>
                
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <VStack spacing={1} align="center">
                    <Text fontSize="2xl" fontWeight="bold" color="purple.700">
                      8
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Years Experience
                    </Text>
                  </VStack>
                  
                  <VStack spacing={1} align="center">
                    <Text fontSize="2xl" fontWeight="bold" color="purple.700">
                      &lt;2h
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Response Time
                    </Text>
                  </VStack>
                  
                  <VStack spacing={1} align="center">
                    <Text fontSize="2xl" fontWeight="bold" color="purple.700">
                      98%
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Success Rate
                    </Text>
                  </VStack>
                  
                  <VStack spacing={1} align="center">
                    <Text fontSize="2xl" fontWeight="bold" color="purple.700">
                      2
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Languages
                    </Text>
                  </VStack>
                </Grid>
              </Box>
            )}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
