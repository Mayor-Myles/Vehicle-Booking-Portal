
import { Box, Flex, Text, Icon, Button } from "@chakra-ui/react";
import { FiTrendingUp, FiPlus } from "react-icons/fi";

export default function Wallet() {
  return (
    <Box
      w="100%"
      maxW="360px"
      bgGradient="linear(to-r, purple.500, purple.600)"
      borderRadius="xl"
      p="6"
      color="white"
      position="relative"
      boxShadow="lg"
    >
      <Flex justify="space-between" align="center" mb="2">
        <Flex align="center" gap="2">
          <Icon as={FiTrendingUp} boxSize={4} />
          <Text fontSize="sm" opacity={0.9}>
            2.70% Today
          </Text>
        </Flex>

        <Text fontSize="sm" opacity={0.9} cursor="pointer">
          View all →
        </Text>
      </Flex>

      <Text fontSize="2xl" fontWeight="bold">
        $1,6795.25
      </Text>

      <Button
        position="absolute"
        bottom="-6"
        right="4"
        borderRadius="full"
        boxSize="50px"
        bg="white"
        shadow="xl"
        _hover={{ bg: "gray.100" }}
      >
        <Icon as={FiPlus} boxSize={6} color="purple.600" />
      </Button>
    </Box>
  );
}
