/* eslint-disable react/no-unescaped-entities */
"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading,Box,Stack, Text, Button } from "@chakra-ui/react";
export default function Contact() {
  return (
    <div>
      <Container>
        <Heading as="h1" align="center" color="purple.400"my={4}>How to Contact Me</Heading>
        <Box align="center">
        <Box as="img" src="jose_glass.png" width={"250px"} />
        </Box>
        <Text my={4} fontSize={"lg"} align={'center'}>
          Luckily it's not as complicated as performing a seance or a spell. Just click on the links below to reach me on SoundCloud, LinkedIn or email.
        </Text>
        <Stack>
          <Button as={Link} href="https://soundcloud.com/jose-zaragoza-480556966" isExternal colorScheme={"purple"}>SoundCloud</Button>
          <Button as={Link} href="https://www.linkedin.com/in/jose-zaragoza-ii-a1b448186/" isExternal colorScheme={"purple"}>LinkedIn</Button>
          <Button as={Link} href="mailto:jzaragoza2@gmail.com" isExternal colorScheme={"purple"}>Email Me</Button>
        </Stack>
      <Box my={4}>
      <Heading size={"md"} align="center"my={4}>Want to be a Guest?</Heading>
      <Text align="center">Have a horror movie I haven't covered that is meaningful to you? Want to talk about it? Fill out this Google Form and let's make it happen!</Text>
      <Box align="center">
      <Button m={4} as={Link} href="/Application">Access Application *</Button>
      <Text fontSize={"sm"}>* A Google account is required to prevent bots</Text>
      </Box>
      </Box>
      </Container>
    </div>
  );
}
