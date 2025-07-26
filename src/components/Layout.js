"use client";
import { Container, Text, Box, VStack, HStack, Link as ChakraLink, Divider, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Skip to main content link for accessibility */}
      <ChakraLink
        href="#main-content"
        position="absolute"
        left="-9999px"
        zIndex="999"
        p={2}
        bg="purple.600"
        color="white"
        textDecoration="none"
        _focus={{
          left: "6px",
          top: "6px"
        }}
      >
        Skip to main content
      </ChakraLink>

      {/* Header */}
      <Box as="header" role="banner">
        <Navigation />
        <Breadcrumbs />
      </Box>

      {/* Main Content */}
      <Box 
        as="main" 
        id="main-content"
        role="main"
        flex="1"
        py={4}
      >
        {children}
      </Box>

      {/* Footer */}
      <Box 
        as="footer" 
        role="contentinfo"
        bg={useColorModeValue("gray.50", "gray.800")}
        borderTop="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        mt="auto"
        py={8}
      >
        <Container maxW="6xl">
          <VStack spacing={6}>
            {/* Footer Navigation */}
            <HStack spacing={8} wrap="wrap" justify="center">
              <ChakraLink 
                as={Link}
                href="/"
                fontWeight="semibold" 
                color={useColorModeValue("gray.700", "gray.300")}
                _hover={{ color: useColorModeValue("purple.600", "purple.400") }}
              >
                Home
              </ChakraLink>
              <ChakraLink 
                as={Link}
                href="/Episodes"
                fontWeight="semibold" 
                color={useColorModeValue("gray.700", "gray.300")}
                _hover={{ color: useColorModeValue("purple.600", "purple.400") }}
              >
                Episodes
              </ChakraLink>
              <ChakraLink 
                as={Link}
                href="/Blog"
                fontWeight="semibold" 
                color={useColorModeValue("gray.700", "gray.300")}
                _hover={{ color: useColorModeValue("purple.600", "purple.400") }}
              >
                Blog
              </ChakraLink>
              <ChakraLink 
                as={Link}
                href="/About"
                fontWeight="semibold" 
                color={useColorModeValue("gray.700", "gray.300")}
                _hover={{ color: useColorModeValue("purple.600", "purple.400") }}
              >
                About
              </ChakraLink>
              <ChakraLink 
                as={Link}
                href="/Contact"
                fontWeight="semibold" 
                color={useColorModeValue("gray.700", "gray.300")}
                _hover={{ color: useColorModeValue("purple.600", "purple.400") }}
              >
                Contact
              </ChakraLink>
            </HStack>

            <Divider />

            {/* Social Links */}
            <HStack spacing={4}>
              <ChakraLink
                href="https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt"
                isExternal
                color="green.600"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline" }}
                aria-label="Listen on Spotify (opens in new tab)"
              >
                Spotify
              </ChakraLink>
            </HStack>

            {/* Copyright and Legal */}
            <VStack spacing={2} textAlign="center">
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                Copyright © {currentYear} Jose Zaragoza. All rights reserved.
              </Text>
              <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.500")} maxW="md">
                Content in this podcast and website may contain copyrighted material used under the principles of fair use for commentary and criticism.
              </Text>
            </VStack>

            {/* Podcast Info */}
            <Box textAlign="center">
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")} fontWeight="semibold">
                Horror Glass Podcast
              </Text>
              <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.500")}>
                Exploring the psychological impact of horror films
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
