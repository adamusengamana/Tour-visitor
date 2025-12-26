import Tcard from "../components/Tcard";
import { Box, Text } from "@chakra-ui/react";

export default function Destinations() {
  return (
    <Box colorPalette="gray" minH="100vh" p={5}>
      <Box
        p={8}
        margin={10}
        boxShadow="md"
        borderRadius="md"
        colorPalette="white"
        maxW="800px"
        mx="auto"
        mt={10}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Explore Our Top Destinations ✈️
        </Text>
        <Text mt={3}>
          Find your next adventure from our curated list of destinations!
        </Text>
      </Box>
      <Tcard />
    </Box>
  );
}
