import { Box, Flex, Avatar, Text, IconButton, Badge } from "@chakra-ui/react";
import { HiOutlineChatBubbleOvalLeft, HiOutlineBell } from "react-icons/hi2";

export default function TopNav() {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      px={4}
      py={2}
      bg="white"
    >
      {/* Left Section */}
      <Flex align="center" gap={3}>
        <Avatar
          size="md"
          name="Olaoluwa Abijo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblack-man-avatar&psig=AOvVaw136Ni6S5nFOARzZo8JoWnS&ust=1764587845340000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCUlZHgmZEDFQAAAAAdAAAAABAE"   // replace with actual image if needed
        />

        <Box lineHeight="1.2">
          <Text fontSize="sm" color="gray.500">
            Welcome.
          </Text>
          <Text fontWeight="bold">Clement Adekunle</Text>
        </Box>
      </Flex>

      {/* Icons Section */}
      <Flex align="center" gap={3}>
        {/* Chat Icon */}
        <Box position="relative">
          <IconButton
            aria-label="messages"
            icon={<HiOutlineChatBubbleOvalLeft size={22} />}
            variant=""
            size="lg"
          />
          <Badge
            position="absolute"
            top="0px"
            right="0px"
            bg="red.500"
            borderRadius="full"
            boxSize="10px"
            p="0"
          />
        </Box>

        {/* Bell Icon */}
        <Box position="relative">
          <IconButton
            aria-label="notifications"
            icon={<HiOutlineBell size={22} />}
            variant="ghost"
            size="lg"
          />
          <Badge
            position="absolute"
            top="0px"
            right="0px"
            bg="red.500"
            borderRadius="full"
            boxSize="10px"
            p="2"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
