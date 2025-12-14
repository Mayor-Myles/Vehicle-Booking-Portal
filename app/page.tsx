'use client';

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaHome, FaMoneyBill, FaHistory, FaUser } from 'react-icons/fa';
import TopNav from '@/topnav';
 import Wallet from '@/wallet';
import Menu from '@/menu';
import Activity from '@/activities';
import Advert from '@/adverts';
import BottomNav from "@/bottomNav";
import Sidebar from "@/sidebar";



export default function DashboardPage() {
  
  
  return (
   
    <Flex direction="column" justifyContent="center">
      
      <TopNav/>

    <Flex
        w="100%"
        justify="center"
        align="flex-start"
        mt="4.5em"         // pushes below TopNav
        px={{ base: 4, md: 0 }}
      
      >
      <Wallet/>
    
    </Flex>
      
<Advert />

      
      <Menu/>
      <Activity/>
      <BottomNav/>
    

      
      <Sidebar/>
    </Flex>
  );
}
