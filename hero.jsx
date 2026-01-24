"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUserPlus, FiWifi } from "react-icons/fi";
import {useRouter} from "next/navigation";
import {useState} from "react";
import { useState } from "react";




export default function HeroSection() {
  const primary = "#4B2E83"; // deep purple
  const secondary = "#6B46C1";

const [loading, setLoading] = useState({
  hire: false,
  data: false,
});
  const router = useRouter();

function handleHireClick() { 
  
  setTimeout(() => {
  setLoading({hire: true,
  data: false,}); 
  },500)

  function handleDataClick() { 
  
  setTimeout(() => {
    setLoading({hire: false,
  data: true,});
  },500)


}
  
  return (
    <Box py={{ base: 10, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* Text Content */}
        <Stack spacing={6} flex="1">
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="short"
          >
            Hire Experts &{" "}
            <Text as="span" color={secondary}>
              Top-up Instantly
            </Text>
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            maxW="520px"
          >
            The all-in-one marketplace for professional services and essential
            digital utilities.
          </Text>

          {/* Buttons */}
          <Stack
            spacing={4}
            direction={{ base: "column", sm: "row" }}
            pt={2}
          >
            <Button
              isLoading={loading.hire}
              size="lg"
              bg={primary}
              color="white"
              leftIcon={<Icon as={FiUserPlus} />}
              _hover={{ bg: secondary }}
              borderRadius="xl"
              onClick={()=>{router.push("/hire?category=all"); handleHireClick();}}
            >
              Find Talent
            </Button>

            <Button
              isLoading={isLoading}
              size="lg"
              variant="outline"
              borderColor="gray.300"
              leftIcon={<Icon as={FiWifi} />}
              borderRadius="xl"
              onClick={()=>{router.push("/data"); handleDataClick();}}
            >
              Buy Data & Airtime
            </Button>
          </Stack>
        </Stack>

        {/* Image */}
        <Box flex="1" w="100%" textAlign="center">
          <Image
            src="hero.png" 
            alt="Hire professionals"
            maxW="412px"
          mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
}

