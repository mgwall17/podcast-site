"use client";
import { useState, useMemo } from "react";
import { Container, Heading, Stack, Text, Box, VStack, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import SearchAndFilter from "../components/SearchAndFilter";
import SEO from "../components/SEO";
import { episodesData, sortEpisodes, filterEpisodes, getAllGenres, getEpisodeStructuredData } from "../utils/episodeData";

export default function Episodes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filters, setFilters] = useState({
    status: "all",
    genre: "all"
  });
  const [expandedCard, setExpandedCard] = useState(null);

  const genres = getAllGenres(episodesData);

  const filteredAndSortedEpisodes = useMemo(() => {
    let filtered = filterEpisodes(episodesData, { ...filters, search: searchTerm });
    return sortEpisodes(filtered, sortBy, sortOrder);
  }, [searchTerm, sortBy, sortOrder, filters]);

  const liveEpisodes = filteredAndSortedEpisodes.filter(ep => ep.isPublished);
  const upcomingEpisodes = filteredAndSortedEpisodes.filter(ep => !ep.isPublished);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilters({ status: "all", genre: "all" });
    setSortBy("date");
    setSortOrder("asc");
  };

  const handleCardToggle = (episodeId) => {
    setExpandedCard(expandedCard === episodeId ? null : episodeId);
  };

  const episodesStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Horror Glass Podcast Episodes",
    "description": "Browse all episodes of Horror Glass Podcast, featuring in-depth discussions about horror films and their psychological impact.",
    "url": "https://horrorglassPodcast.com/episodes",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredAndSortedEpisodes.map((episode, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": getEpisodeStructuredData(episode)
      }))
    }
  };

  return (
    <>
      <SEO
        title="Episodes - Horror Glass Podcast"
        description="Browse all episodes of Horror Glass Podcast. Join Jose Zaragoza as he explores the psychological impact of horror films with diverse guests, from classic thrillers to modern scares."
        keywords="horror podcast episodes, horror movie discussions, psychological horror, film analysis, podcast archive"
        structuredData={episodesStructuredData}
        canonical="https://horrorglassPodcast.com/episodes"
      />
      
      <Container maxW="6xl" as="main">
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Horror Glass Podcast Episodes
            </Heading>
            <Text fontSize="lg" maxW="2xl" mx="auto">
              Explore the collection of horror film discussions, featuring psychological insights, 
              guest perspectives, and deep dives.
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
            filterOptions={{ genres }}
            resultCount={filteredAndSortedEpisodes.length}
            onClearFilters={handleClearFilters}
            type="episodes"
          />

          {filteredAndSortedEpisodes.length === 0 ? (
            <Box textAlign="center" py={8}>
              <Text fontSize="lg" color="gray.500">
                No episodes found matching your criteria.
              </Text>
              <Text fontSize="md" color="gray.400" mt={2}>
                Try adjusting your search terms or filters.
              </Text>
            </Box>
          ) : (
            <Stack spacing={8}>
              {/* Live Episodes */}
              {liveEpisodes.length > 0 && (
                <Box as="section" aria-labelledby="live-episodes">
                  <Heading 
                    id="live-episodes"
                    as="h2" 
                    size="lg" 
                    textAlign="center" 
                    mb={6}
                  >
                    Live Episodes ({liveEpisodes.length})
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {liveEpisodes.map((episode) => (
                      <MovieCard
                        key={episode.id}
                        title={episode.title}
                        image={episode.image}
                        dateReleased={episode.movieYear}
                        director={episode.director}
                        summary={episode.summary}
                        comingSoon={false}
                        isPublished={episode.isPublished}
                        publish_date={episode.publishDateFormatted}
                        guest={episode.guest}
                        iframe={episode.spotifyEmbed}
                        genres={episode.genres}
                        scareLevel={episode.scareLevel}
                        triggerWarnings={episode.triggerWarnings}
                        duration={episode.duration}
                        episodeNumber={episode.episodeNumber}
                        isExpanded={expandedCard === episode.id}
                        onToggle={() => handleCardToggle(episode.id)}
                      />
                    ))}
                  </SimpleGrid>
                </Box>
              )}

              {/* Upcoming Episodes */}
              <Box as="section" aria-labelledby="upcoming-episodes">
                <Heading 
                  id="upcoming-episodes"
                  as="h2" 
                  size="lg" 
                  textAlign="center" 
                  mb={6}
                >
                  Upcoming Episodes ({upcomingEpisodes.length})
                </Heading>
                {upcomingEpisodes.length > 0 ? (
                  <SimpleGrid columns={{ base: 1, md: 1, lg:2 }} spacing={6}>
                    {upcomingEpisodes.map((episode) => (
                      <MovieCard
                        key={episode.id}
                        title={episode.title}
                        image={episode.image}
                        dateReleased={episode.movieYear}
                        director={episode.director}
                        summary={episode.summary}
                        comingSoon={true}
                        premier_date={episode.publishDateFormatted}
                        guest={episode.guest}
                        genres={episode.genres}
                        scareLevel={episode.scareLevel}
                        triggerWarnings={episode.triggerWarnings}
                        duration={episode.duration}
                        episodeNumber={episode.episodeNumber}
                        isExpanded={expandedCard === episode.id}
                        onToggle={() => handleCardToggle(episode.id)}
                      />
                    ))}
                  </SimpleGrid>
                ) : (
                  <Box textAlign="center" py={8}>
                    <Text fontSize="md" color="gray.500">
                      No upcoming episodes match your search criteria.
                    </Text>
                  </Box>
                )}
              </Box>
            </Stack>
          )}
        </VStack>
      </Container>
    </>
  );
}
