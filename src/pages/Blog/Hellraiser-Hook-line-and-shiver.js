/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function HellraiserHooklineandshiver() {
  const post = blogPostsData.find(p => p.slug === "Hellraiser-Hook-line-and-shiver");
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
                  
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Few films have left audiences as awestruck and unnerved as Clive Barker's "Hellraiser." Released in 1987 and based on Barker's novella "The Hellbound Heart," this cinematic journey into the macabre not only introduced audiences to the iconic Pinhead but also redefined the landscape of horror through its exploration of visceral body horror.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>For those of you who have yet to see it, you may even find Hellraiser to be tame compared to today's movies. But for those of us who grew up in the 80s and 90s, this movie was a gateway to the horror genre. It was a gateway to the idea that horror could be more than just a slasher film. It could be a psychological exploration of the human condition. It could be a philosophical exploration of the human body. It could be a visceral exploration of the human psyche.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>A Gateway to Pain</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>"Hellraiser" is not your typical horror film; it's a descent into a realm where pleasure and pain intertwine in the most disturbing ways. At the core of its narrative lies the puzzle box, an innocuous-looking object that serves as the gateway to a dimension of unimaginable torment. The visceral hooks and chains that emerge, reconfiguring bodies in the pursuit of extreme sensations, form the foundation of the film's body horror, challenging conventional notions of physical boundaries.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>If you check out the behind the scenes interviews, you'll learn that Clive Barker took a lot of influence from the S&M scene in London. He wanted to explore the idea of pain and pleasure being intertwined. He also wanted to explore the idea of the human body being a canvas for pain and pleasure. The Cenobites are the embodiment of this idea.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Cenobites in the Flesh</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>At the center of this infernal tapestry are the Cenobites, otherworldly beings led by the enigmatic Pinhead. These sadomasochistic entities blur the lines between pleasure and agony, their designs on the human form pushing the limits of what can be depicted on screen. The intimate connection between pain and pleasure is personified in the Cenobites, making them both terrifying and strangely alluring embodiments of Barker's unique vision.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Did You Know it was a Book First?</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>"Hellraiser" stands as a testament to Clive Barker's prowess as both a filmmaker and a writer. "The Hellbound Heart," the novella upon which the film is based, delves even deeper into the themes of desire, pain, and the boundaries of the human body. Barker's literary influence infuses "Hellraiser" with a profound depth that transcends the visceral shocks, inviting audiences to ponder the psychological and philosophical implications of the narrative.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>It is worth checking out the novella, but don't be as confused as I was to learn that Kirtsy in the movie is not the same as Kirsty in the book. Kirsty in the book is actually Rory's neighbor rather than daughter. I know, I know, it's confusing. But it's worth the read.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Legacy of Body Horror</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Decades after its release, "Hellraiser" continues to be a touchstone for body horror in cinema. Its influence echoes in films that dare to explore the limits of corporeal transformation and the intersection of pleasure and pain. The legacy of Pinhead and the Cenobites has permeated popular culture, leaving an indelible mark on the annals of horror history.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Unearthly Symphony of Pain</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>In delving into the nightmarish world of "Hellraiser," one confronts a symphony of horror that resonates on a visceral and intellectual level. Clive Barker's creation is more than a film; it's a descent into the darkest recesses of desire and torment, where the boundaries of the flesh are both tested and shattered. "Hellraiser" remains a testament to the power of body horror, reminding us that true horror lies not just in what we see but in what we dare to imagine within the confines of our own skin.</Text>
              
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