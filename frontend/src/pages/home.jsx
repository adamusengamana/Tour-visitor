import {
  Box,
  Text,
  AspectRatio,
  Blockquote,
  Separator,
  Stack,
  Heading,
  Highlight,
  Button
} from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Box
        position="relative"
        w="100%"
        h="100vh"
        overflow="hidden"
        bg="blackAlpha.800"
        zIndex="-1"
      >
        <AspectRatio maxWidth="1280px" ratio={16 / 9}>
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/UZSbm8nf1MI?rel=0&showinfo=0&controls=0&autoplay=1&mute=1&loop=1&playlist=UZSbm8nf1MI"
            position="absolute"
            opacity={0.7}
            top="0"
            left="0%"
            transform="translateY(-15%)"
            border="0"
            scrolling="no"
            zIndex="-1"
          ></Box>
        </AspectRatio>
      </Box>

      <Box
        p={8}
        margin={10}
        boxShadow="md"
        borderRadius="md"
        bg="white"
        maxW="600px"
        mx="auto"
        mt={10}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to TourEase 🌍
        </Text>
        <Text mt={3}>
          Discover amazing destinations and book your next adventure!
        </Text>
      </Box>
      <Separator my={6} />
      <Box p={8}>
      <Stack size="sm" justify="center" align="center" spacing={4} mb={6}>
        <Heading size="3xl" letterSpacing="tight">
          <Highlight query="WITH EASE" styles={{ color: "teal.600" }}>
            Create your travel plans WITH EASE
          </Highlight>
        </Heading>
        <Text fontSize="md" color="fg.muted">
          TourEase is a simple, functional firm that
          gives you the taste of genuine adventures you need.
        </Text>
      </Stack>
      <Separator my={6} />
      <Blockquote.Root borderLeftWidth="4px" borderLeftColor="teal.400" pl={4} py={2} mb={6} align="center"  mx="auto">
        <Blockquote.Content color="fg.muted" justify="center">
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
        <Blockquote.Caption>
          — <cite>Olomide Ifeonyi</cite>
        </Blockquote.Caption>
      </Blockquote.Root>
      <Separator my={6} />
      <Stack align="flex-start">
        <Heading size="2xl">Modern payments for booking</Heading>
        <Text mb="3" fontSize="md" color="fg.muted">
          PayMe helps startups get paid by anyone, anywhere in the world
        </Text>
        <Button colorPalette="teal" rightIcon={<LuArrowRight />} as={RouterLink} to="/register"> 
          Create account <LuArrowRight />
        </Button>
      </Stack>
      </Box>
    </Box>
  );
}
