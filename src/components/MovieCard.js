// MovieCard.js
import { Box, Image, Text, Badge, Center, Divider, Wrap, WrapItem, HStack, VStack, Flex, Collapse, Button, useDisclosure } from '@chakra-ui/react';
import { StarIcon, CalendarIcon, TimeIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const MovieCard = ({ 
  title, 
  image, 
  dateReleased, 
  director, 
  summary, 
  comingSoon, 
  premier_date, 
  guest, 
  publish_date, 
  isPublished, 
  iframe,
  genres = [],
  scareLevel,
  triggerWarnings = [],
  duration,
  episodeNumber,
  isExpanded = false,
  onToggle
}) => {

  const renderScareLevel = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        color={i < level ? "red.400" : "gray.200"}
        boxSize={3}
        aria-hidden="true"
      />
    ));
  };

  return (
    <Box 
      as="article"
      maxW="100%" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="lg"
      role="article"
      aria-labelledby={`episode-title-${episodeNumber}`}
      cursor="pointer"
      onClick={onToggle}
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
      transition="all 0.2s"
    >
      {/* Collapsed State - Responsive Layout */}
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="stretch" 
        minHeight={{ base: "auto", md: isExpanded ? "auto" : "400px" }}
        minWidth="auto"
      >
        {/* Image Section - Responsive */}
        <Box 
          flexShrink={0}
          width={{ base: "100%", md: "200px" }}
          height={{ base: "300px", md: "100%" }}
          overflow="hidden"
        >
          <Box 
            as="img" 
            src={image} 
            alt={`Movie poster for ${title ? title.replace(/Episode \d+: /, '') : 'Unknown Episode'}`}
            width="100%"
            height="100%"
            minHeight={{ base: "300px", md: "400px" }}
            objectFit="cover"
            loading="lazy"
          />
        </Box>
        
        {/* Collapsed Content Section */}
        <Box flex="1" p={4}>
          <VStack align="start" spacing={2}>
            {comingSoon && (
              <Badge 
                colorScheme="purple" 
                fontSize="sm" 
                p={2}
                role="status"
                aria-label={`Coming ${premier_date}`}
              >
                Coming {premier_date}
              </Badge>
            )}
            
            <Box width="100%">
              <HStack justify="space-between" align="start">
                <VStack align="start" spacing={1} flex="1">
                  <Text 
                    id={`episode-title-${episodeNumber}`}
                    as="h2" 
                    fontSize="lg" 
                    fontWeight="bold"
                    lineHeight="1.2"
                  >
                    {title}
                  </Text>
                  
                  {isPublished && (
                    <HStack spacing={2} color="gray.600" fontSize="sm">
                      <CalendarIcon />
                      <Text as="time" dateTime={publish_date}>
                        {publish_date}
                      </Text>
                      {duration && (
                        <>
                          <TimeIcon />
                          <Text>{duration}</Text>
                        </>
                      )}
                    </HStack>
                  )}

                  {/* Genre Tags - Collapsed */}
                  {genres.length > 0 && (
                    <Wrap>
                      {genres.slice(0, 3).map((genre, index) => (
                        <WrapItem key={index}>
                          <Badge colorScheme="purple" variant="subtle" size="sm">
                            {genre}
                          </Badge>
                        </WrapItem>
                      ))}
                      {genres.length > 3 && (
                        <WrapItem>
                          <Badge colorScheme="gray" variant="subtle" size="sm">
                            +{genres.length - 3} more
                          </Badge>
                        </WrapItem>
                      )}
                    </Wrap>
                  )}

                  {/* Scare Level - Collapsed */}
                  {scareLevel && (
                    <HStack>
                      {renderScareLevel(scareLevel)}
                      <Text fontSize="sm" color="gray.600" ml={1}>
                        ({scareLevel}/5)
                      </Text>
                    </HStack>
                  )}
                </VStack>

                {/* Expand/Collapse Indicator */}
                <Box
                  aria-expanded={isExpanded}
                  aria-controls={`episode-details-${episodeNumber}`}
                  color="gray.400"
                >
                  {isExpanded ? <ChevronUpIcon boxSize={5} /> : <ChevronDownIcon boxSize={5} />}
                </Box>
              </HStack>

              {/* Spotify Embed - Collapsed (for published episodes) */}
              {isPublished && iframe && (
                <Box 
                  width="100%" 
                  mt={3} 
                  mb={2}
                  role="region" 
                  aria-label="Podcast episode player"
                  overflow="visible"
                  minHeight="152px"
                  sx={{
                    '& iframe': {
                      width: '100%',
                      height: '152px',
                      border: 'none',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: iframe }} />
                </Box>
              )}
              
                <Box mt={3}>
                  <Text as="h3" fontSize="md" fontWeight="bold" mb={1}>
                    Episode Summary
                  </Text>
                  <Text fontSize="sm">
                    {guest}
                  </Text>
                </Box>
            
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Expanded Content */}
      <Collapse in={isExpanded} animateOpacity>
        <Box 
          id={`episode-details-${episodeNumber}`}
          p={4} 
          borderTop="1px solid" 
          borderColor="gray.200"
        >
          <VStack align="start" spacing={4}>
            {/* All Genre Tags - Expanded */}
            {genres.length > 3 && (
              <Box>
                <Text fontSize="sm" fontWeight="semibold" mb={2}>
                  All Genres:
                </Text>
                <Wrap>
                  {genres.map((genre, index) => (
                    <WrapItem key={index}>
                      <Badge colorScheme="purple" variant="subtle" size="sm">
                        {genre}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            )}

            {/* Movie Summary */}
            <Box>
              <Text as="h3" fontSize="lg" fontWeight="bold" mb={2}>
                Movie Summary
              </Text>
              <Text fontSize="md" mb={2}>
                <Text as="span" fontWeight="semibold">Director:</Text> {director} <br/>
                <Text as="span" fontWeight="semibold">Released:</Text> {dateReleased}
              </Text>
              <Text fontSize="md">{summary}</Text>
            </Box>

            {/* Trigger Warnings */}
            {triggerWarnings.length > 0 && (
              <Box>
                <Text fontSize="sm" fontWeight="semibold" mb={2} color="orange.600">
                  Content Warnings:
                </Text>
                <Wrap>
                  {triggerWarnings.map((warning, index) => (
                    <WrapItem key={index}>
                      <Badge colorScheme="orange" variant="subtle" size="sm">
                        {warning}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            )}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MovieCard;
