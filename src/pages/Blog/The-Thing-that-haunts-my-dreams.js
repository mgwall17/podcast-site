/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function TheThingthathauntsmydreams() {
  const post = blogPostsData.find(p => p.slug === "The-Thing-that-haunts-my-dreams");
  const relatedPosts = getRelatedPosts(post, 2);

  const postStructuredData = getBlogPostStructuredData(post);
  
  const bgGradient = useColorModeValue(
    "linear(to-br, purple.50, white, purple.50)",
    "linear(to-br, gray.900, purple.900, gray.900)"
  );
  
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("purple.100", "purple.600");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("purple.600", "purple.300");

  return (
    <>
      <SEO
        title={`${post.title} - Horror Glass Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ") + ", horror blog, film analysis"}
        publishedTime={post.publishDate}
        modifiedTime={post.modifiedDate}
        author={post.author}
        type="article"
        image={post.image}
        structuredData={postStructuredData}
        canonical={`https://horrorglassPodcast.com/Blog/${post.slug}`}
      />

      <Box bgGradient={bgGradient} minH="100vh" py={8}>
        <Container maxW="4xl" as="main">
          <article>
            <VStack spacing={8} align="stretch">
              {/* Hero Section */}
              <Box 
                bg={cardBg}
                borderRadius="2xl" 
                boxShadow="2xl" 
                overflow="hidden"
                border="1px solid"
                borderColor={borderColor}
              >
                {/* Featured Image */}
                {post.image && (
                  <Box position="relative" h="300px" overflow="hidden">
                    <Image
                      src={post.image}
                      alt={`Featured image for ${post.title}`}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      filter="brightness(0.8)"
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient="linear(to-t, blackAlpha.600, transparent)"
                    />
                    {post.featured && (
                      <Badge
                        position="absolute"
                        top={4}
                        right={4}
                        colorScheme="yellow"
                        variant="solid"
                        fontSize="sm"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        <StarIcon mr={1} />
                        Featured
                      </Badge>
                    )}
                  </Box>
                )}

                {/* Header Content */}
                <Box p={8}>
                  <VStack spacing={4} align="stretch">
                    <Heading 
                      as="h1" 
                      size="2xl" 
                      textAlign="center" 
                      lineHeight="shorter"
                      bgGradient="linear(to-r, purple.600, purple.800)"
                      bgClip="text"
                      fontWeight="bold"
                    >
                      {post.title}
                    </Heading>
                    
                    <Flex justify="center" wrap="wrap" gap={6} color="gray.600">
                      <HStack spacing={2}>
                        <CalendarIcon color="purple.500" />
                        <Text as="time" dateTime={post.publishDate} fontWeight="medium">
                          {post.publishDateFormatted}
                        </Text>
                      </HStack>
                      <HStack spacing={2}>
                        <TimeIcon color="purple.500" />
                        <Text fontWeight="medium">{post.readTime}</Text>
                      </HStack>
                    </Flex>
                    
                    <Text 
                      fontSize="lg" 
                      fontStyle="italic" 
                      color="gray.600" 
                      textAlign="center"
                      borderTop="1px solid"
                      borderColor="purple.100"
                      pt={4}
                    >
                      By {post.author}
                    </Text>

                    {/* Tags */}
                    <Wrap justify="center" pt={2}>
                      {post.tags.map((tag, index) => (
                        <WrapItem key={index}>
                          <Badge 
                            colorScheme="purple" 
                            variant="subtle"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {tag}
                          </Badge>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </VStack>
                </Box>
              </Box>

              {/* Article Content */}
              <Box 
                bg={cardBg}
                borderRadius="xl" 
                boxShadow="xl" 
                p={8}
                border="1px solid"
                borderColor={borderColor}
              >
                <Box as="section" maxW="none" color={textColor}>
                  
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Released in 1982, this cinematic masterpiece not only redefined the horror genre but also left an indelible mark on both cinema and popular culture.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={useColorModeValue("purple.200", "purple.600")} pb={3}>A Cinematic Revolution</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>From the moment the ominous score by Ennio Morricone begins to play, "The Thing" sets a chilling tone that persists throughout its runtime. Carpenter's masterful direction, coupled with groundbreaking special effects by Rob Bottin, elevated the film to a level of visual and atmospheric horror previously unseen. The alien creature, with its grotesque transformations and unsettling mimicry, pushed the boundaries of practical effects and forever altered the landscape of creature features in cinema.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={useColorModeValue("purple.200", "purple.600")} pb={3}>Cultural Impact</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>"The Thing" wasn't just a film; it was a cultural phenomenon that resonated far beyond the confines of the movie theater. Its exploration of paranoia and distrust in an isolated Antarctic outpost mirrored the anxieties of the Cold War era. The film's stark portrayal of a group unraveling under the threat of an unseen enemy struck a chord, making it a timeless reflection of societal fears.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={useColorModeValue("purple.200", "purple.600")} pb={3}>Legacy in Horror Cinema</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Decades later, "The Thing" remains a touchstone for horror filmmakers. Its influence can be seen in subsequent works that explore the psychological horror of isolation and the visceral terror of shape-shifting entities. The film's emphasis on suspense, practical effects, and atmospheric tension has become a blueprint for horror directors seeking to elicit genuine fear from their audiences.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={useColorModeValue("purple.200", "purple.600")} pb={3}>Cult Following and Homages</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>"The Thing" has amassed a devoted cult following that celebrates its nuanced storytelling and groundbreaking effects. From video games to comic books, its legacy extends to various mediums. The film has been the subject of homage and reference in works across genres, showcasing its enduring impact on popular culture.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Most notably, the game Among Us that has our kids enraptured with mobile and PC gaming, is a direct homage to the film. The game's premise of a group of crewmates trying to identify an alien imposter is a direct reference to the film's plot. The game's popularity is a testament to the enduring legacy of "The Thing" and its ability to captivate audiences across generations.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={useColorModeValue("purple.200", "purple.600")} pb={3}>A Frozen Classic</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>In reflecting on the impact of John Carpenter's "The Thing," it's evident that its influence goes beyond the horror genre. This frozen nightmare has left an indelible mark on cinema, inspiring filmmakers and captivating audiences with its visceral terror and psychological depth. As a horror enthusiast, I find myself returning to the frozen wastes of Antarctica, where the alien entity lurks, reshaping my understanding of fear and storytelling with each viewing. "The Thing" isn't just a film; it's a classic that continues to freeze the hearts of those willing to confront its chilling mysteries.</Text>
              
                </Box>
              </Box>

              
              {/* Movie Information Box */}
              <Box 
                bg={cardBg}
                borderRadius="xl" 
                boxShadow="xl" 
                p={6}
                border="1px solid"
                borderColor={borderColor}
                borderLeft="6px solid"
                borderLeftColor={useColorModeValue("purple.400", "purple.500")}
              >
                <Heading as="h3" size="md" mb={4} color={headingColor}>
                  🎬 About the Movie
                </Heading>
                <VStack align="start" spacing={3}>
                  <HStack>
                    <Text fontWeight="bold" color={headingColor}>Title:</Text>
                    <Text color={textColor}>{post.relatedMovie.title}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" color={headingColor}>Director:</Text>
                    <Text color={textColor}>{post.relatedMovie.director}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" color={headingColor}>Year:</Text>
                    <Text color={textColor}>{post.relatedMovie.year}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" color={headingColor}>Genre:</Text>
                    <Text color={textColor}>{post.relatedMovie.genre || 'Horror'}</Text>
                  </HStack>
                </VStack>
              </Box>
              

              {/* Categories & Related Posts Section */}
              <Box 
                bg={cardBg}
                borderRadius="xl" 
                boxShadow="xl" 
                p={6}
                border="1px solid"
                borderColor={borderColor}
              >
                {/* Categories */}
                <Box mb={6}>
                  <Heading as="h3" size="sm" mb={3} color={headingColor}>
                    📂 Categories
                  </Heading>
                  <Wrap>
                    {post.categories.map((category, index) => (
                      <WrapItem key={index}>
                        <Badge 
                          colorScheme="purple" 
                          variant="outline"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {category}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>

                <Divider mb={6} />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Box as="section" aria-labelledby="related-posts">
                    <Heading 
                      id="related-posts" 
                      as="h3" 
                      size="sm" 
                      mb={4} 
                      color={headingColor}
                    >
                      📖 Related Posts
                    </Heading>
                    <VStack spacing={4} align="stretch">
                      {relatedPosts.map((relatedPost) => (
                        <NextLink key={relatedPost.id} href={`/Blog/${relatedPost.slug}`} passHref>
                          <Box
                            p={4}
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor={borderColor}
                            _hover={{ 
                              bg: useColorModeValue("purple.50", "purple.900"), 
                              transform: "translateY(-2px)",
                              borderColor: useColorModeValue("purple.300", "purple.400")
                            }}
                            transition="all 0.2s"
                            cursor="pointer"
                          >
                            <Heading as="h4" size="sm" mb={2} color={headingColor}>
                              {relatedPost.title}
                            </Heading>
                            <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.400")} mb={2}>
                              {relatedPost.publishDateFormatted} • {relatedPost.readTime}
                            </Text>
                            <Text fontSize="sm" noOfLines={2} color={textColor}>
                              {relatedPost.excerpt}
                            </Text>
                          </Box>
                        </NextLink>
                      ))}
                    </VStack>
                  </Box>
                )}
              </Box>

              {/* Back to Blog */}
              <Box textAlign="center" pt={4}>
                <NextLink href="/Blog" passHref>
                  <Box
                    as="a"
                    display="inline-flex"
                    alignItems="center"
                    px={6}
                    py={3}
                    bg={useColorModeValue("purple.600", "purple.500")}
                    color="white"
                    borderRadius="full"
                    fontWeight="semibold"
                    _hover={{ 
                      bg: useColorModeValue("purple.700", "purple.600"),
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.2s"
                    boxShadow="lg"
                  >
                    ← Back to All Posts
                  </Box>
                </NextLink>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
}