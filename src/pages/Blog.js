"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Text } from "@chakra-ui/react";
export default function Blog() {
  return (
    <div>
      <Container>
        <Heading>My Current Investigations</Heading>
        <Text mt={2}>
          Most Recent
        </Text>
      </Container>
    </div>
  );
}
