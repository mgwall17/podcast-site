/* eslint-disable react/no-unescaped-entities */
"use client";
import { Link } from "@chakra-ui/next-js";
import { Container,Box,Center,Code, Heading, Text, Stack, Badge } from "@chakra-ui/react";
export default function About() {
  return (
    <div>
      <Container>
      <Heading mb={4} as="h1" align="center">About Me</Heading>
        <Box width="100%" align={'center'}>
          <Box align="center" as="img" src="jose.png" width={"250px"} bgGradient="linear(to-t, white, purple.300)" rounded={'100%'} />
        <Box bgColor="gray.100" rounded="10px" width={"250px"} m={4} p={2}>
        <Text align={'center'} color="gray.700">
          My name's Jose Zaragoza! <br/> Nice to meet you!
          </Text>
          </Box>
          </Box>
          <Box>
          <Text mt={2}>I'm a recent graduate of the Masters in Digital Marketing program at Arizona State University. Armed with a passion for horror and a freshly minted degree, I've embarked on an expedition to bring you the spine-chilling wonders of my Horror Glass Podcast.
          </Text>
          <Box my={4}>
            <Text>
          Connect with me on <Link href="https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt?si=f00b5dd15c874f39" isExternal><Badge colorScheme={"green"}>Spotify</Badge></Link>   or  <Link href="https://www.linkedin.com/in/jose-zaragoza-ii-a1b448186/" isExternal><Badge colorScheme={"blue"}>LinkedIn</Badge></Link>  to stay updated on the latest episodes, behind-the-scenes shenanigans, and perhaps some story-telling insights thrown in for good measure.
          </Text>
          <Box my={2}>
          <Text>
          Thank you for being a part of the Horror Glass journey!
          </Text>
          </Box>
          </Box>
          </Box>
      </Container>
    </div>
  );
}
