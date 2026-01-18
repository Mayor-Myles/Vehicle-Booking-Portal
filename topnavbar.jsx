"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export default function TopNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const brandColor = "#4B2E83"; // deep purple

  return (
    <>
      {/* Navbar */}
      <Box
        position="sticky"
        top="0"
        zIndex="1000"
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          h="64px"
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <Text fontSize="lg" fontWeight="bold" color={brandColor}>
            MyLezic
          </Text>

          {/* Desktop Menu */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <Text cursor="pointer" fontWeight="medium">
              Services
            </Text>
            <Text cursor="pointer" fontWeight="medium">
              Find Talent
            </Text>
            <Text cursor="pointer" fontWeight="medium">
              How it Works
            </Text>
            <Text cursor="pointer" fontWeight="medium">
              Contact
            </Text>
          </HStack>

          {/* Actions */}
          <HStack spacing={3}>
            <Button
              size="sm"
              variant="outline"
              borderColor="gray.300"
              display={{ base: "none", md: "inline-flex" }}
            >
              Sign In
            </Button>

            <Button
              size="sm"
              bg={brandColor}
              color="white"
              _hover={{ bg: "#3E256C" }}
              display={{ base: "none", md: "inline-flex" }}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open Menu"
              icon={<FiMenu />}
              variant="ghost"
              fontSize="20px"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight="bold" color={brandColor}>
            MyLezic
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <Text cursor="pointer">Services</Text>
              <Text cursor="pointer">Find Talent</Text>
              <Text cursor="pointer">How it Works</Text>
              <Text cursor="pointer">Contact</Text>

              <Button variant="outline" mt={4}>
                Sign In
              </Button>

              <Button bg={brandColor} color="white" _hover={{ bg: "#3E256C" }}>
                Get Started
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
