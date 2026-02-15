'use client';

import React, {useEffect} from 'react';
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
import axios from "axios";
import {useAtom} from "jotai";
import {userData} from "@/state";




function App() {
  const [user,setUserData] = useAtom(userData);
  const url = "/api/backend/user/getUserData";

useEffect(()=>{

  const getUserData = async () => {

  try {
    
    const response = await axios.get(url);

    const result = response.data;

    setUserData(result.data);
    
  }catch(error){
    
alert(error.response.data.message || error.message);
  }

  }//get user data

  getUserData();

},[]);

  
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

export default App;
