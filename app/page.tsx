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
  const [user,setUserData] = useAtom(userData);
  const url = "/api/backend/user/getUserData";
  const toast = useToast();

    
useEffect(()=>{

  const getUserData = async () => {

    toast.closeAll();
    
  try {
    
    const response = await axios.post(url,{});

    const result = response.data;
    if (result.status === "error") {
      throw new Error(result.message || "Data fetch failed");
    }
    setUserData(result.data);
    
  }catch (error) {
  let message = "Something went wrong";

  if (axios.isAxiosError(error)) {
    message =
      error.response?.data?.message || error.message;
  } 

  toast({
      title: "Data Fetching Error",
      description: message,
      status: "error",
      position: "top",
    });
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


