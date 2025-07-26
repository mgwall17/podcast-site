"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Container, 
  Box, 
  Text, 
  Heading, 
  Stack, 
  VStack, 
  HStack,
  Badge,
  Wrap,
  WrapItem,
  Image,
  Divider,
  SimpleGrid
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import SearchAndFilter from "../components/SearchAndFilter";
import SEO from "../components/SEO";
import { 
  blogPostsData, 
  sortBlogPosts, 
  filterBlogPosts, 
  getAllCategories, 
  getAllTags,
  getBlogPostStructuredData 
} from "../utils/blogData";

const BlogPostCard = ({ post }) => {
  return (
    <Box
      as="article"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
      transition="all 0.2s"
      role="article"
      aria-labelledby={`blog-title-${post.id}`}
    >
      <Link href={`/Blog/${post.slug}`} passHref>
        <Box cursor="pointer">
          {post.image && (
            <Image
              src={post.image}
              alt={`Featured image for ${post.title}`}
              height="200px"
              width="100%"
              objectFit="cover"
              loading="lazy"
            />
          )}
          
          <Box p={6}>
            <VStack align="start" spacing={3}>
              {/* Featured Badge */}
              {post.featured && (
                <Badge colorScheme="purple" variant="solid">
                  Featured
                </Badge>
              )}

              {/* Title */}
              <Heading 
                id={`blog-title-${post.id}`}
                as="h2" 
                size="lg" 
                lineHeight="shorter"
                _hover={{ color: "purple.600" }}
              >
                {post.title}
              </Heading>

              {/* Meta Information */}
              <HStack spacing={4} fontSize="sm" color="gray.400">
                <HStack spacing={1}>
                  <CalendarIcon />
                  <Text as="time" dateTime={post.publishDate}>
                    {post.publishDateFormatted}
                  </Text>
                </HStack>
                <HStack spacing={1}>
                  <TimeIcon />
                  <Text>{post.readTime}</Text>
                </HStack>
              </HStack>

              {/* Author */}
              <Text fontSize="sm" fontStyle="italic" color="gray.400">
                By {post.author}
              </Text>

              {/* Excerpt */}
              <Text color="gray.300" noOfLines={3}>
                {post.excerpt}
              </Text>

              {/* Tags */}
              <Wrap>
                {post.tags.slice(0, 3).map((tag, index) => (
                  <WrapItem key={index}>
                    <Badge colorScheme="gray" variant="subtle" size="sm">
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
                {post.tags.length > 3 && (
                  <WrapItem>
                    <Badge colorScheme="gray" variant="subtle" size="sm">
                      +{post.tags.length - 3} more
                    </Badge>
                  </WrapItem>
                )}
              </Wrap>

              {/* Categories */}
              <HStack>
                <Text fontSize="sm" fontWeight="semibold">
                  Categories:
                </Text>
                <Wrap>
                  {post.categories.map((category, index) => (
                    <WrapItem key={index}>
                      <Badge colorScheme="purple" variant="outline" size="sm">
                        {category}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filters, setFilters] = useState({
    category: "all",
    tag: "all"
  });

  const categories = getAllCategories();
  const tags = getAllTags();

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = filterBlogPosts(blogPostsData, { ...filters, search: searchTerm });
    return sortBlogPosts(filtered, sortBy, sortOrder);
  }, [searchTerm, sortBy, sortOrder, filters]);

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilters({ category: "all", tag: "all" });
    setSortBy("date");
    setSortOrder("desc");
  };

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Horror Glass Blog",
    "description": "In-depth analysis and commentary on horror films, exploring the psychological impact and cultural significance of the genre's most influential movies.",
    "url": "https://horrorglassPodcast.com/blog",
    "author": {
      "@type": "Person",
      "name": "Jose Zaragoza"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Horror Glass Podcast"
    },
    "blogPost": filteredAndSortedPosts.map(post => getBlogPostStructuredData(post))
  };

  return (
    <>
      <SEO
        title="Blog - Horror Glass Podcast"
        description="Read in-depth analysis and commentary on horror films. Explore the psychological impact and cultural significance of the genre's most influential movies."
        keywords="horror blog, horror movie analysis, film criticism, psychological horror, horror film reviews"
        structuredData={blogStructuredData}
        canonical="https://horrorglassPodcast.com/blog"
      />

      <Container maxW="6xl" as="main">
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Horror Glass Blog
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl" mx="auto">
              Dive deep into the world of horror cinema with our analytical essays, film reviews, 
              and explorations of the psychological themes that make horror so compelling.
            </Text>
          </Box>

          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            filters={filters}
            onFilterChange={handleFilterChange}
            filterOptions={{ categories, tags }}
            resultCount={filteredAndSortedPosts.length}
            onClearFilters={handleClearFilters}
            type="blog"
          />

          {filteredAndSortedPosts.length === 0 ? (
            <Box textAlign="center" py={8}>
              <Text fontSize="lg" color="gray.500">
                No blog posts found matching your criteria.
              </Text>
              <Text fontSize="md" color="gray.400" mt={2}>
                Try adjusting your search terms or filters.
              </Text>
            </Box>
          ) : (
            <Stack spacing={8}>
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <Box as="section" aria-labelledby="featured-posts">
                  <Heading 
                    id="featured-posts"
                    as="h2" 
                    size="lg" 
                    textAlign="center" 
                    mb={6}
                    color="purple.100"
                  >
                    Featured Posts
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {featuredPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </SimpleGrid>
                  {regularPosts.length > 0 && <Divider my={8} />}
                </Box>
              )}

              {/* Regular Posts */}
              {regularPosts.length > 0 && (
                <Box as="section" aria-labelledby="all-posts">
                  {featuredPosts.length > 0 && (
                    <Heading 
                      id="all-posts"
                      as="h2" 
                      size="lg" 
                      textAlign="center" 
                      mb={6}
                      color="purple.400"
                    >
                      All Posts
                    </Heading>
                  )}
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {regularPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </SimpleGrid>
                </Box>
              )}
            </Stack>
          )}
        </VStack>
      </Container>
    </>
  );
}
