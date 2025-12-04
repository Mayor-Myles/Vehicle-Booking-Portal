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



export default function DashboardPage() {
  return (
    <>
      
      <TopNav/>

    <Flex
        w="100%"
        justify="center"
        align="flex-start"
        mt="5em"         // pushes below TopNav
        px={{ base: 4, md: 0 }}
      direction="column"
      >
      <Wallet/>
    <Menu/>
    </Flex>

      

    </>
  );
}
