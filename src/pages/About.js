/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { 
  Container, 
  Box, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  Badge, 
  Image,
  Button,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import SEO from "../components/SEO";

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Jose Zaragoza - Horror Glass Podcast Host",
    "description": "Learn about Jose Zaragoza, the host of Horror Glass Podcast. A recent graduate with a Masters in Digital Marketing from Arizona State University, passionate about exploring the psychological impact of horror films.",
    "url": "https://horrorglassPodcast.com/about",
    "mainEntity": {
        "type": "Person",
        "name": "Jose Zaragoza",
        "jobTitle": "Podcast Host",
        "description": "Host of Horror Glass Podcast, exploring the psychological impact of horror films with diverse guests.",
        "alumniOf": {
            "type": "EducationalOrganization",
            "name": "Arizona State University"
        },
        "knowsAbout": [
            "Horror Films",
            "Digital Marketing",
            "Podcast Production",
            "Film Analysis"
        ],
        "sameAs": [
            "https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt",
            "https://www.linkedin.com/in/jose-zaragoza-ii-a1b448186/"
        ]
    }
};

  return (
    <>
      <SEO
        title="About Jose Zaragoza - Horror Glass Podcast Host"
        description="Learn about Jose Zaragoza, the host of Horror Glass Podcast. A recent graduate with a Masters in Digital Marketing from Arizona State University, passionate about exploring the psychological impact of horror films."
        keywords="Jose Zaragoza, Horror Glass Podcast host, horror podcast creator, digital marketing, Arizona State University"
        structuredData={aboutStructuredData}
        canonical="https://horrorglassPodcast.com/about"
      />

      <Container maxW="4xl" as="main">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={6}>
              About Jose Zaragoza
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Host of Horror Glass Podcast, exploring the psychological depths of horror cinema
            </Text>
          </Box>

          {/* Profile Section */}
          <Box as="section" textAlign="center">
            <Image
              src="/jose.png"
              alt="Jose Zaragoza - Host of Horror Glass Podcast"
              width="250px"
              height="250px"
              mx="auto"
              borderRadius="full"
              boxShadow="xl"
              bgGradient="linear(to-t, white, purple.300)"
              mb={6}
              loading="eager"
            />
            
            <Box 
              bg="gray.100" 
              borderRadius="lg" 
              maxW="300px" 
              mx="auto"
              p={4}
              mb={6}
            >
              <Text color="gray.700" fontWeight="semibold" fontSize="lg">
                My name's Jose Zaragoza! Nice to meet you!
              </Text>
            </Box>
          </Box>

          {/* Bio Section */}
          <Box as="section" aria-labelledby="bio-section">
            <Heading id="bio-section" as="h2" size="lg" mb={4} textAlign="center">
              My Story
            </Heading>
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg" lineHeight="tall">
                I'm a recent graduate of the Masters in Digital Marketing program at Arizona State University. 
                Armed with a passion for horror and a freshly minted degree, I've embarked on an expedition 
                to bring you the spine-chilling wonders of my Horror Glass Podcast.
              </Text>
              
              <Text fontSize="lg" lineHeight="tall">
                My fascination with horror films goes beyond the surface scares. I'm deeply interested in 
                the psychological impact these movies have on viewers and how they reflect our deepest fears 
                and anxieties. Through Horror Glass Podcast, I explore these themes with guests who share 
                their personal connections to horror cinema.
              </Text>
            </VStack>
          </Box>

          <Divider />

          {/* Education & Expertise */}
          <Box as="section" aria-labelledby="expertise-section">
            <Heading id="expertise-section" as="h2" size="lg" mb={4} textAlign="center">
              Background & Expertise
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={6}>
              <Box p={6} bg="purple.900" borderRadius="lg">
                <Heading as="h3" size="md" mb={3}>
                  Education
                </Heading>
                <Text>
                  <strong>Masters in Digital Marketing</strong><br/>
                  Arizona State University
                </Text>
              </Box>
              
              <Box p={6} bg="purple.900" borderRadius="lg">
                <Heading as="h3" size="md" mb={3}>
                  Specialties
                </Heading>
                <VStack align="start" spacing={1}>
                  <Text>• Horror Film Analysis</Text>
                  <Text>• Podcast Production</Text>
                  <Text>• Digital Marketing</Text>
                  <Text>• Content Creation</Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Connect Section */}
          <Box 
            as="section" 
            bg="gray.900" 
            p={8} 
            borderRadius="lg"
            textAlign="center"
            aria-labelledby="connect-section"
          >
            <Heading id="connect-section" as="h2" size="lg" mb={4} >
              Let's Connect
            </Heading>
            <Text fontSize="lg" mb={6} lineHeight="tall">
              Connect with me to stay updated on the latest episodes, behind-the-scenes content, 
              and insights into the world of horror cinema.
            </Text>
            
            <HStack spacing={4} justify="center" wrap="wrap">
              <Button
                as="a"
                href="https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt?si=f00b5dd15c874f39"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="green"
                size="lg"
                rightIcon={<ExternalLinkIcon />}
                aria-label="Follow on Spotify (opens in new tab)"
              >
                Follow on Spotify
              </Button>
              
              <Button
                as="a"
                href="https://www.linkedin.com/in/jose-zaragoza-ii-a1b448186/"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="blue"
                variant="outline"
                size="lg"
                rightIcon={<ExternalLinkIcon />}
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                Connect on LinkedIn
              </Button>
            </HStack>
          </Box>

          {/* Thank You Section */}
          <Box textAlign="center" py={6}>
            <Text fontSize="xl" fontWeight="semibold" mb={2}>
              Thank you for being a part of the Horror Glass journey!
            </Text>
            <Text fontSize="lg" color="gray.100">
              Your support means everything as we explore the fascinating world of horror cinema together.
            </Text>
          </Box>

          {/* Call to Action */}
          <Box textAlign="center">
            <HStack spacing={4} justify="center" wrap="wrap">
              <Link href="/Episodes">
                <Button colorScheme="purple" size="lg">
                  Listen to Episodes
                </Button>
              </Link>
              <Link href="/Blog">
                <Button variant="outline" colorScheme="purple" size="lg">
                  Read the Blog
                </Button>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
}