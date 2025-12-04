import { Box, Grid, Flex, Text, Icon } from "@chakra-ui/react";
import {
  FiSend,
  FiSettings,
  FiGrid,
  FiTrendingUp,
  FiPhone,
  FiDatabase,
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";

export default function QuickActionsMenu() {
  const menuItems = [
    { label: "Data", icon: FiDatabase },
    { label: "Airtime", icon: FiPhone },
    { label: "Hire Me", icon: FiUsers },
    { label: "Bulk SMS", icon: FiMessageSquare },
    { label: "Transfer", icon: FiSend },
    { label: "Settings", icon: FiSettings },
    { label: "More", icon: FiGrid },
  ];

  return (
    <Box p={4}>
      <Text fontWeight="bold" mb={4} fontSize="lg">
        Quick Actions
      </Text>

      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
      >
        {menuItems.map((item) => (
          <Flex
            key={item.label}
            direction="column"
            align="center"
            justify="center"
            bg="gray.200"
            borderRadius="xl"
            py={4}
            cursor="pointer"
            _hover={{ bg: "gray.300" }}
          >
            <Icon as={item.icon} boxSize={6} mb={2} color="gray.700" />
            <Text fontSize="sm" fontWeight="medium" color="gray.700">
              {item.label}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
