import { Box, HStack, Separator, Stack, Text} from "@chakra-ui/react";

export default function Footer() {
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
        bg="gray.100"
               
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
