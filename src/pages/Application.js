import React from 'react';
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import SEO from "../components/SEO";

export default function Application() {
  return (
    <>
      <SEO
        title="Guest Application Form - Horror Glass Podcast"
        description="Apply to be a guest on Horror Glass Podcast. Share your horror movie story with Jose Zaragoza and our audience."
        keywords="Horror Glass Podcast guest application, podcast guest form, horror movie discussion"
        canonical="https://horrorglassPodcast.com/application"
      />
      
      <Container>
        <Heading my={4}>Guest Application Form</Heading>
        <Box>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScnThXn39uDKhFmFesIzZj8ca6OG7hcr35vIKP21VXU83CdzQ/viewform?embedded=true" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            marginHeight="2" 
            marginWidth="2"
          >
            Loading…
          </iframe>
        </Box>
      </Container>
    </>
  );
}