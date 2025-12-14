import { Box, Flex, Avatar, Text, IconButton, Badge, useDisclosure } from "@chakra-ui/react";
import { HiOutlineChatBubbleOvalLeft, HiOutlineBell } from "react-icons/hi2";
import Sidebar from "@/sidebar";
import {FiMenu} from "react-icons/fi";


export default function TopNav() {

  const {isOpen, onOpen, onClose} = useDisclosure();
  
  return (
    <Flex
      align="center"
      justify="space-between"
      px={4}
      py={2}
      bg="white"
      position="fixed"   // FIXED NAVBAR
      top="0"
      w="100%"           // FULL WIDTH
      zIndex="1000"      // ON TOP OF ALL CONTENT
      boxShadow="sm"     // OPTIONAL: Nice shadow
    >
      {/* Left Section */}
      <Flex align="center" gap={3}>
        <Avatar
          size="md"
          name="Clement Pauljo"
          src="avatar.jpeg"
        />
        <Box lineHeight="1.2">
          <Text fontSize="sm" color="gray.500">
            Welcome.
          </Text>
          <Text fontWeight="bold">Clement Adekunle</Text>
        </Box>
      </Flex>
      
        {/* Bell Icon */}
        <Box position="relative">
          <IconButton
            aria-label="notifications"
            icon={<HiOutlineBell size={23} />}
            variant="solid"
            size="lg"
          />
          <Badge
            position="absolute"
            top="3px"
            right="2px"
            bg="red.500"
            borderRadius="full"
            boxSize="6px"
            p="2"
          />
        </Box>

      
      {/* Drawer */}
      <Button
        leftIcon={<FiMenu />}
        onClick={onOpen}
        variant="ghost"
        color="purple.600"
      >
      
      </Button>
      
    </Flex>
  );
}
