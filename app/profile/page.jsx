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
  const [user,setUserData] = useAtom(userData);
const toast = useToast();
const [txt,setTxt] = useState(null);
  
  useEffect(() => {
      
  const checkAuth = async () =>  {
const url = "/api/backend/auth/verifyToken";
  
    toast.closeAll();
    
    try{
    const jwt = localStorage.getItem("token");

      
      if (!jwt) {
  router.push("/login");
  return;
}

      
    const res = await axios.post(url,{   
   "jwt":jwt,
    });
      
     const result = res.data;

      setTxt(result);
      alert(result.status);
      
    if(result.status === "error"){
 router.replace("/login");
      
    }
      
    }catch(error){

let message ="Error while requesting from server";
      
  if (axios.isAxiosError(error)) {
    message =
      error.response?.data?.message || error.message;
  }
toast({
      title: "Failed",
      description: message+" Try again! " || e.message,
      status: "error",
      position: "top",
    });

    }

    

  }//checkAuth



  const getUserData = async () => {
      
    const url = "/api/backend/user/getUserData";

    toast.closeAll();
    
  try {
    const jwt = localStorage.getItem("token");
    const response = await axios.post(url,{
      "jwt":jwt
    });

    const result = response.data;
    
    if (result.status === "error") {
      throw new Error(result.message || "Data fetch failed");
    }
    //localStorage.setItem("token",result.token);
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
    
   checkAuth();  
   getUserData();
  
  
    
  }, [router,toast]);
  

return(
   {txt && ( <pre>txt</pre>)}
  );

}
