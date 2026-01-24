import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { CiDeliveryTruck} from "react-icons/ci";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("brown.100", "brown.700");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} px={4} boxShadow="md" position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <CiDeliveryTruck size="24" />
          <Text ml={2} fontWeight="bold" color={color}>
            BusBooking
          </Text>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} gap={6}>
          <Button variant="ghost" color={color}>
            Home
          </Button>
          <Button variant="ghost" color={color}>
            Routes
          </Button>
          <Button variant="ghost" color={color}>
            Bookings
          </Button>
          <Button variant="ghost" color={color}>
            Contact
          </Button>
        </Flex>

        <Flex alignItems="center" gap={2}>
          <IconButton
            aria-label="Toggle Theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="ghost"
          />
        </Flex>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Button variant="ghost" onClick={onClose}>
                Home
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Routes
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Bookings
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Contact
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
