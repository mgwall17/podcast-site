import {
  Box,
  Stack,
  Text,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Heading,
  Avatar,
  HStack
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Navigation() {
  return (
    <Box p="4">
    <HStack spacing={8} alignItems={'center'}>
        <Box p="2">
          <Heading size="md">
            <Flex alignItems="center">
            <Link href="/" style={{ textDecoration: "none" }} >
              <Text
                bgGradient="linear(to-r, red.400, orange.300)"
                bgClip="text"
                fontSize="4xl"
              >
              Horror Glass Podcast
              </Text>
              </Link>
            </Flex>
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
        <Link href="/">
            <Button size={"sm"} colorScheme="red">
              Episodes
            </Button>
          </Link>
          <Link href="/About">
            <Button size={"sm"} colorScheme="red">
              About
            </Button>
          </Link>
          <Link href="/Contact">
            <Button size={"sm"} colorScheme="red">
              Contact
            </Button>
          </Link>
          <Link href="/Blog">
            <Button size={"sm"} colorScheme="red">
              Blog
            </Button>
          </Link>
        </ButtonGroup>
      </HStack>
    </Box>
  );
}