/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function HorrorfilmsandthePoliticalWorldPartOne() {
  const post = blogPostsData.find(p => p.slug === "Horror-films-and-the-Political-World-Part-One");
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
                  
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Horror films have always been more than just scares and monsters, they are a mirror reflecting the anxieties and fears of their time. Beneath the blood and screams lie sharp commentaries on politics, power, and the state of the world. From WWI to Cold War paranoia fueling Invasion of the Body Snatchers to the racial tensions exposed in Get Out, horror uses fear to critique the systems that govern us.</Text>
              <Heading as="h3" size="md" mb={6} mt={8} color={headingColor} borderBottom="2px solid" borderColor={borderColor} pb={2}>The Golden Era: Bela Lugosi and WWI Anxieties</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The golden era of horror films produced the most popular and well-known horror star of all time, Bela Lugosi, who starred as the famous vampire Count Dracula. After starring in Dracula (1931), Lugosi would find success in the horror genre appearing in other films such as The Black Cat (1934), The Raven (1935), The Invisible Ray (1936), Son of Frankenstein (1939), Black Friday (1940), and The Wolfman (1941).</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>What made these monsters that Bela played so popular? The answer is World War I. The war completely changed the shape of the world, leaving many people without homes and seeking new ones. But not everyone was welcoming newcomers into their country. They viewed these people as outsiders and as "the other" - a term used in horror.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>With this comes Dracula/Nosferatu. The fear that people had about vampires in the film's world mirrored similar fears that people had in real life: fear of new cultures, having to share land and resources, and not wanting people of one land to mix with another. The monsters created in horror were the fears that directors and creators experienced during and after WWI.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>WWII: The War Effort Takes Center Stage</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>During World War 2, the horror genre took a step back. From radio to film, it was all about the war effort. This is why we see Hollywood monsters such as the Invisible Man star in a film as a hero agent in Invisible Agent, complete opposite of being a villain as in the original. Disney, Looney Tunes, Superman and more characters starred in World War 2 skits about the war against Nazi Germany and Imperial Japan.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Atomic Era: Godzilla and Nuclear Anxieties</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Following World War II, horror cinema returned with a new focus on the lingering trauma and technological aftermath of the war. This period gave rise to the atomic era of filmmaking, where the horrors unleashed by nuclear weapons inspired some of the genre's most iconic monsters.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The most popular monster created was Godzilla, a direct response to the American nuclear attacks on Hiroshima and Nagasaki. While nuclear power was often framed as heroic in the West, in Japan the bombs had devastating effects. Godzilla embodied this trauma, a towering symbol of the scars left by the atomic bomb.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The monster Rodan, introduced two years later, carried similar nuclear anxieties but tapped into new fears born by the Cold War. By the mid-1950s, the Soviet Union's advancements in long-range aircraft and intercontinental ballistic missiles had made aerial annihilation terrifyingly real.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Cold War Paranoia: Invasion of the Body Snatchers</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The 1950s were an age of suspicion and fear. As the Cold War escalated, Americans lived under the constant shadow of nuclear annihilation and the creeping dread of communist infiltration. McCarthyism turned paranoia into policy, and the idea of an unseen enemy hiding in plain sight became a national obsession.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Invasion of the Body Snatchers brought these fears to the silver screen. In the film, ordinary people are replaced by emotionless "pod people" who look identical but lack humanity. For 1950s audiences, this story mirrored the terror of communism - an ideology that people believed could turn friends, family, and entire communities into strangers overnight.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Yet the film's horror cuts both ways, also critiquing America's own culture of conformity. Its ambiguous ending left audiences asking a haunting question: are we more afraid of the enemy outside, or the one we become inside?</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The 1970s: Occult Fears and Human Brutality</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Many horror films from the 70s dealt with the fear and dangers of occults. In 1969, a series of murders caused by Charles Manson and his followers made people more aware of occults. With Charles Manson, the public eye was on occults and they now had a new fear.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Wes Craven's The Last House on the Left (1972) pushed horror into raw, unsettling territory that reflected the turbulent times. It stripped away supernatural elements, grounding its horror in the brutality of human nature. Unlike the fantastical monsters of earlier decades, the villains here were all too real - products of a society wrestling with the Vietnam War, political corruption, and eroding trust in authority.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Films such as The Omen (1976) and The Wicker Man (1973) brought cult fears into cinema. These anxieties persisted into the following decades, as seen in Netflix's Stranger Things, where D&D players are viewed as occult members by those who don't understand the game.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>A Timeless Terror</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>By tapping into cultural unease, horror films transform political anxieties into living nightmares, making audiences confront uncomfortable truths they might otherwise ignore. Horror continues to serve as society's dark mirror, reflecting our deepest fears and anxieties back at us through the language of monsters and mayhem.</Text>
                </Box>
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
                        <NextLink key={relatedPost.id} href={`/Blog/${relatedPost.slug}`}>
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
                <NextLink href="/Blog">
                  <Box
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
                    cursor="pointer"
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