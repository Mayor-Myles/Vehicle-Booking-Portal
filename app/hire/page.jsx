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

export default function ExpertsMobileView() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box minH="100vh" bg={bg} px={3} py={4}>
      <Stack spacing={4} maxW="420px" mx="auto">
        {/* Search */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color={textMuted} />
          </InputLeftElement>
          <Input
            placeholder="Search experts..."
            bg={inputBg}
            borderRadius="full"
            _focus={{ borderColor: "purple.400" }}
          />
        </InputGroup>

        {/* Filters */}
        <Flex gap={2} overflowX="auto" pb={1}>
          <Button
            colorScheme="purple"
            borderRadius="full"
            size="sm"
            flexShrink={0}
          >
            All Experts
          </Button>

          <Button
            variant="outline"
            borderRadius="full"
            size="sm"
            flexShrink={0}
          >
            Fashion Design
          </Button>

          <Button
            variant="outline"
            borderRadius="full"
            size="sm"
            flexShrink={0}
          >
            Styling
          </Button>
        </Flex>

        {/* Expert Card */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="md"
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
                  Julianne V.
                </Text>
                <Text
                  fontSize="sm"
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
              colorScheme="purple"
              variant="subtle"
            >
              ✓ 45 Projects
            </Badge>

            {/* Actions */}
            <Flex gap={3} pt={2}>
              <Button
                variant="outline"
                borderRadius="xl"
                size="sm"
                w="40%"
              >
                Profile
              </Button>

              <Button
                colorScheme="purple"
                borderRadius="xl"
                size="sm"
                w="60%"
              >
                Hire Now
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
