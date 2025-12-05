import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsAward } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

export default function Advert() {
  return (
    <Flex
      bg="#EFE6FF"                // light purple background
      p={4}
      borderRadius="lg"
      align="center"
      justify="space-between"
      w="100%"
    >
      {/* Left section with icon + text */}
      <Flex align="center" gap={3}>
        <Flex
          bg="white"
          boxSize="40px"
          borderRadius="full"
          align="center"
          justify="center"
        >
          <Icon as={BsAward} fontSize={22} color="purple.600" />
        </Flex>

        <Box>
          <Text fontWeight="bold" fontSize="md" color="black">
            Become an Agent
          </Text>
          <Text fontSize="sm" color="gray.600">
            Get 50% off every transaction
          </Text>
        </Box>
      </Flex>

      {/* Right arrow */}
      <Flex
        bg="white"
        boxSize="36px"
        borderRadius="full"
        align="center"
        justify="center"
      >
        <Icon as={FiChevronRight} fontSize={22} color="purple.600" />
      </Flex>
    </Flex>
  );
}
