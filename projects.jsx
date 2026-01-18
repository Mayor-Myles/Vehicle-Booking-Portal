"use client";

import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Image,
  Badge,
  Flex,
} from "@chakra-ui/react";

const projects = [
  {
    title: "E-commerce Website Design",
    category: "Web Design",
    status: "Completed",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-builder.jpg",
  },
  {
    title: "Fashion Brand Logo",
    category: "Graphics Design",
    status: "Active",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtthZie3cxEK_vXfrGkRVk9ggZbr2LliDtfQ&usqp=CAU",
  },
  {
    title: "Bulk SMS Campaign",
    category: "Bulk SMS",
    status: "Completed",
    image: "https://myoperator.com/blog/wp-content/uploads/2019/12/Bulk-SMS-Service-Business-magnet-you-need-in-2024-for-a-faster-growth-01.png",
  },
  {
    title: "Custom Illustration Art",
    category: "Drawing Art",
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7IlpizLU4YPFKzUewz_rmCcVozUCO9DccEgzVb4FitG-vxaqNt4Ye69Sg&s=10",
  },
];

export default function Projects() {
  return (
    <Box py={{ base: 10, md: 16 }} >
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Header */}
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Recent Projects
            </Text>
            <Text color="gray.600">
              A snapshot of recently completed and ongoing projects
            </Text>
          </Box>

          <Text
            color="purple.700"
            fontWeight="medium"
            cursor="pointer"
            display={{ base: "none", md: "block" }}
          >
            View all
          </Text>
        </Flex>

        {/* Projects Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {projects.map((project, index) => (
            <GridItem key={index}>
              <VStack
                align="stretch"
                bg="gray.50"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="sm"
                transition="0.25s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "lg",
                }}
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  h="160px"
                  objectFit="cover"
                />

                {/* Content */}
                <Box p={4}>
                  <Badge
                    mb={2}
                    colorScheme={
                      project.status === "Completed" ? "green" : "purple"
                    }
                  >
                    {project.status}
                  </Badge>

                  <Text fontWeight="semibold" mb={1}>
                    {project.title}
                  </Text>

                  <Text fontSize="sm" color="gray.600">
                    {project.category}
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

