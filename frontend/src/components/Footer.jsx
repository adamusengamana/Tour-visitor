import { Box, HStack, Separator, Stack, Text} from "@chakra-ui/react";
import {useColorModeValue } from "./ui/color-mode";

export default function Footer() {
  const bg = useColorModeValue("teal.100", "gray.100");
  return (
    <Box>
      <Stack
        as="footer"
        role="contentinfo"
        spacing="4"
        align="center"
        justify="center"
        p="5"
        mt="10"
        bg={bg}
        position="sticky"
        bottom="0"
      >
        <Stack 
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
         separator={
          <Separator
            orientation="vertical"
            colorPalette="blue"
            height="20px"
            size="lg"
          />
        }>
        <Text fontSize="md" color="fg.muted">
          About Us
        </Text>
        <Text fontSize="md" color="fg.muted">
          Contact
        </Text>
        <Text fontSize="md" color="fg.muted">
          Privacy Policy
        </Text>
        <Text fontSize="md" color="fg.muted">
          Terms of Service
        </Text>
        <Text fontSize="md" color="fg.muted">
          Help
        </Text>
     </Stack>
        <HStack>
          <Box
            pt="4"
            textAlign="center"
            fontSize="sm"
            color="fg.muted"
            colorPalette="teal"
          >
            &copy; {new Date().getFullYear()} TourEase. All rights reserved.
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
}
