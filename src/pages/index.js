/* eslint-disable react/no-unescaped-entities */
import { Inter } from 'next/font/google'
import { Heading,Container, Hide, Center,HStack, StackDivider, VStack, Stack, Text, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Container m={4}>
      <Stack>
      <Center>
          <Heading textAlign={'center'}>Welcome to the <br/> Horror Glass Podcast</Heading>
        </Center>
        <Hide below="lg">
        <Center mt={4}>
          <Box as="img" src="HPG_Logo_Purple.png" width={'200px'} height={'200px'} alt="Horror Glass Podcast" />
        </Center></Hide>
      </Stack>
      <Center>
        <VStack divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch' mt={[8,2,2]} p={[0,4,8]} w={['100vw', '70vw', '75vw']}>
          <Box>
            <Center>
              <Stack>
          <Heading p={2} align={'center'} mb={2} as="p" size="xl" >Calling All Horror Fans!
          </Heading> 
            <Text >
           My name is Jose Zaragoza, and as a fellow lover of all things scary, I'm thrilled to invite you on a journey through the world of horror movies. In each episode, I sit down with a random guest who, like you and me, has been profoundly impacted by a particular horror film. Together, we unravel the psychological layers that make these movies so captivating.
          </Text>
          </Stack>
          </Center>
          <Heading  mt={8} align={'center'}>So what is Horror Glass about?</Heading></Box>
          <Box>
          <HStack><MoonIcon color={"purple.100"} /><Heading mb={2} as="h3" size="md">Sharing Chills</Heading></HStack>
            <Text>
              Join me once a month as I chat with a diverse range of guests—die-hard horror fans, first-time thrill-seekers, and everyone in between. We go beyond the standard movie review, digging into personal experiences, unexpected twists, and the lasting impressions these films leave on our minds.
            </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"purple.200"} /><Heading mb={2} as="h3" size="md">Unveiling Personal Fears</Heading></HStack>
          <Text>
            Horror Glass is all about unmasking the fears that resonate on a personal level. I'm here to share the untold stories behind the screams and explore the ways in which these films have left an indelible mark on the lives of my guests—and, hopefully, on yours too.
          </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"purple.300"} /><Heading mb={2} as="h3" size="md">Meet Our Fearful Community</Heading></HStack>
          <Text>
            Our guests are as diverse as the horror genre itself. Artists, academics, and everyday fans. Everyone is invited to join the conversation. Share your thoughts, become part of a community where our collective love for horror binds us together, and experience the profound impact that these movies have on real people.
          </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"purple.400"} /><Heading mb={2} as="h3" size="md">Never Miss a Terrifying Tale</Heading></HStack>
          <Text>
            Don't want to miss out on the scares and insights? Subscribe to Horror Glass Podcast and join me each month for a new guest, a new movie, and a fresh exploration of the psychological terrain that makes horror cinema so uniquely captivating.
          </Text>
          </Box>
        </VStack>
      </Center>
    </Container>
  )
}
