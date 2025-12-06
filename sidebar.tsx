// components/SidebarDrawer.jsx
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Flex,
  Box,
  Text,
  Icon,
  Divider,
  Avatar,
  InputGroup,
  Input,
  InputLeftElement,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiWifi,
  FiSmartphone,
  FiMail,
  FiMessageCircle,
  FiUser,
  FiSearch,
} from "react-icons/fi";
import Link from "next/link";

const menuItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Buy Data", icon: FiWifi, href: "/data" },
  { label: "Buy Airtime", icon: FiSmartphone, href: "/airtime" },
  { label: "Bulk SMS", icon: FiMail, href: "/bulk-sms" },
  { label: "Support", icon: FiMessageCircle, href: "/support" },
  { label: "Contact", icon: FiMessageCircle, href: "/contact" },
  { label: "Profile", icon: FiUser, href: "/profile" },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Button to open drawer */}
      <Button
        leftIcon={<FiMenu />}
        onClick={onOpen}
        variant="ghost"
        color="purple.600"
      >
        Menu
      </Button>

      {/* Drawer Sidebar */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent
          bg="linear-gradient(180deg, #7B2FF7 0%, #9D4EDD 50%, #C77DFF 100%)"
          color="white"
        >
          <DrawerCloseButton color="white" />

          <DrawerHeader borderBottomWidth="0" mt="4">
            <Text fontSize="xl" fontWeight="bold">
              Menu
            </Text>
          </DrawerHeader>

          <DrawerBody>

            {/* 🔎 Search */}
            <InputGroup mb="6">
              <InputLeftElement>
                <Icon as={FiSearch} color="whiteAlpha.800" />
              </InputLeftElement>
              <Input
                placeholder="Search..."
                bg="whiteAlpha.200"
                border="none"
                color="white"
                _placeholder={{ color: "whiteAlpha.700" }}
                _focus={{ bg: "whiteAlpha.300" }}
              />
            </InputGroup>

            {/* 📌 Menu Items */}
            <VStack align="stretch" spacing="3" mb="6">
              {menuItems.map((item) => (
                <Link href={item.href} key={item.label} passHref legacyBehavior>
                  <Flex
                    as="a"
                    align="center"
                    p="3"
                    borderRadius="md"
                    cursor="pointer"
                    _hover={{ bg: "whiteAlpha.300" }}
                  >
                    <Icon as={item.icon} boxSize={5} mr="3" />
                    <Text>{item.label}</Text>
                  </Flex>
                </Link>
              ))}
            </VStack>

            <Divider borderColor="whiteAlpha.400" mb="5" />

            {/* 👤 User Section */}
            <Flex align="center" mt="auto" gap="3" mb="6">
              <Avatar name="John Doe" />
              <Box>
                <Text fontWeight="semibold">John Doe</Text>
                <Flex align="center" gap="2">
                  <Box
                    w="10px"
                    h="10px"
                    bg="green.300"
                    borderRadius="full"
                    boxShadow="0 0 6px green"
                  />
                  <Text fontSize="sm">Online</Text>
                </Flex>
              </Box>
            </Flex>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
