import { Inter } from 'next/font/google'
import { Heading,Hide, Center,HStack, StackDivider, VStack, Stack, Text, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Box m={4}>
      <Stack>
      <Center>
          <Heading textAlign={'center'}>Welcome to the <br/> Horror Glass Podcast</Heading>
        </Center>
        <Hide below="sm">
        <Center mt={4}>
          <Box as="img" src="HPG_Logo.png" width={'200px'} height={'200px'} alt="Horror Glass Podcast" />
        </Center></Hide>
      </Stack>
      <Center>
        <VStack divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch' mt={[8,2,2]} p={[0,4,8]} w={['100vw', '70vw', '75vw']}>
          <Box>
            <Center>
              <Stack>
          <Heading align={'center'} mb={2} as="p" size="2xl">Calling all horror fans!
          </Heading> 
            <Text fontSize='2xl' align={'center'} >
           My name is Jose Zaragoza, and as a fellow lover of all things eerie, I am thrilled to invite you on a journey through the world of horror movies. In each episode, I sit down with a random guest who, like you and me, has been profoundly impacted by a particular horror film. Together, we unravel the psychological layers that make these movies so captivating.
          </Text>
          </Stack>
          </Center>
          </Box>
          <Heading align={'center'}>So what is Horror Glass about?</Heading>
          <Box>
          <HStack><MoonIcon color={"orange"} /><Heading mb={2} as="h3" size="md">Sharing Chills</Heading></HStack>
            <Text>
              Join me every week as I chat with a diverse range of guests—die-hard horror fans, first-time thrill-seekers, and everyone in between. We go beyond the standard movie review, digging into personal experiences, unexpected twists, and the lasting impressions these films leave on our minds.
            </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"orange"} /><Heading mb={2} as="h3" size="md">Unveiling Personal Fears</Heading></HStack>
          <Text>
            Horror Glass is all about unmasking the fears that resonate on a personal level. I am here to share the untold stories behind the screams and explore the ways in which these films have left an indelible mark on the lives of my guests—and, hopefully, on yours too.
          </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"orange"} /><Heading mb={2} as="h3" size="md">Meet Our Fearful Community</Heading></HStack>
          <Text>
            Our guests are as diverse as the horror genre itself. Artists, academics, and everyday fans. Everyone is invited to join the conversation. Share your thoughts, become part of a community where our collective love for horror binds us together, and experience the profound impact that these movies have on real people.
          </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"orange"} /><Heading mb={2} as="h3" size="md">Never Miss a Terrifying Tale</Heading></HStack>
          <Text>
            Do not want to miss out on the scares and insights? Subscribe to Horror Glass Podcast and join me each month for a new guest, a new movie, and a fresh exploration of the psychological terrain that makes horror cinema so uniquely captivating.
          </Text>
          </Box>
          <Box>
          <HStack><MoonIcon color={"orange"} /><Heading mb={2} as="h3" size="md">Step into Nightmares and Beyond</Heading></HStack>
          <Text>
            Are you ready to step into the nightmares of our guests? Join the conversation on Horror Glass Podcast, where the chills are as real as the stories we unravel. The shadows are beckoning, and the stories are about to unfold— do not miss out on this journey into the heart of horror.
          </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  )
}
