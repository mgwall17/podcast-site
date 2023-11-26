import { Inter } from 'next/font/google'
import { Heading, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Heading>Welcome to the Horror Glass Podcast</Heading>
    </>
  )
}
