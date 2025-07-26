/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function Theexorcistmasterpiecesupernaturalhorror() {
  const post = blogPostsData.find(p => p.slug === "the-exorcist-masterpiece-supernatural-horror");
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
                  
              <Heading as="h1" size="xl" mb={6} mt={8} color={headingColor} textAlign="center">The Power of Faith and Fear</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>When <Text as="em" fontStyle="italic" color={headingColor}>The Exorcist</Text> premiered in 1973, it didn't just scare audiences—it fundamentally changed what horror cinema could achieve. William Friedkin's unflinching examination of faith, doubt, and the battle between good and evil created a template for supernatural horror that remains unmatched nearly five decades later.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>A Story That Transcends Horror</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>At its core, <Text as="em" fontStyle="italic" color={headingColor}>The Exorcist</Text> is not merely a tale of demonic possession. It's a profound exploration of faith in crisis, the limits of medical science, and the eternal struggle between light and darkness. The film follows young Regan MacNeil, whose gradual transformation from innocent child to vessel of evil serves as a catalyst for examining the spiritual beliefs of everyone around her.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}><Text as="strong" color={headingColor} fontWeight="bold">Chris MacNeil</Text>, Regan's mother, represents the modern secular worldview—rational, scientific, and initially dismissive of supernatural explanations. Her journey from skepticism to desperate faith mirrors the audience's own transformation throughout the film.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Brilliance of Practical Effects</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>What makes <Text as="em" fontStyle="italic" color={headingColor}>The Exorcist</Text> enduringly terrifying is Friedkin's commitment to practical effects and psychological realism. The film's most shocking moments—Regan's head spinning 360 degrees, her projectile vomiting, the infamous spider-walk scene—were achieved through innovative practical techniques that feel viscerally real.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>These effects serve the story rather than overwhelming it. Each supernatural manifestation escalates the psychological pressure on the characters, particularly Father Karras, whose crisis of faith becomes the emotional center of the film.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Religious Horror Done Right</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}><Text as="em" fontStyle="italic" color={headingColor}>The Exorcist</Text> succeeds where many religious horror films fail because it takes faith seriously. The film doesn't mock religious belief or treat it as superstition. Instead, it presents a world where the supernatural is real, where evil exists as a tangible force, and where faith becomes the only weapon against darkness.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}><Text as="strong" color={headingColor} fontWeight="bold">Father Merrin</Text> and <Text as="strong" color={headingColor} fontWeight="bold">Father Karras</Text> represent two different approaches to faith—the experienced exorcist who has faced evil before, and the young priest struggling with doubt. Their dynamic creates the film's theological backbone.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Cultural Impact and Legacy</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The film's impact extended far beyond the horror genre. <Text as="em" fontStyle="italic" color={headingColor}>The Exorcist</Text> sparked nationwide conversations about faith, evil, and the supernatural. Reports of audience members fainting, vomiting, and fleeing theaters became part of the film's legend.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>More importantly, it elevated horror cinema to new artistic heights, proving that the genre could tackle serious themes while delivering genuine scares. The film's influence can be seen in countless supernatural horror films that followed, from <Text as="em" fontStyle="italic" color={headingColor}>The Conjuring</Text> to <Text as="em" fontStyle="italic" color={headingColor}>Hereditary</Text>.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>A Timeless Terror</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Nearly fifty years later, <Text as="em" fontStyle="italic" color={headingColor}>The Exorcist</Text> remains as powerful as ever. Its slow-burn approach to horror, emphasis on character development, and unflinching examination of faith create a viewing experience that lingers long after the credits roll.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The film reminds us that the most effective horror comes not from jump scares or gore, but from confronting our deepest fears about the nature of good and evil, faith and doubt, and the fragility of innocence in a world where darkness is always waiting.</Text>
              
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