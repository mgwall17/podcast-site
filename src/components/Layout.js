"use client";
import { Container, Text, Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Breadcrumbs />
      <Container maxW='4xl' p={2} centerContent>{children}</Container>
      <Box mt="5" mb="2" as="footer">
        <Text align="center">
          {"Copyright © "}
          Mariah Wall {new Date().getFullYear()}
          {"."}
        </Text>
        <Text align="center" fontSize='xs'>
          Developed for educational purposes only.
        </Text>
      </Box>
    </div>
  );
}