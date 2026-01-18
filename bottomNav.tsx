import { Box, Flex, IconButton, useColorModeValue} from "@chakra-ui/react";
import {
  FiHome,
  FiClock,
  FiPlus,
  FiCreditCard,
  FiUser
} from "react-icons/fi";

export default function BottomNav() {
 
 const bg = useColorModeValue("white","black");
  
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      zIndex="1000"
      py={2}
      bg={bg}
    >
      <Flex justify="space-around" align="center">
        {/* Home */}
        <IconButton
          icon={<FiHome size={18} />}
          variant="ghost"
          aria-label="Home"
        />

        {/* Activity */}
        <IconButton
          icon={<FiClock size={18} />}
          variant="ghost"
          aria-label="Activity"
        />

        {/* Middle Circle Button 
        <Flex
          bgGradient="linear(to-tr, purple.500, purple.600)"
          w="55px"
          h="55px"
          borderRadius="full"
          justify="center"
          align="center"
          boxShadow="lg"
          mt="-35px"
        >
          <FiPlus color="white" size={15} />
        </Flex>
*/}
        {/* Wallet */}
        <IconButton
          icon={<FiCreditCard size={18} />}
          variant="ghost"
          aria-label="Wallet"
        />

        {/* Profile */}
        <IconButton
          icon={<FiUser size={18} />}
          variant="ghost"
          aria-label="Profile"
        />
      </Flex>
    </Box>
  );
}
