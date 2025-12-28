import { useBreakpointValue, Box, Flex, Text, Icon, Grid, GridItem } from "@chakra-ui/react";
import { BsAward } from "react-icons/bs";
import { FiChevronRight, FiPercent } from "react-icons/fi";
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
    <Box 
      width="100%"
      overflowX="auto"
      px={4}
      py={2}
      my={2}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      <Flex 
        gap={4}
        width={isMobile ? "max-content" : "100%"}       
        minWidth={isMobile ? "max-content" : "480px"}
        mx={{md:"8em"}}
      >
        {advertData.map((advert) => (
          <Box
            key={advert.id}
            bg={advert.bgColor}
            p={4}
            borderRadius="lg"
            minWidth={isMobile ? "280px" : "auto"}
            width={isMobile ? "280px" : "480px"}
            flexShrink={0}
            cursor="pointer"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            transition="all 0.2s"
          >
            <Flex align="center" justify="space-between">
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
                ml={3}
              >
                <Icon as={FiChevronRight} fontSize={22} color={advert.arrowColor} />
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
