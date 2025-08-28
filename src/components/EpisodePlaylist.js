import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Image, 
  Button, 
  Flex,
  Badge,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { TriangleUpIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import Link from 'next/link';

// Custom Play Icon Component
const PlayIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8 5v14l11-7z"
    />
  </Icon>
);

const EpisodePlaylistItem = ({ episode }) => { 
  return (
    <VStack spacing={4} align="stretch" role="listitem">
      <Flex
        p={3}
        borderRadius="md"
        align="center"
        gap={4}
      >

        {/* Episode Info */}
        <VStack align="start" spacing={1} flex="1" minW="0">
          <Text
            fontSize="md"
            fontWeight="semibold"
            noOfLines={1}
            title={episode.title}
          >
            {episode.title}
          </Text>
          <Text
            fontSize="sm"
            noOfLines={1}
            title={episode.guest}
          >
            {episode.guest}
          </Text>
          <HStack spacing={3} fontSize="xs">
            <HStack spacing={1}>
              <CalendarIcon boxSize={3} />
              <Text>{episode.publishDateFormatted}</Text>
            </HStack>
            {episode.duration && (
              <HStack spacing={1}>
                <TimeIcon boxSize={3} />
                <Text>{episode.duration}</Text>
              </HStack>
            )}
          </HStack>
        </VStack>

        {/* Genre Badge */}
        {episode.genres && episode.genres.length > 0 && (
          <Badge
            colorScheme="purple"
            variant="subtle"
            fontSize="xs"
            display={{ base: 'none', md: 'inline-flex' }}
          >
            {episode.genres[0]}
          </Badge>
        )}
      </Flex>

      {/* Spotify Embed */}
      {episode.spotifyEmbed && (
        <Box px={3} pb={3}>
          <Box
            dangerouslySetInnerHTML={{ __html: episode.spotifyEmbed }}
            sx={{
              '& iframe': {
                width: '100%',
                height: '152px',
                borderRadius: '12px',
                border: 'none'
              }
            }}
          />
        </Box>
      )}
    </VStack>
  );
};

const EpisodePlaylist = ({ episodes = [], title = "Recent Episodes" }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      overflow="hidden"
      boxShadow="lg"
    >
      {/* Playlist Header */}
      <Box p={6} borderBottom="1px solid" borderColor={borderColor}>
        <HStack justify="space-between" align="center">
          <VStack align="start" spacing={1}>
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {episodes.length} episode{episodes.length !== 1 ? 's' : ''}
            </Text>
          </VStack>
          <Button
            as={Link}
            href="/Episodes"
            colorScheme="purple"
            variant="outline"
            size="sm"
          >
            View All Episodes
          </Button>
        </HStack>
      </Box>

      {/* Episodes List */}
      <VStack spacing={0} align="stretch" role="list">
        {episodes.map((episode, index) => (
          <EpisodePlaylistItem
            key={episode.id}
            episode={episode}
            index={index}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default EpisodePlaylist;
