
"use client";

import {
  Box,
  Stack,
  Text,
  Input,
  Button,
  Image,
  Divider,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import TopNavbar from "@/topnavbar";


export default function Login() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.400");

  return (
    <>
    <TopNavbar/>
    <Box
      minH={{md:"100vh"}}
      bg={bg}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      mt={{base:"3em",md:0}}
    >
      
      <Box
        w="100%"
        maxW="420px"
        bg={cardBg}
        borderRadius="2xl"
        boxShadow="sm"
        p={{ base: 6, sm: 8 }}
      >
        
        <Flex justify="center" mb={6}>
          <Text fontSize="lg" fontWeight="bold" color="purple.500">
          
          </Text>
           
        </Flex>

        
        {/* Title */}
        <Stack spacing={1} mb={6} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Login to your Account
          </Text>
          <Text fontSize="sm" color={muted}>
            Welcome back, please enter your details
          </Text>
        </Stack>

        {/* Form */}
        <Stack spacing={4}>
          <Input
            placeholder="Email"
            type="email"
            size="lg"
            borderRadius="xl"
            _focus={{ borderColor: "purple.400" }}
          />

          <Input
            placeholder="Password"
            type="password"
            size="lg"
            borderRadius="xl"
            _focus={{ borderColor: "purple.400" }}
          />

          <Button
            size="lg"
            colorScheme="purple"
            borderRadius="xl"
          >
            Sign in
          </Button>
        </Stack>

        {/* Divider */}
        <Flex align="center" my={6}>
          
          <Text px={3} fontSize="sm" color={muted}>
            Or sign in with
          </Text>
          
        </Flex>

        {/* Social Login */}
        <Flex gap={4} justify="center">
          <IconButton
            aria-label="Sign in with Google"
            icon={<FaGoogle color="orange" />}
            variant="outline"
            borderRadius="xl"
            size="lg"
          />
          <IconButton
            aria-label="Sign in with Facebook"
            icon={<FaFacebookF color="dodgerblue" />}
            variant="outline"
            borderRadius="xl"
            size="lg"
          />
          <IconButton
            aria-label="Sign in with Twitter"
            icon={<FaTwitter />}
            variant="outline"
            borderRadius="xl"
            size="lg"
          />
        </Flex>
      </Box>
    </Box>
    </>
  );
}
