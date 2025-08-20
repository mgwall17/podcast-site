const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Function to parse markdown frontmatter and content
const parseMarkdownFile = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    // Generate slug from filename if not provided
    const filename = path.basename(filePath, '.md');
    const slug = frontmatter.slug || filename.replace(/\s+/g, '-').toLowerCase();
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    // Format publish date
    const publishDate = frontmatter.publishDate || new Date().toISOString().split('T')[0];
    const publishDateFormatted = formatDate(publishDate);
    
    return {
      frontmatter: {
        ...frontmatter,
        slug,
        publishDate,
        publishDateFormatted,
        readTime: `${readTime} min read`,
        modifiedDate: frontmatter.modifiedDate || publishDate,
      },
      content,
      wordCount
    };
  } catch (error) {
    console.error(`Error parsing markdown file ${filePath}:`, error);
    return null;
  }
};

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options).replace(/(\d+),/, '$1st,')
    .replace(/1st,/, '1st,')
    .replace(/2st,/, '2nd,')
    .replace(/3st,/, '3rd,')
    .replace(/21st,/, '21st,')
    .replace(/22st,/, '22nd,')
    .replace(/23st,/, '23rd,')
    .replace(/31st,/, '31st,');
};

// Function to convert markdown content to JSX-compatible format
const markdownToJSX = (content) => {
  // Basic markdown to JSX conversion
  let jsxContent = content
    // Headers with better styling and dark mode support
    .replace(/^### (.*$)/gm, '<Heading as="h3" size="md" mb={6} mt={8} color={headingColor} borderBottom="2px solid" borderColor={borderColor} pb={2}>$1</Heading>')
    .replace(/^## (.*$)/gm, '<Heading as="h2" size="lg" mb={6} mt={10} color={headingColor} borderBottom="3px solid" borderColor={borderColor} pb={3}>$1</Heading>')
    .replace(/^# (.*$)/gm, '<Heading as="h1" size="xl" mb={6} mt={8} color={headingColor} textAlign="center">$1</Heading>')
    
    // Paragraphs with better spacing and typography
    .replace(/^(?!<|$)(.*$)/gm, '<Text mb={6} fontSize="lg" lineHeight="1.8" color={textColor}>$1</Text>')
    
    // Bold text with better styling
    .replace(/\*\*(.*?)\*\*/g, '<Text as="strong" color={headingColor} fontWeight="bold">$1</Text>')
    
    // Italic text
    .replace(/\*(.*?)\*/g, '<Text as="em" fontStyle="italic" color={headingColor}>$1</Text>')
    
    // Links with better styling
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<Link href="$2" color={headingColor} fontWeight="semibold" textDecoration="underline" _hover={{ color: headingColor, textDecoration: "none" }} isExternal>$1</Link>')
    
    // Line breaks
    .replace(/\n\n/g, '\n')
    .replace(/\n/g, '\n              ');

  return jsxContent;
};

// Function to generate blog post data object
const generateBlogPostData = (markdownData, id) => {
  const { frontmatter, content } = markdownData;
  
  return {
    id: id,
    title: frontmatter.title || 'Untitled Post',
    slug: frontmatter.slug,
    excerpt: frontmatter.excerpt || content.substring(0, 200) + '...',
    content: content,
    author: frontmatter.author || 'Jose Zaragoza',
    publishDate: frontmatter.publishDate,
    publishDateFormatted: frontmatter.publishDateFormatted,
    modifiedDate: frontmatter.modifiedDate,
    image: frontmatter.image || '/default-blog-image.jpg',
    tags: frontmatter.tags || [],
    categories: frontmatter.categories || ['Uncategorized'],
    readTime: frontmatter.readTime,
    featured: frontmatter.featured || false,
    relatedMovie: frontmatter.relatedMovie || null
  };
};

// Function to generate React component from markdown
const generateBlogComponent = (markdownData) => {
  const { frontmatter, content } = markdownData;
  const jsxContent = markdownToJSX(content);
  
  const componentTemplate = `/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Heading, Text, Stack, Box, HStack, VStack, Badge, Wrap, WrapItem, Image, Divider, Link, Flex, useColorModeValue } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import SEO from "../../components/SEO";
import { blogPostsData, getBlogPostStructuredData, getRelatedPosts } from "../../utils/blogData";

export default function ${frontmatter.slug.replace(/-/g, '').replace(/^./, str => str.toUpperCase())}() {
  const post = blogPostsData.find(p => p.slug === "${frontmatter.slug}");
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
        title={\`\${post.title} - Horror Glass Blog\`}
        description={post.excerpt}
        keywords={post.tags.join(", ") + ", horror blog, film analysis"}
        publishedTime={post.publishDate}
        modifiedTime={post.modifiedDate}
        author={post.author}
        type="article"
        image={post.image}
        structuredData={postStructuredData}
        canonical={\`https://horrorglassPodcast.com/Blog/\${post.slug}\`}
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
                      alt={\`Featured image for \${post.title}\`}
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
                  ${jsxContent}
                </Box>
              </Box>

              ${frontmatter.relatedMovie ? `
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
              ` : ''}

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
                        <NextLink key={relatedPost.id} href={\`/Blog/\${relatedPost.slug}\`}>
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
}`;

  return componentTemplate;
};

module.exports = {
  parseMarkdownFile,
  generateBlogPostData,
  generateBlogComponent,
  markdownToJSX
};
