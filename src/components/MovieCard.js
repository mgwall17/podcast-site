// MovieCard.js
import { Box, Image, Text, Badge,Center, Divider, } from '@chakra-ui/react';

const MovieCard = ({ title, image, dateReleased, director, summary, comingSoon, premier_date, guest, publish_date, isPublished, iframe }) => {
  return (
    <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bgColor={"gray.700"}>
      <Box as="img" src={image} alt={title} />
      {comingSoon && (
          <Center>
          <Badge colorScheme="purple" fontSize="lg" p={4} mb={4} width="100%">
            <Text align="center">Episode Releases {premier_date}</Text>
          </Badge>
          </Center>
        )}
      <Box>
        {isPublished && (
          <Center>
          <Badge colorScheme="green" fontSize="lg" p={4} mb={4} width="100%">
            <Text align="center">Uploaded {publish_date}</Text>
          </Badge>
          </Center>
        )}
        <Text fontSize="2xl" fontWeight="bold" px={2}>
          {title}
        </Text>
        {isPublished && (
          <Box p={2}>
            {iframe}
          </Box>
        )}
        <Text p={2} as='b'>Episode Summary</Text>
        <Text p={2}>{guest}</Text>
        <Divider my={2} />
        <Text p={2} as='b'>Movie Summary</Text>
        <Text p={2} fontSize="md" color="gray.200">
         Director: {director} <br/> Released: {dateReleased}
       </Text>
        <Text p={2} fontSize="md">
          {summary}
        </Text>
      </Box>
    </Box>
  );
};

export default MovieCard;