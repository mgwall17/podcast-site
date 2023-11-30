/* eslint-disable react/no-unescaped-entities */
"use client";
import { Link } from "@chakra-ui/next-js";
import { Container,Box,Center,Code, Heading, Text, Stack, Badge } from "@chakra-ui/react";
export default function About() {
  return (
    <div>
      <Container>
      <Heading mb={4} as="h1" align="center" color="purple.400">About Me</Heading>
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
          Connect with me on <Link href="https://soundcloud.com/jose-zaragoza-480556966" isExternal><Badge colorScheme={"orange"}>Sound Cloud</Badge></Link>   or  <Link href="https://www.linkedin.com/in/jose-zaragoza-ii-a1b448186/" isExternal><Badge colorScheme={"blue"}>LinkedIn</Badge></Link>  to stay updated on the latest episodes, behind-the-scenes shenanigans, and perhaps some story-telling insights thrown in for good measure.
          </Text>
          <Box my={2}>
          <Text>
          Thank you for being a part of the Horror Glass journey!
          </Text>
          </Box>
          </Box>
          <Heading align={'center'} my={4} size="lg">Why I made Horror Glass</Heading>
            <Text mb={2}>
            It isn't just about discussing scary movies; it's a shared exploration of the visceral and psychological impact that these films have on individuals and society. By engaging in conversations with fellow enthusiasts, we unearth personal experiences, diverse perspectives, and the nuanced emotions that make horror a unique and captivating genre. </Text>
            <Text>
              My podcast serves as a communal space where the love for horror is celebrated, fostering a sense of connection and understanding among listeners. Beyond being a platform for entertainment, Horror Glass Podcast becomes a shared journey through the realms of fear, where the passion for the genre takes center stage, offering listeners a chance to revel in the thrills and chills that unite horror fans worldwide.
          </Text>
          </Box>
          <Box>
          <Heading align={'center'} my={4} size="lg">Everyone should make a podcast</Heading>
            <Text>
            Aside from just being plain fun, creating a podcast is a multifaceted learning journey. It sharpens communication skills through articulate expression and engaging interview techniques, fostering the ability to convey ideas compellingly. The process enhances project management capabilities as students plan, execute, and maintain a consistent podcast schedule, emphasizing organization and time management. Crafting content and narratives for each episode develops creative thinking, a skill integral to digital marketing. </Text>
            <Text my={2}>Podcasting also serves as a hands-on experience in content creation, from scriptwriting to audio editing, honing storytelling abilities. It gives me practice on building and maintaining an online presence through social media, providing practical insights into audience engagement and brand building. In essence, podcast creation becomes a holistic learning experience, blending creativity, communication, organization, and analytics, all essential facets of a well-rounded digital marketing skill set.
          </Text>
          </Box>
      </Container>
    </div>
  );
}
