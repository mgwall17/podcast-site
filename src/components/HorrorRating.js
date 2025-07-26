import { Box, HStack, VStack, Text, Badge, Tooltip, Icon } from '@chakra-ui/react';
import { StarIcon, WarningIcon } from '@chakra-ui/icons';

const HorrorRating = ({ 
  scareLevel, 
  genres = [], 
  triggerWarnings = [], 
  showLabels = true,
  size = "md" 
}) => {
  const renderScareLevel = (level) => {
    const stars = Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        color={i < level ? "red.400" : "gray.200"}
        boxSize={size === "sm" ? 3 : size === "lg" ? 5 : 4}
        aria-hidden="true"
      />
    ));

    return (
      <Tooltip 
        label={`Scare Level: ${level}/5 - ${getScareDescription(level)}`}
        placement="top"
      >
        <HStack spacing={1} cursor="help">
          {stars}
          {showLabels && (
            <Text fontSize={size === "sm" ? "xs" : "sm"} color="gray.600" ml={2}>
              ({level}/5)
            </Text>
          )}
        </HStack>
      </Tooltip>
    );
  };

  const getScareDescription = (level) => {
    const descriptions = {
      1: "Mild - Suitable for most viewers",
      2: "Light - Some suspenseful moments",
      3: "Moderate - Genuinely scary scenes",
      4: "High - Intense horror content",
      5: "Extreme - Very disturbing content"
    };
    return descriptions[level] || "Not rated";
  };

  const getGenreColor = (genre) => {
    const colorMap = {
      "Psychological Horror": "purple",
      "Body Horror": "red",
      "Supernatural Horror": "blue",
      "Slasher": "orange",
      "Gothic Horror": "gray",
      "Sci-Fi Horror": "teal",
      "Classic Horror": "yellow",
      "Thriller": "green",
      "Creature Feature": "brown",
      "Mystery Horror": "cyan"
    };
    return colorMap[genre] || "gray";
  };

  return (
    <VStack align="start" spacing={3}>
      {/* Scare Level */}
      {scareLevel && (
        <Box>
          {showLabels && (
            <Text fontSize="sm" fontWeight="semibold" mb={1}>
              Scare Level:
            </Text>
          )}
          {renderScareLevel(scareLevel)}
        </Box>
      )}

      {/* Genres */}
      {genres.length > 0 && (
        <Box>
          {showLabels && (
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Horror Subgenres:
            </Text>
          )}
          <HStack wrap="wrap" spacing={2}>
            {genres.map((genre, index) => (
              <Badge
                key={index}
                colorScheme={getGenreColor(genre)}
                variant="subtle"
                size={size}
                borderRadius="full"
              >
                {genre}
              </Badge>
            ))}
          </HStack>
        </Box>
      )}

      {/* Trigger Warnings */}
      {triggerWarnings.length > 0 && (
        <Box>
          <HStack mb={2}>
            <WarningIcon color="orange.500" boxSize={4} />
            {showLabels && (
              <Text fontSize="sm" fontWeight="semibold" color="orange.600">
                Content Warnings:
              </Text>
            )}
          </HStack>
          <HStack wrap="wrap" spacing={2}>
            {triggerWarnings.map((warning, index) => (
              <Badge
                key={index}
                colorScheme="orange"
                variant="outline"
                size={size}
                borderRadius="full"
              >
                {warning}
              </Badge>
            ))}
          </HStack>
        </Box>
      )}
    </VStack>
  );
};

export default HorrorRating;
