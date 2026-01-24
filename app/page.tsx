'use client';

import React from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue, VStack,useColorModeValue, } from '@chakra-ui/react';
import { TopNav } from '@/topnav';
import { Sidebar } from '@/sidebar';
import Wallet from '@/wallet';
import Stats from '@/stats';
import Menu from '@/menu';
import BottomNav from "@/bottomNav";
import HeroSection from "@/hero"
import Services from "@/services"
import TopNavbar from "@/topnavbar"
import Home from "@/home";
import Projects from "@/projects";
import ContactUs from "@/contact";
import Footer from "@/footer";



function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

const bg = useColorModeValue("gray.50","black");
  
  return (
    <ChakraProvider>

      
      < TopNavbar />
      <HeroSection />
      <Services />
      <Projects />
      <ContactUs />
      <Footer />
      
      {/*  <Box  minH="100vh"  ml={{"base":2,"md":280}}>
              {!isMobile && <Sidebar isOpen={true} onClose={onClose}   />}
          {isMobile && <Sidebar isOpen={isOpen} onClose={onClose}  />}
        
     
        <TopNav openSidebar={onOpen} />
          <Wallet />
          <Stats/>  
          <Menu />
          <BottomNav />
      </Box>*/}
      
    </ChakraProvider>
  );
}

export default App;
