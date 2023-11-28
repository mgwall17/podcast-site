import { Inter } from 'next/font/google'
import { Heading, Center, StackDivider, VStack, Stack, Text, Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box m={4}>
      <Stack>
        <Center>
          <Box as="img" src="HPG_Logo.png" width={'200px'} height={'200px'} alt="Horror Glass Podcast" />
        </Center>
        <Center>
          <Heading>Welcome to the Horror Glass Podcast</Heading>
        </Center>
      </Stack>
      <Center>
        <VStack divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch' p={8} maxW={'65vw'}>
          <Box>
          <Heading mb={2} as="p" size="md">Hey there, horror enthusiasts! I'm your host, Jose!
          </Heading> 
            <Text>
           I'm a fellow lover of all things eerie, and I'm thrilled to invite you on a captivating journey through the world of horror movies. Each episode, I sit down with a random guest who, like you and me, has been profoundly impacted by a particular horror film. Together, we unravel the psychological layers that make these movies so captivating.
          </Text>
          </Box>
          <Box>
            <Heading mb={2} as="h3" size="md">Sharing Chills</Heading>
            <Text>
              Join me every week as I chat with a diverse range of guests—die-hard horror fans, first-time thrill-seekers, and everyone in between. We go beyond the standard movie review, digging into personal experiences, unexpected twists, and the lasting impressions these films leave on our minds.
            </Text>
          </Box>
          <Box>
          <Heading mb={2} as="h3" size="md">Unveiling Personal Fears</Heading>
          <Text>
            Horror Glass is all about unmasking the fears that resonate on a personal level. I'm here to share the untold stories behind the screams and explore the ways in which these films have left an indelible mark on the lives of my guests—and, hopefully, on yours too.
          </Text>
          </Box>
          <Box>
          <Heading mb={2} as="h3" size="md">Meet Our Fearful Community</Heading>
          <Text>
            Our guests are as diverse as the horror genre itself. Artists, academics, and everyday fans. Everyone is invited to join the conversation. Share your thoughts, become part of a community where our collective love for horror binds us together, and experience the profound impact that these movies have on real people.
          </Text>
          </Box>
          <Box>
          <Heading mb={2} as="h3" size="md">Never Miss a Terrifying Tale</Heading>
          <Text>
            Don't want to miss out on the scares and insights? Subscribe to Horror Glass Podcast and join me each month for a new guest, a new movie, and a fresh exploration of the psychological terrain that makes horror cinema so uniquely captivating.
          </Text>
          </Box>
          <Box>
          <Heading mb={2} as="h3" size="md">Step into Nightmares and Beyond</Heading>
          <Text>
            Are you ready to step into the nightmares of our guests? Join the conversation on Horror Glass Podcast, where the chills are as real as the stories we unravel. The shadows are beckoning, and the stories are about to unfold—don't miss out on this journey into the heart of horror.
          </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  )
}
