'use client';

import React from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue, VStack,useColorModeValue, } from '@chakra-ui/react';
import  Navbar from '@/components/navbar';
import Hero from "@/components/hero"
import Testimonial from "@/components/testimonial";
import ContactUs from "@/components/contactUs";
import SearchForm from "@/components/search";
import PopularRoutes from "@/components/popular";
import HowItWorks from "@/components/howItWorks";
import Features from "@/components/features";
import FAQ from "@/components/faq";






function App() {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  //const isMobile = useBreakpointValue({ base: true, md: false });

//const bg = useColorModeValue("gray.50","black");
  
  return (
    <ChakraProvider>      
      < Navbar />
      <Hero />
      <SearchForm />
      {/* 
      
      <PopularRoutes />
      <HowItWorks />
      <Features />
      <FAQ />
      <ContactUs /> */} 
    </ChakraProvider>
  );
}

export default App;
