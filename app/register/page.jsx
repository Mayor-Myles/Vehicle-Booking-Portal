
"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Link,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlinePhone,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdOutlineWc,
} from "react-icons/md";
import {useRouter} from "next/navigation";
import Navbar from "@/components/navbar";
import {supabase} from "@/lib/supabaseClient";
import {FaUser} from "react-icons/fa";
import NextLink from "next/link";




export default function Register() {
  const [show, setShow] = useState(false);
const[loading,setLoading] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("orange.200", "gray.700");
  const inputBg = useColorModeValue("orange.50", "gray.700");
  const iconColor = useColorModeValue("orange.500", "orange.300");
  const textColor = useColorModeValue("gray.700", "gray.300");
const toast = useToast();
const router = useRouter();

  
const [formData,setFormData] = useState(
  {
  phoneNumber:null,
  email:null,
   gender:null,
   password:null
  }
);

  const updateFormData = (e,key) => {


   setFormData((prev) => ({...prev,[key]:e.target.value}));

  }


  {/* handles form submission */}
const submit = async() => {

  setLoading(true);
  
  toast.closeAll();

  {/* GENERATE AND GET NEW USER ID FOR SUPABASE */}
const { data, error } = await supabase.auth.signUp({
      phone : formData.phoneNumber,
      password : formData.password,
    });

    if(error) {
      toast({title:"Error",status:"error",description:"Registration failed. "+error.message,position:"top"});
      setLoading(false);
      return;
    }

    const userId = data.user.id;

  {/* INSERT THE GENERATED ID AND OTHER FIELDS IN THE CREATED DB*/}
  
  const { insertError } = await supabase
      .from("users")
      .insert({
        id: userId,
        email,
        phoneNumber,
        gender,
        fullName,
      });

    if (insertError) {
      toast({title:"Error",status:"error",description:"Registration failed. "+insertError.message,position:"top"});
      setLoading(false);
      return;
    }

    setLoading(false);
  toast({title:"Succesful",status:"success",description:"Registration succesful. You are now being redirected to dashboard. ",position:"top"});
    router.push("/profile");
  };

  
  return (
    <>
      <Navbar />

      <Flex mt={{ base: "2em", md: 0 }} minH={{ base: 0, md: "100vh" }} align="center" justify="center" px={4}>
        <Box
          maxW="md"
          w="full"
          bg={bg}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={cardBorder}
          p={8}
          boxShadow="lg"
        >
          <Stack spacing={6}>
            {/* Header */}
            <Stack spacing={1} textAlign="center">
              <Heading size="sm">Create Account</Heading>
              <Text color={textColor} fontSize="sm">
                Sign up to start booking your journeys
              </Text>
            </Stack>

            {/* Fullname*/}
                
            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <FaUser size={22} color={iconColor} />
                </InputLeftElement>
                <Input
                  onChange={(e)=>updateFormData(e,"fullName")}
                  type="text"
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
                  placeholder="Enter your fullname"
                />
              </InputGroup>
            </FormControl>


            {/* Phone */}
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlinePhone size={22} color={iconColor} />
                </InputLeftElement>
                <Input
                  onChange={(e)=>updateFormData(e,"phoneNumber")}
                  type="tel"
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
                  placeholder="Enter phone number"
                />
              </InputGroup>
            </FormControl>

            {/* Email */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail size={22} color={iconColor} />
                </InputLeftElement>
                <Input
                  onChange={(e)=>updateFormData(e,"email")}
                  type="email"
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
                  placeholder="Enter email address"
                />
              </InputGroup>
            </FormControl>

            {/* Gender */}
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlineWc size={22} color={iconColor} />
                </InputLeftElement>
                <Select
                  onChange={(e)=>updateFormData(e,"gender")}
                  bg={inputBg}
                  pl={12}
                  height="52px"
                  borderRadius="lg"
                  placeholder="Select gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  
                </Select>
              </InputGroup>
            </FormControl>

            {/* Password */}
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlineLock size={22} color={iconColor} />
                </InputLeftElement>
                <Input
                  onChange={(e)=>updateFormData(e,"password")}
                  type={show ? "text" : "password"}
                  bg={inputBg}
                  pl={12}
                  pr={12}
                  height="52px"
                  borderRadius="lg"
                  placeholder="Create password"
                />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    aria-label="Toggle password visibility"
                    icon={show ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                    onClick={() => setShow(!show)}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Register Button */}
            <Button
              isLoading={loading}
              onClick={()=>submit()}
              mt={2}
              height="56px"
              borderRadius="xl"
              bg="orange.600"
              color="white"
              fontSize="lg"
              _hover={{ bg: "orange.700" }}
              _active={{ transform: "scale(0.98)" }}
            >
              Create Account
            </Button>

            {/* Login Link */}
            <Text textAlign="center" fontSize="sm" color={textColor}>
              Already have an account?{" "}
              <Link
                as={NextLink}
                href="/login"
                color="orange.600"
                fontWeight="semibold"
              >
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
