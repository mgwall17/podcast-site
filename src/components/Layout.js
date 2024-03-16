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
      <Container maxW='4xl' p={2} centerContent>
      <Box mt="5" mb="2" as="footer" maxW="500px">
        <Text align="center">
          {"Copyright © "}
          Jose Zaragoza {new Date().getFullYear()}
          {"."}
        </Text>
        <Text align="center" fontSize='xs' mt="1rem">
        Content in this podcast and website may contain copyrighted material used under the principles of fair use for commentary and criticism.
        </Text>
      </Box>
      </Container>
    </div>
  );
}