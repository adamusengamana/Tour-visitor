// src/components/Navbar.jsx
import { Link as RouterLink,useLocation } from "react-router-dom";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";

import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Text,
  ClientOnly,
  Skeleton,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi"; // using react-icons instead of deprecated @chakra-ui/icons

const Links = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Booking", href: "/booking" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const { open, onOpen, onClose } = useDisclosure(); // Chakra v3 uses `open` instead of `isOpen`
  // color aware values
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("teal.600", "teal.200");
  const linkHoverBg = useColorModeValue("teal.100", "teal.700");
const location = useLocation();

  return (
    <Box
      bg={bg}
      px={5}
      py={2}
      color={textColor}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex h={10} align="center" justify="space-between">
        {/* Logo */}
        <Text
          fontSize="xl"
          fontWeight="bold"
          letterSpacing="wide"
          as={RouterLink}
          to="/"
        >
          TourEase
        </Text>

        {/* Mobile Menu Button */}
        <ClientOnly fallback={<Skeleton boxSize={9} />}>
          <IconButton
            size="md"
            aria-label="Toggle Menu"
            display={{
              base: "inline-flex",
              sm: "inline-flex",
              md: "none",
              lg: "none",
            }}
            onClick={open ? onClose : onOpen}
            variant="ghost"
            color={textColor}
            _hover={{ bg: linkHoverBg }}
          >
            {open ? <FiX /> : <FiMenu />}
          </IconButton>
        </ClientOnly>
        {/* Desktop Links */}
        <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          fontWeight="medium"
        > 
          {Links.map((link) => {
             const isActive = location.pathname === link.href;
           return (
            <ChakraLink
              as={RouterLink}
              to={link.href}
              key={link.name}
              px={2}
              py={1}
              
              rounded="md"
               bg={isActive ? "teal.500" : "transparent"}
              color={isActive ? "white" : "inherit"}
              _hover={{ bg: linkHoverBg }}
              textDecoration={"none"}
            >
              {link.name}
            </ChakraLink>
          ); })}
        </HStack>
        <ColorModeButton
          display={open ? "none" : "inline-flex"}
          color={textColor}
        />
        {/* Right Button */}
         <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}
          fontWeight="medium"
        > 
        <Button
          as={RouterLink}
          to="/login"
          colorPalette="teal"
          size="sm"
          display={
            open
              ? "none"
              : {
                  base: "inline-flex",
                  sm: "inline-flex",
                  md: "inline-flex",
                  lg: "inline-flex",
                }
          }
          _hover={{ bg: useColorModeValue("teal.400", "teal.400") }}
        >
          Sign In
        </Button>
        <Button
          as={RouterLink}
          to="/register"
          colorPalette="black"
          size="sm"
          display={
            open
              ? "none"
              : {
                  base: "inline-flex",
                  sm: "inline-flex",
                  md: "inline-flex",
                  lg: "inline-flex",
                }
          }
          
        >
          Register
        </Button>
        </HStack>
      </Flex>

      {/* Mobile Links (Collapsible Menu) */}
      {open && (
        <Box
          pb={4}
          mt={4}
          display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        >
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <ChakraLink
                as={RouterLink}
                to={link.href}
                key={link.name}
                px={4}
                py={3}
                rounded="md"
                width="100%" // Fill full width
                display="block" // Block-level for full width
                textAlign="center" // Optional: center text
                _hover={{ bg: "teal.100" }}
                textDecoration={"none"}
              >
                {link.name}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
