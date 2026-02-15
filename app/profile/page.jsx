"use client";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  useColorModeValue,
  Icon,
  VStack,
  HStack,
  Badge,
  useToast,
} from "@chakra-ui/react";
import {
  MdOutlinePerson,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineAccountBalanceWallet,
  MdOutlineHistory,
} from "react-icons/md";
import Navbar from "@/components/navbar";
import { supabase } from "@/lib/supabaseClient";
import {useEffect,useState} from "react";
import SearchForm from "@/components/search";
import HowItWorks from "@/components/howItWorks";
import FAQ from "@/components/faq";
import ContactUs from "@/components/contactUs";
import {useRouter,useSearchParams} from "next/navigation";
import {useAtom} from "jotai";
import  {userData} from "@/state";
import axios from "axios";

export default function Profile() {
 
  const routes = {
    history: [
      { id: 1, route: "Lagos → Ibadan", date: "Oct 24, 2023", status: "Completed" },
      { id: 2, route: "Ibadan → Ilorin", date: "Nov 02, 2023", status: "Completed" },
      { id: 3, route: "Lagos → Oshogbo", date: "Dec 10, 2023", status: "Pending" },
    ],
  };
  
  //const searchParams = useSearchParams();
  //const id = searchParams.get("id");//to identify logged in user
  //const [users,setUsers] = useState(null); 
  const bg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("orange.200", "gray.700");
  const mutedText = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("orange.200", "orange.300");
  const router = useRouter();
  const url = "/api/backend/auth/verifyToken";
    const [user,setUser] = useAtom(userData);
const toast = useToast();

  
  useEffect(() => {
      
  const checkAuth = async () =>  {

    toast.closeAll();
    
    try{
    const jwt = localStorage.getItem("token");
alert(jwt);
      
      if (!jwt) {
  router.replace("/login");
  return;
}
    const res = await axios.post(url,{   
   "jwt":jwt,
    });
      
     const response = res.data;
    
    if(response.status === "error"){
 router.replace("/login");
      
    }
    }catch(e){

toast({
      title: "Failed",
      description: e.response.data.message+". Try again! " || e.message,
      status: "error",
      position: "top",
    });

    }

    

  }//checkAuth
    
  checkAuth();  
  
    
  }, [router,toast]);
  
if(!user) {
  return null;

}
  

  return (
   <>
   <Navbar />
    <Box px={{ base: 4, md: 8 }} py={6} maxW="7xl" mx="auto">
      
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
      
           {/* WALLET */}
        <Box
          bgGradient="linear(to-r,#b97a51,#8B4513)"
          borderWidth="1px"
          borderColor={cardBorder}
          borderRadius="2xl"
          p={6}
        >
          <Heading color="white" size="md" mb={4}>
            Wallet 
          </Heading>

          <Flex align="center" justify="space-between">
            <HStack>
              <Icon
                as={MdOutlineAccountBalanceWallet}
                boxSize={8}
                color={iconColor}
              />
              <VStack align="start" spacing={0}>
                <Text fontSize="sm" color={mutedText}>
                  Available Balance
                </Text>
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  ₦{user.balance.toLocaleString()}
                </Text>
              </VStack>
            </HStack>
          </Flex>
        </Box>
        
        {/* USER DETAILS */}
        <Box
          bg={bg}
          borderWidth="1px"
          borderColor={cardBorder}
          borderRadius="2xl"
          p={6}
        >
          <Heading size="md" mb={4}>
            Personal Information
          </Heading>

          <Stack spacing={4}>
            <HStack>
              <Icon as={MdOutlinePerson} boxSize={5} color={iconColor} />
              <Text fontWeight="medium">
                {user.fullname}
              </Text>
            </HStack>

            <HStack>
              <Icon as={MdOutlineEmail} boxSize={5} color={iconColor} />
              <Text>{user.email}</Text>
            </HStack>

            <HStack>
              <Icon as={MdOutlinePhone} boxSize={5} color={iconColor} />
              <Text>{user.phone_number}</Text>
            </HStack>
          </Stack>
        </Box>

     <SearchForm />

        {/* HISTORY */}
        <Box
          bg={bg}
          borderWidth="1px"
          borderColor={cardBorder}
          borderRadius="2xl"
          p={6}
        >
          <Heading size="md" mb={4}>
            Booking History
          </Heading>

          <Stack spacing={4}>
            {routes.history.map(item => (
              <Box key={item.id}>
                <HStack justify="space-between">
                  <Box>
                    <Text fontWeight="medium">{item.route}</Text>
                    <Text fontSize="sm" color={mutedText}>
                      {item.date}
                    </Text>
                  </Box>
                  <Badge
                    colorScheme={item.status === "Completed" ? "green" : "orange"}
                  >
                    {item.status}
                  </Badge>
                </HStack>
                <Divider mt={3} />
              </Box>
            ))}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
     <HowItWorks/>
     <FAQ/>
     <ContactUs/>
   </>
  );
}
