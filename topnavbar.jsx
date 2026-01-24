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
  useColorModeValue,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import { CiMenuFries, CiLight, CiDark } from "react-icons/ci";
import {userState} from "@/state";
import {useRouter} from "next/navigation";
import {useAtom} from "jotai";


export default function TopNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const brandColor = "purple.400"; // deep purple
   const bg = useColorModeValue("white","black");
const {colorMode, toggleColorMode} = useColorMode();
const router = useRouter();
  const[user,setUser] = useAtom(userState);
     
  return (
    <>
      {/* Navbar */}
      <Box
        position="sticky"
        top="0"
        zIndex="1000"
         boxShadow="sm"
        borderColor="gray.200"
        bg={bg}
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
          <Text onClick={()=>router.push("/")} fontSize="lg" fontWeight="bold" color={brandColor}>
            Mylezic
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
          {
          user.isAuthenticated ? (

            <Box p={2} border="2px solid gray">
            <Avatar
      name={user.name}
      src={user.gender === "male"? "https://i.pinimg.com/564x/b3/e5/db/b3e5db5a3bf1399f74500a6209462794.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB_1EHdjgjcvq0AK52i0YlenrCIctpJJ74A&usqp=CAU" }
      size="md"
    />
            </Box>      
              ) :
           (
            <HStack spacing={3}>

           <IconButton size="lg" onClick={toggleColorMode} icon={colorMode ==="light" ? <CiDark size="1.7em" /> : <CiLight size="1.7em" />} />
            
            <Button
              onClick={()=>router.push("/login")}
              size="sm"
              variant="outline"
              borderColor="purple.600"
               >
              Sign In
            </Button>

            <Button
              onClick={()=>router.push("/register")}
              size="sm"
              bg={brandColor}
              color="white"
              _hover={{ bg: "purple.600" }}
              display={{ base: "none", md: "inline-flex" }}
            >
              Get Started
            </Button>
              )

              }

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open Menu"
              icon={<CiMenuFries />}
              variant="ghost"
              fontSize="20px"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              bgGradient="linear(to-r, purple.400, purple.500)"
              color="white"
              _hover={{bg:"purple.600"}}
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
            Mylezic
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
