import React from 'react';
import { Box,Container, Heading,Text, Stack } from '@chakra-ui/react';

export default function Application() {
  return (
<Container>
  <Heading my={4}>Guest Application Form</Heading>
  <Box>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnThXn39uDKhFmFesIzZj8ca6OG7hcr35vIKP21VXU83CdzQ/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="2" marginwidth="2">Loading…</iframe>
</Box>
</Container>
  );
}