/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function Psychotheultimateclassic() {
  const post = blogPostsData.find(p => p.slug === "Psycho-the-ultimate-classic");
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
                  
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>From its spine-tingling shower scene to the ominous Bates Motel, this cinematic gem has become a timeless emblem of terror, captivating audiences across generations. In this exploration, I aim to dissect the cultural significance of "Psycho" and unravel the threads that make it an enduring icon in the horror genre.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Power of Hitchcock's Psycho</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Released in 1960, "Psycho" shattered cinematic conventions, thanks to the genius of Alfred Hitchcock. With its groundbreaking narrative twists and innovative storytelling techniques, the film redefined the horror landscape. Hitchcock's ability to manipulate audience expectations, especially through the infamous shower scene, not only shocked viewers but forever altered the trajectory of horror cinema.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Psycho Legacy</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Beyond its immediate impact, "Psycho" birthed a legacy that continues to reverberate throughout popular culture. The character of Norman Bates, portrayed brilliantly by Anthony Perkins, became an archetype for the disturbed antagonist, influencing countless horror films that followed. The Bates Motel itself became an iconic setting, haunting our collective imagination and serving as a touchstone for psychological horror.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Cultural Impact and Subversion</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>"Psycho" didn't merely scare its audience; it challenged societal norms and expectations. Hitchcock's subversion of narrative conventions, including the shocking killing of a major character midway through the film, forced viewers to confront their assumptions about storytelling. This bold approach extended beyond the screen, influencing subsequent filmmakers to experiment with narrative structures and defy genre expectations.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Psycho Effect on Popular Culture</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The impact of "Psycho" transcends the silver screen, seeping into the fabric of popular culture. From references in music and literature to parodies in television and film, the Bates Motel and the haunting strains of Bernard Herrmann's score have become cultural touchstones. The iconic shower scene, in particular, has been homaged, parodied, and analyzed endlessly, cementing its status as one of the most memorable moments in cinematic history.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>A Timeless Terror</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>In the ever-evolving landscape of horror cinema, "Psycho" remains an eternal beacon of terror. Its cultural significance lies not just in its ability to scare, but in its capacity to challenge, subvert, and influence the very essence of storytelling. As a horror enthusiast, "Psycho" isn't just a film; it's a rite of passage, an enduring masterpiece that continues to shape the nightmares of those who dare to enter the Bates Motel.</Text>
              
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
                borderLeftColor="purple.500"
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
                              bg: "purple.50", 
                              transform: "translateY(-2px)",
                              borderColor: "purple.300"
                            }}
                            transition="all 0.2s"
                            cursor="pointer"
                          >
                            <Heading as="h4" size="sm" mb={2} color={headingColor}>
                              {relatedPost.title}
                            </Heading>
                            <Text fontSize="xs" color="gray.500" mb={2}>
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
                    bg="purple.600"
                    color="white"
                    borderRadius="full"
                    fontWeight="semibold"
                    _hover={{ 
                      bg: "purple.700",
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