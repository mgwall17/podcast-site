"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Stack, Text,Box } from "@chakra-ui/react";
export default function Episodes() {
  return (
    <div>
      <Container>
        <Heading as="h1" size="xl" color="orange">Horror Glass Podcast Episodes</Heading>
        <Stack spacing={4} m={8}>
        <Link href="https://soundcloud.com/jose-zaragoza-480556966/through-the-horror-glass-episode-1-psycho?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"><Heading as="h3" size="md">Episode 1: Psycho</Heading>
        <Text>October, 2023</Text></Link>
        <Box>
  <iframe 
    width="100%" 
    height="166" 
    allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1608331935&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    title="SoundCloud Player"
  ></iframe>
  {/* Rest of your code... */}
</Box>
        </Stack>
      </Container>
    </div>
  );
}
