/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function HorrorfilmsandthePoliticalWorldPartTwo() {
  const post = blogPostsData.find(p => p.slug === "Horror-films-and-the-Political-World-Part-Two");
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
                  
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>As the 1970s came to an end, America was shifting gears into a very different decade. The Vietnam War was gradually fading from public discussion, replaced by rising consumerism, pop culture explosions fueled by MTV, and the home video revolution. Hollywood was gearing up to introduce a new generation of iconic monsters and horror villains.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Birth of the Slasher: Suburban Anxieties Take Center Stage</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>America in the 80s was grappling with suburban anxieties, rising crime rates, media coverage of serial killers, and the realization that safe middle-class neighborhoods were not immune to violence. In 1978, John Carpenter released Halloween, creating an iconic horror monster originally credited as The Shape. Michael Myers would scare moviegoers with his emotionless white mask and looming height as he terrorized the suburban town of Haddonfield, setting the equation for slasher films.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Following in 1980 came Friday the 13th, which took the slasher equation and upped the gore for its time. Set in an isolated camp "cursed" due to the death of a little boy, the film revealed that the real killer was a grieving mother seeking revenge. But at the film's end, we were introduced to Jason Voorhees, who would become the killer for the rest of the franchise.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>A New Pantheon of Horror Icons</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The 1980s crowned a new pantheon of horror icons: Michael Myers, Jason Voorhees, Freddy Krueger, Pinhead, and the Xenomorph from Alien (1979). Unlike the classic monsters of early Hollywood, born from fears of war and displacement, these new villains reflected anxieties rooted in their creators' contemporary world: distrust in government, shifting social norms, capitalism, and consumerism.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>In Halloween and Friday the 13th, teenage girls were often sexualized and punished for it, reinforcing the moral warning that "sex kills." Alien explored corporate greed through the Weyland-Yutani Company's willingness to sacrifice human lives for profit. Hellraiser (1987) confronted taboos head-on, tapping into societal fears of the queer and BDSM communities that mainstream America often pushed into the shadows.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Freddy Krueger: The Charismatic Killer</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Of all the horror monsters that emerged in the 80s, none would be as popular as Freddy Krueger from A Nightmare on Elm Street (1984). Prior to this film, many Hollywood monsters rarely spoke, but Freddy was different. Robert Englund made Freddy charismatic, gave him hilarious one-liners, and a distinct personality.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Freddy Krueger would later be compared to President Ronald Reagan—both were charismatic, had distinct personalities, and were Hollywood stars. But what truly connected these figures was their impact: Freddy punished the sins of the fathers by attacking their children, while Reagan's policies—tax breaks for the rich, trickle-down economics, deregulation, and social program cuts—hurt America's middle class and children, leaving behind a lasting negative impression.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The 90s: Meta-Horror and Psychological Commentary</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Heading into the 90s, slasher films were still popular, but audiences were growing tired of the genre. The decade produced a new genre: meta-horror. Films like Scream (1996) not only made fun of their genre but offered social commentary on life. With Scream's success, studios began targeting the MTV generation with younger, attractive casts in films like I Know What You Did Last Summer (1997) and Urban Legend (1998).</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Where Scream broke the fourth wall to explain "the rules" of horror films, other movies featured characters aware they were in horror scenarios. The 90s also gave us social commentary on what turns people into killers. Films like American Psycho (2000) and Silence of the Lambs (1991) showed that the real monsters weren't supernatural creatures—they were us.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>Post-9/11 Horror: The Age of Torture Porn</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The horrific attacks on September 11, 2001, changed the United States for the worse. News outlets shifted into relentless 24/7 coverage, amplifying fear until it became constant background noise. The narrative was simple and dangerous: "trust us, fear them, and question nothing." This climate normalized suspicion, racial profiling, and a public appetite for watching danger unfold from the safety of a television screen.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Horror cinema absorbed this atmosphere. The 2000s saw films that abandoned supernatural terrors in favor of human cruelty made shockingly intimate. Saw (2004) became the flagship of what critics dubbed "torture porn," forcing viewers into moral tests similar to those playing out in news coverage. Every trap was a grotesque spectacle of choice and consequence, daring audiences to decide if victims were worthy of survival.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Hostel (2005) preyed on fears of the foreign "other," turning a seemingly innocent hostel into a site of extreme violence. Much like 24/7 media coverage of war and terror, audiences were forced to confront graphic suffering directly, implicating viewers in the moral spectacle of survival and judgment.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Remake Boom and J-Horror Influence</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>The 2000s also saw the rise of J-horror (Japanese horror films) like Ringu (1998)/The Ring (2002) and The Grudge (2002), along with an American remake boom. The remake trend occurred because moviegoers couldn't stomach torture horror, and Hollywood needed familiar properties to bring audiences back with less financial risk. This led to revivals of The Texas Chainsaw Massacre (2003), Halloween (2007), and Dawn of the Dead (2004).</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The 2010s: Elevated Horror and Social Consciousness</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>In the 2010s, America was riding on hope but remained damaged by terrorist attacks, war, and endless news cycles. Horror films marked a shift toward "elevated horror," blending traditional scares with psychological depth, social commentary, and arthouse aesthetics. Filmmakers pushed beyond jump scares, using atmosphere, symbolism, and slow-building tension to explore trauma, grief, and societal anxieties.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Movies like The Witch, Hereditary, and Get Out examined human relationships, identity, and systemic oppression while delivering genuine fear. The decade saw a rise in socially conscious horror, tackling racism, class disparity, and cultural tensions. Get Out used horror to dissect systemic racism, while Us and The Purge examined class inequality, showing how societal hierarchies create real-world horrors.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>International horror contributed to this socially conscious trend, with filmmakers addressing cultural anxieties, generational trauma, and political unrest. By embedding social critique within fear and suspense, 2010s horror forced audiences to confront uncomfortable truths about the world around them.</Text>
              <Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>The Enduring Power of Horror</Heading>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>Horror has always been more than entertainment—it's the reflection of fears, tensions, and moral dilemmas of its time. From the silent dread of early 20th-century monsters to the slashers of the 80s, to the moral spectacles of post-9/11 2000s, and the socially conscious, psychologically rich horrors of the 2010s and onward, these films reveal what societies fear most at any given moment.</Text>
              <Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>By turning anxieties into tangible monsters, gruesome scenarios, and unsettling narratives, horror forces audiences to confront their insecurities, injustices, and greatest fears lurking beneath everyday life. Horror's enduring power lies in its ability to transform the intangible dread of the world into a cinematic experience, reminding us that the scariest monsters are often the ones we create ourselves.</Text>
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
