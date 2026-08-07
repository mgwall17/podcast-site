/* eslint-disable react/no-unescaped-entities */
import { Heading, Container, Hide, Center, HStack, StackDivider, VStack, Stack, Text, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { MoonIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import SEO from '../components/SEO'
import EpisodePlaylist from '../components/EpisodePlaylist'
import { homePageData, homeStructuredData } from '../utils/homeData'
import { episodesData, getPublishedEpisodes, sortEpisodes } from '../utils/episodeData'

export default function Home() {
  const hero = homePageData.hero || {};
  const introduction = homePageData.introduction || {};
  const features = homePageData.features || {};
  const subscribe = homePageData.subscribe || {};

  // Configuration: Set how many recent episodes to show (1-3)
  const numberOfEpisodesToShow = 3; // Change this to 1, 2, or 3 as needed
  
  // Get the most recent published episodes
  const publishedEpisodes = getPublishedEpisodes(episodesData);
  const sortedEpisodes = sortEpisodes(publishedEpisodes, 'date', 'desc');
  const recentEpisodes = sortedEpisodes.slice(0, numberOfEpisodesToShow);

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
              {hero.title || "Welcome to the Horror Glass Podcast"}
            </Heading>
            
            <Hide below="lg">
              <Center mt={4} mb={6}>
                <Box 
                  as="img" 
                  src={hero.logo?.src || "/HPG_Logo_Purple.png"}
                  width={hero.logo?.width || "200px"}
                  height={hero.logo?.height || "200px"}
                  alt={hero.logo?.alt || "Horror Glass Podcast Logo"}
                  loading="eager"
                />
              </Center>
            </Hide>

            {/* Call to Action Buttons */}
            <HStack spacing={4} justify="center" mt={6}>
              <Button 
                as={Link}
                href={hero.callToAction?.primary?.href || "/Episodes"}
                colorScheme={hero.callToAction?.primary?.colorScheme || "purple"}
                size="lg"
              >
                {hero.callToAction?.primary?.text || "Listen to Episodes"}
              </Button>
              <Button 
                as={Link}
                href={hero.callToAction?.secondary?.href || "/Blog"}
                variant={hero.callToAction?.secondary?.variant || "outline"}
                colorScheme={hero.callToAction?.secondary?.colorScheme || "purple"}
                size="lg"
              >
                {hero.callToAction?.secondary?.text || "View Blog"}
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
                    {introduction.title || "Calling All Horror Fans!"}
                  </Heading> 
                  <Text fontSize="lg" lineHeight="tall" color="gray.300">
                    {introduction.description || "My name is Jose Zaragoza, and as a fellow lover of all things scary, I'm thrilled to invite you on a journey through the world of horror movies."}
                  </Text>
                </Box>
              </VStack>
            </Center>
          </Box>

          {/* Recent Episodes Playlist Section */}
          {recentEpisodes.length > 0 && (
            <Box as="section" aria-labelledby="recent-episodes">
              <Heading 
                id="recent-episodes"
                as="h2" 
                size="xl" 
                mb={6}
                textAlign="center"
                color="purple.400"
              >
                Latest Episodes
              </Heading>
              <EpisodePlaylist 
                episodes={recentEpisodes} 
                title="Recent Episodes"
              />
            </Box>
          )}

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
              {subscribe.title || "Ready to Dive Into Horror?"}
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.300" maxW="2xl" mx="auto">
              {subscribe.description || "Start your journey with our latest episodes and discover the psychological depths of your favorite horror films."}
            </Text>
            <HStack spacing={4} justify="center" wrap="wrap">
              <Button 
                as="a"
                href={subscribe.callToAction?.primary?.href || "https://open.spotify.com/show/2TTfdtQ83xCbaSlv1yVdTt"}
                target={subscribe.callToAction?.primary?.external ? "_blank" : undefined}
                rel={subscribe.callToAction?.primary?.external ? "noopener noreferrer" : undefined}
                colorScheme={subscribe.callToAction?.primary?.colorScheme || "green"}
                size="lg"
                rightIcon={subscribe.callToAction?.primary?.icon === "ExternalLinkIcon" ? <ExternalLinkIcon /> : undefined}
                aria-label={subscribe.callToAction?.primary?.ariaLabel || "Listen on Spotify"}
              >
                {subscribe.callToAction?.primary?.text || "Listen on Spotify"}
              </Button>
              <Button 
                as={Link}
                href={subscribe.callToAction?.secondary?.href || "/Episodes"}
                colorScheme={subscribe.callToAction?.secondary?.colorScheme || "purple"}
                variant={subscribe.callToAction?.secondary?.variant || "outline"}
                size="lg"
              >
                {subscribe.callToAction?.secondary?.text || "Browse All Episodes"}
              </Button>
            </HStack>
          </Box>
        </Stack>
      </Container>
    </>
  )
}