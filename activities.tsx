
import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import {
  FiGift,
  FiPlusCircle,
  FiArrowUpRight,
  FiArrowDownLeft,
} from "react-icons/fi";

export default function Activity() {
  const transactions = [
    {
      title: "Reward",
      date: "15:22:55 • 2025-06-19",
      amount: "+149.87 USD",
      status: "received",
      icon: FiGift,
    },
    {
      title: "Deposit",
      date: "08:12:49 • 2025-06-16",
      amount: "-289.99 USD",
      status: "failed",
      icon: FiPlusCircle,
    },
    {
      title: "Sent",
      date: "11:03:22 • 2025-06-15",
      amount: "-52.00 USD",
      status: "sent",
      icon: FiArrowUpRight,
    },
    {
      title: "Received",
      date: "09:45:10 • 2025-06-14",
      amount: "+300.00 USD",
      status: "received",
      icon: FiArrowDownLeft,
    },
  ];

  return (
    <Box py={4}>
      <Flex justify="space-between" px={2} mb={2}>
        <Text fontWeight="bold" fontSize="lg">
          Activities
        </Text>
        <Text fontSize="sm" color="blue.500" cursor="pointer">
          See All
        </Text>
      </Flex>

      <VStack spacing={3} width="100%">
        {transactions.map((tx, index) => (
          <Flex
            key={index}
            bg="gray.100"
            borderRadius="xl"
            p={4}
            w="100%"
            align="center"
            justify="space-between"
          >
            {/* Left section */}
            <Flex align="center" gap={3}>
              <Flex
                bg="white"
                boxSize="45px"
                borderRadius="lg"
                align="center"
                justify="center"
              >
                <Icon as={tx.icon} boxSize={6} color="gray.700" />
              </Flex>

              <Box>
                <Text fontWeight="semibold">{tx.title}</Text>
                <Text fontSize="xs" color="gray.500">
                  {tx.date}
                </Text>
              </Box>
            </Flex>

            {/* Right section */}
            <Text
              fontWeight="bold"
              color={
                tx.status === "received"
                  ? "green.500"
                  : tx.status === "failed"
                  ? "red.500"
                  : "gray.700"
              }
            >
              {tx.amount}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
