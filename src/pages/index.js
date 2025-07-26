/* eslint-disable react/no-unescaped-entities */
import { Heading, Container, Hide, Center, HStack, StackDivider, VStack, Stack, Text, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { MoonIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import SEO from '../components/SEO'

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Horror Glass Podcast",
    "description": "Horror Glass Podcast is all about unmasking the fears that resonate on a personal level. Join Jose Zaragoza as he explores the psychological impact of horror films with diverse guests.",
    "url": "https://horrorglassPodcast.com",
    "author": {
      "@type": "Person",
      "name": "Jose Zaragoza"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Horror Glass Podcast",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horrorglassPodcast.com/HPG_Logo_Purple.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://horrorglassPodcast.com/episodes?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt"
    ]
  };

  return (
    <>
      <SEO
        title="Horror Glass Podcast - Exploring the Psychology of Horror Films"
        description="Horror Glass Podcast is all about unmasking the fears that resonate on a personal level. Join Jose Zaragoza as he explores the psychological impact of horror films with diverse guests."
        keywords="horror podcast, horror movies, psychological horror, film analysis, Jose Zaragoza, horror film discussions"
        structuredData={homeStructuredData}
        canonical="https://horrorglassPodcast.com"
      />

      <Container maxW="6xl" as="main">
        <Stack spacing={8}>
          {/* Hero Section */}
          <Box as="section" textAlign="center" py={8}>
            <Heading 
              as="h1" 
              size="2xl" 
              mb={6}
              lineHeight="shorter"
            >
              Welcome to the <br/> Horror Glass Podcast
            </Heading>
            
            <Hide below="lg">
              <Center mt={4} mb={6}>
                <Box 
                  as="img" 
                  src="/HPG_Logo_Purple.png" 
                  width="200px" 
                  height="200px" 
                  alt="Horror Glass Podcast Logo - A purple glass with horror film imagery" 
                  loading="eager"
                />
              </Center>
            </Hide>

            {/* Call to Action Buttons */}
            <HStack spacing={4} justify="center" mt={6}>
              <Button 
                as={Link}
                href="/Episodes"
                colorScheme="purple" 
                size="lg"
              >
                Listen to Episodes
              </Button>
              <Button 
                as={Link}
                href="/Blog"
                variant="outline" 
                colorScheme="purple" 
                size="lg"
              >
                Read Our Blog
              </Button>
            </HStack>
          </Box>

          {/* Introduction Section */}
          <Box as="section" aria-labelledby="introduction">
            <Center>
              <VStack 
                divider={<StackDivider borderColor="gray.600" />}
                spacing={6}
                align="stretch" 
                maxW="4xl"
                p={[4, 6, 8]}
              >
                <Box textAlign="center">
                  <Heading 
                    id="introduction"
                    as="h2" 
                    size="xl" 
                    mb={4}
                    color="purple.400"
                  >
                    Calling All Horror Fans!
                  </Heading> 
                  <Text fontSize="lg" lineHeight="tall" color="gray.300">
                    My name is Jose Zaragoza, and as a fellow lover of all things scary, I'm thrilled to invite you on a journey through the world of horror movies. In each episode, I sit down with a random guest who, like you and me, has been profoundly impacted by a particular horror film. Together, we unravel the psychological layers that make these movies so captivating.
                  </Text>
                </Box>

                <Heading 
                  as="h2" 
                  size="lg" 
                  textAlign="center"
                  color="purple.400"
                  id="about-section"
                >
                  So what is Horror Glass about?
                </Heading>
              </VStack>
            </Center>
          </Box>

          {/* Features Section */}
          <Box as="section" aria-labelledby="about-section">
            <SimpleGrid columns={[1, 1, 2]} spacing={8} maxW="6xl" mx="auto">
              <Box 
                as="article"
                p={6}
                borderRadius="lg"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                transition="background 0.2s"
              >
                <HStack mb={4}>
                  <MoonIcon color="purple.400" boxSize={6} />
                  <Heading as="h3" size="md" color="purple.300">
                    Sharing Chills
                  </Heading>
                </HStack>
                <Text lineHeight="tall" color="gray.300">
                  Join me once a month as I chat with a diverse range of guests—die-hard horror fans, first-time thrill-seekers, and everyone in between. We go beyond the standard movie review, digging into personal experiences, unexpected twists, and the lasting impressions these films leave on our minds.
                </Text>
              </Box>

              <Box 
                as="article"
                p={6}
                borderRadius="lg"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                transition="background 0.2s"
              >
                <HStack mb={4}>
                  <MoonIcon color="purple.400" boxSize={6} />
                  <Heading as="h3" size="md" color="purple.300">
                    Unveiling Personal Fears
                  </Heading>
                </HStack>
                <Text lineHeight="tall" color="gray.300">
                  Horror Glass is all about unmasking the fears that resonate on a personal level. I'm here to share the untold stories behind the screams and explore the ways in which these films have left an indelible mark on the lives of my guests—and, hopefully, on yours too.
                </Text>
              </Box>

              <Box 
                as="article"
                p={6}
                borderRadius="lg"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                transition="background 0.2s"
              >
                <HStack mb={4}>
                  <MoonIcon color="purple.400" boxSize={6} />
                  <Heading as="h3" size="md" color="purple.300">
                    Meet Our Fearful Community
                  </Heading>
                </HStack>
                <Text lineHeight="tall" color="gray.300">
                  Our guests are as diverse as the horror genre itself. Artists, academics, and everyday fans. Everyone is invited to join the conversation. Share your thoughts, become part of a community where our collective love for horror binds us together, and experience the profound impact that these movies have on real people.
                </Text>
              </Box>

              <Box 
                as="article"
                p={6}
                borderRadius="lg"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                transition="background 0.2s"
              >
                <HStack mb={4}>
                  <MoonIcon color="purple.400" boxSize={6} />
                  <Heading as="h3" size="md" color="purple.300">
                    Never Miss a Terrifying Tale
                  </Heading>
                </HStack>
                <Text lineHeight="tall" color="gray.300">
                  Don't want to miss out on the scares and insights? Subscribe to Horror Glass Podcast and join me each month for a new guest, a new movie, and a fresh exploration of the psychological terrain that makes horror cinema so uniquely captivating.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Subscribe Section */}
          <Box 
            as="section" 
            textAlign="center" 
            py={8}
            bg="gray.800"
            borderRadius="lg"
            aria-labelledby="subscribe-section"
          >
            <Heading 
              id="subscribe-section"
              as="h2" 
              size="lg" 
              mb={4}
              color="purple.300"
            >
              Ready to Dive Into Horror?
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.300" maxW="2xl" mx="auto">
              Start your journey with our latest episodes and discover the psychological depths of your favorite horror films.
            </Text>
            <HStack spacing={4} justify="center" wrap="wrap">
              <Button 
                as="a"
                href="https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="green"
                size="lg"
                rightIcon={<ExternalLinkIcon />}
                aria-label="Listen on Spotify (opens in new tab)"
              >
                Listen on Spotify
              </Button>
              <Button 
                as={Link}
                href="/Episodes"
                colorScheme="purple" 
                variant="outline" 
                size="lg"
              >
                Browse All Episodes
              </Button>
            </HStack>
          </Box>
        </Stack>
      </Container>
    </>
  )
}
