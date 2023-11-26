"use client";
import { Container, Text, Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Breadcrumbs />
      <Container maxW="container.xl">{children}</Container>
      <Box mt="5" mb="2" as="footer">
        <Text align="center">
          {"Copyright © "}
          Jose Zaragoza II {new Date().getFullYear()}
          {"."}
        </Text>
        <Text align="center" fontSize='xs'>
          Developed by Mariah Wall Design
        </Text>
      </Box>
    </div>
  );
}