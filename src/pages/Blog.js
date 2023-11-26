"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Text } from "@chakra-ui/react";
export default function Blog() {
  return (
    <div>
      <Container>
        <Heading>My Current Investigations</Heading>
        <Text mt={2}>
          As your host, I will be your guide through the horror glass. I am a master of horror and delight.
        </Text>
      </Container>
    </div>
  );
}
