"use client";
import  Link  from "next/link";
import { Container,Box,Text, Heading,Stack } from "@chakra-ui/react";

export default function Blog() {
  return (
    <div>
      <Container>
        <Heading as="h1" align="center">Horror Glass Blog</Heading>
        <Stack>
        <Box>
        <Link href="/Blog/Psycho-the-ultimate-classic">
        <Box as="div" m={4} p={4} bgColor={'purple.800'} rounded={'10px'} _hover={{ bgColor: 'purple.600' }}>
            <Heading size="lg" as="h2">Psycho, the Ultimate Classic
            </Heading>
          <Heading size="md" as="h3">September 3rd, 2023</Heading>
          <Text as="i">By Jose Zaragoza</Text>
        </Box>
        </Link>
        </Box>
        <Box>
        <Link href="/Blog/The-Thing-that-haunts-my-dreams">
        <Box as="div" m={4} p={4} bgColor={'purple.800'} rounded={'10px'} _hover={{ bgColor: 'purple.600' }}>
            <Heading size="lg" as="h2">The Thing that Haunts my Dreams
            </Heading>
          <Heading size="md" as="h3">October 12th, 2023</Heading>
          <Text as="i">By Jose Zaragoza</Text>
        </Box>
        </Link>
        </Box>
        <Box>
        <Link href="/Blog/Hellraiser-Hook-line-and-shiver">
        <Box as="div" m={4} p={4} bgColor={'purple.800'} rounded={'10px'} _hover={{ bgColor: 'purple.600' }}>
            <Heading size="lg" as="h2">Hellraiser: Hook, Line and Shiver
            </Heading>
          <Heading size="md" as="h3">November 11th, 2023</Heading>
          <Text as="i">By Jose Zaragoza</Text>
        </Box>
        </Link>
        </Box>
        </Stack>
      </Container>
    </div>
  );
}
