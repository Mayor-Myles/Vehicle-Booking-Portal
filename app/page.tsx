'use client';

import React, {useEffect} from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue, VStack,useColorModeValue,useToast, } from '@chakra-ui/react';
import  Navbar from '@/components/navbar';
import Hero from "@/components/hero"
import Testimonial from "@/components/testimonial";
import ContactUs from "@/components/contactUs";
import SearchForm from "@/components/search";
import PopularRoutes from "@/components/popular";
import HowItWorks from "@/components/howItWorks";
import Features from "@/components/features";
import FAQ from "@/components/faq";
import axios from "axios";
import {useAtom} from "jotai";
import {userData} from "@/state";




export default function App() {
  
  
  return (
    <ChakraProvider>      
      < Navbar />
      <Hero />
      <SearchForm />
      <PopularRoutes />
      <HowItWorks />
      <FAQ />
      <ContactUs />
      {/* 
      
      
      
      
       */} 
    </ChakraProvider>
  );
}


