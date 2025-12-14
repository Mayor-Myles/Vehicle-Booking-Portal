import { useBreakpointValue, Box, Flex, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { BsAward, BsWallet2, BsRocket } from "react-icons/bs";
import { FiChevronRight, FiPercent, FiUsers } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";

export default function Adverts() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const advertData = [
    {
      id: 1,
      title: "Become an Agent",
      description: "Get 50% off every transaction",
      icon: BsAward,
      bgColor: "#EFE6FF",
      iconColor: "purple.600",
      arrowColor: "purple.600"
    },
    {
      id: 2,
      title: "Earn Rewards",
      description: "Up to 10% cashback on airtime",
      icon: FiPercent,
      bgColor: "#E6F4FF",
      iconColor: "blue.600",
      arrowColor: "blue.600"
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "Bank-level encryption guaranteed",
      icon: MdSecurity,
      bgColor: "#FFE6E6",
      iconColor: "red.600",
      arrowColor: "red.600"
    }
  ];

  return (
    <SimpleGrid 
      columns={isMobile ? 2 : 3} 
      spacing={4} 
      p={4}
      maxW={isMobile ? "100%" : "800px"}
      mx={isMobile ? "2em" : "6em"}
      overflowX="scroll"
    >
      {advertData.map((advert) => (
        <Flex
          key={advert.id}
          bg={advert.bgColor}
          p={4}
          borderRadius="lg"
          align="center"
          justify="space-between"
          cursor="pointer"
          _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
          transition="all 0.2s"
        >
          <Flex align="center" gap={3}>
            <Flex
              bg="white"
              boxSize="40px"
              borderRadius="full"
              align="center"
              justify="center"
            >
              <Icon as={advert.icon} fontSize={22} color={advert.iconColor} />
            </Flex>
            <Box>
              <Text fontWeight="bold" fontSize="md" color="black">
                {advert.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {advert.description}
              </Text>
            </Box>
          </Flex>
          <Flex
            bg="white"
            boxSize="36px"
            borderRadius="full"
            align="center"
            justify="center"
          >
            <Icon as={FiChevronRight} fontSize={22} color={advert.arrowColor} />
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
