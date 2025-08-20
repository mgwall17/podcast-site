const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Parse markdown file and extract frontmatter and content
function parseStaticMarkdownFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    return {
      frontmatter,
      content,
      filename: path.basename(filePath, '.md')
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return null;
  }
}

// Generate React component for static pages
function generateStaticPageComponent(markdownData, pageType = 'page') {
  const { frontmatter, content, filename } = markdownData;
  
  // Convert markdown content to JSX (basic conversion)
  const processedContent = content
    .replace(/^# (.+)$/gm, '<Heading as="h1" size="2xl" mb={6}>$1</Heading>')
    .replace(/^## (.+)$/gm, '<Heading as="h2" size="xl" mb={4}>$1</Heading>')
    .replace(/^### (.+)$/gm, '<Heading as="h3" size="lg" mb={3}>$1</Heading>')
    .replace(/\*\*(.+?)\*\*/g, '<Text as="span" fontWeight="bold">$1</Text>')
    .replace(/\*(.+?)\*/g, '<Text as="span" fontStyle="italic">$1</Text>')
    .replace(/^- (.+)$/gm, '• $1')
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      if (line.startsWith('<Heading')) {
        return `            ${line}`;
      } else if (line.startsWith('•')) {
        return `            <Text>${line}</Text>`;
      } else if (!line.startsWith('<')) {
        return `            <Text fontSize="lg" lineHeight="tall" mb={4}>${line}</Text>`;
      }
      return `            ${line}`;
    })
    .join('\n');

  // Generate different component types based on page
  switch (pageType) {
    case 'about':
      return generateAboutComponent(frontmatter, processedContent);
    case 'contact':
      return generateContactComponent(frontmatter, processedContent);
    case 'application':
      return generateApplicationComponent(frontmatter, processedContent);
    default:
      return generateGenericPageComponent(frontmatter, processedContent, filename);
  }
}

function generateAboutComponent(frontmatter, processedContent) {
  const structuredData = generateStructuredData(frontmatter);
  
  return `/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { 
  Container, 
  Box, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  Badge, 
  Image,
  Button,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import SEO from "../components/SEO";

export default function About() {
  const aboutStructuredData = ${JSON.stringify(structuredData, null, 4)};

  return (
    <>
      <SEO
        title="${frontmatter.title}"
        description="${frontmatter.description}"
        keywords="${frontmatter.keywords}"
        structuredData={aboutStructuredData}
        canonical="${frontmatter.canonical}"
      />

      <Container maxW="4xl" as="main">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={6}>
              About Jose Zaragoza
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Host of Horror Glass Podcast, exploring the psychological depths of horror cinema
            </Text>
          </Box>

          {/* Profile Section */}
          <Box as="section" textAlign="center">
            <Image
              src="${frontmatter.profile.image}"
              alt="${frontmatter.profile.alt}"
              width="250px"
              height="250px"
              mx="auto"
              borderRadius="full"
              boxShadow="xl"
              bgGradient="linear(to-t, white, purple.300)"
              mb={6}
              loading="eager"
            />
            
            <Box 
              bg="gray.100" 
              borderRadius="lg" 
              maxW="300px" 
              mx="auto"
              p={4}
              mb={6}
            >
              <Text color="gray.700" fontWeight="semibold" fontSize="lg">
                ${frontmatter.profile.greeting}
              </Text>
            </Box>
          </Box>

          {/* Bio Section */}
          <Box as="section" aria-labelledby="bio-section">
            <Heading id="bio-section" as="h2" size="lg" mb={4} textAlign="center">
              My Story
            </Heading>
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg" lineHeight="tall">
                I'm a recent graduate of the Masters in Digital Marketing program at Arizona State University. 
                Armed with a passion for horror and a freshly minted degree, I've embarked on an expedition 
                to bring you the spine-chilling wonders of my Horror Glass Podcast.
              </Text>
              
              <Text fontSize="lg" lineHeight="tall">
                My fascination with horror films goes beyond the surface scares. I'm deeply interested in 
                the psychological impact these movies have on viewers and how they reflect our deepest fears 
                and anxieties. Through Horror Glass Podcast, I explore these themes with guests who share 
                their personal connections to horror cinema.
              </Text>
            </VStack>
          </Box>

          <Divider />

          {/* Education & Expertise */}
          <Box as="section" aria-labelledby="expertise-section">
            <Heading id="expertise-section" as="h2" size="lg" mb={4} textAlign="center">
              Background & Expertise
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={6}>
              <Box p={6} bg="purple.900" borderRadius="lg">
                <Heading as="h3" size="md" mb={3}>
                  Education
                </Heading>
                <Text>
                  <strong>${frontmatter.education.degree}</strong><br/>
                  ${frontmatter.education.institution}
                </Text>
              </Box>
              
              <Box p={6} bg="purple.900" borderRadius="lg">
                <Heading as="h3" size="md" mb={3}>
                  Specialties
                </Heading>
                <VStack align="start" spacing={1}>
                  ${frontmatter.specialties.map(specialty => `<Text>• ${specialty}</Text>`).join('\n                  ')}
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Connect Section */}
          <Box 
            as="section" 
            bg="gray.900" 
            p={8} 
            borderRadius="lg"
            textAlign="center"
            aria-labelledby="connect-section"
          >
            <Heading id="connect-section" as="h2" size="lg" mb={4} >
              Let's Connect
            </Heading>
            <Text fontSize="lg" mb={6} lineHeight="tall">
              Connect with me to stay updated on the latest episodes, behind-the-scenes content, 
              and insights into the world of horror cinema.
            </Text>
            
            <HStack spacing={4} justify="center" wrap="wrap">
              <Button
                as="a"
                href="${frontmatter.socialLinks.spotify.url}"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="green"
                size="lg"
                rightIcon={<ExternalLinkIcon />}
                aria-label="${frontmatter.socialLinks.spotify.label} (opens in new tab)"
              >
                ${frontmatter.socialLinks.spotify.label}
              </Button>
              
              <Button
                as="a"
                href="${frontmatter.socialLinks.linkedin.url}"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="blue"
                variant="outline"
                size="lg"
                rightIcon={<ExternalLinkIcon />}
                aria-label="${frontmatter.socialLinks.linkedin.label} (opens in new tab)"
              >
                ${frontmatter.socialLinks.linkedin.label}
              </Button>
            </HStack>
          </Box>

          {/* Thank You Section */}
          <Box textAlign="center" py={6}>
            <Text fontSize="xl" fontWeight="semibold" mb={2}>
              Thank you for being a part of the Horror Glass journey!
            </Text>
            <Text fontSize="lg" color="gray.100">
              Your support means everything as we explore the fascinating world of horror cinema together.
            </Text>
          </Box>

          {/* Call to Action */}
          <Box textAlign="center">
            <HStack spacing={4} justify="center" wrap="wrap">
              <Link href="/Episodes">
                <Button colorScheme="purple" size="lg">
                  Listen to Episodes
                </Button>
              </Link>
              <Link href="/Blog">
                <Button variant="outline" colorScheme="purple" size="lg">
                  Read the Blog
                </Button>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
}`;
}

function generateContactComponent(frontmatter, processedContent) {
  return `/* eslint-disable react/no-unescaped-entities */
"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Box, Stack, Text, Button } from "@chakra-ui/react";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="${frontmatter.title}"
        description="${frontmatter.description}"
        keywords="${frontmatter.keywords}"
        canonical="${frontmatter.canonical}"
      />
      
      <Container>
        <Heading as="h1" align="center" my={4}>How to Contact Me</Heading>
        <Box align="center">
          <Box as="img" src="${frontmatter.profile.image}" width={"${frontmatter.profile.width}"} />
        </Box>
        <Text my={4} fontSize={"lg"} align={'center'}>
          ${frontmatter.intro.text}
        </Text>
        <Stack>
          <Button as={Link} href="${frontmatter.contactLinks.spotify.url}" isExternal colorScheme={"${frontmatter.contactLinks.spotify.colorScheme}"}>${frontmatter.contactLinks.spotify.label}</Button>
          <Button as={Link} href="${frontmatter.contactLinks.linkedin.url}" isExternal colorScheme={"${frontmatter.contactLinks.linkedin.colorScheme}"}>${frontmatter.contactLinks.linkedin.label}</Button>
          <Button as={Link} href="${frontmatter.contactLinks.email.url}" isExternal colorScheme={"${frontmatter.contactLinks.email.colorScheme}"}>${frontmatter.contactLinks.email.label}</Button>
        </Stack>
        <Box my={4}>
          <Heading size={"md"} align="center" my={4}>${frontmatter.guestApplication.title}</Heading>
          <Text align="center">${frontmatter.guestApplication.description}</Text>
          <Box align="center">
            <Button m={4} as={Link} href="${frontmatter.guestApplication.buttonUrl}">${frontmatter.guestApplication.buttonText}</Button>
            <Text fontSize={"sm"}>${frontmatter.guestApplication.disclaimer}</Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}`;
}

function generateApplicationComponent(frontmatter, processedContent) {
  return `import React from 'react';
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import SEO from "../components/SEO";

export default function Application() {
  return (
    <>
      <SEO
        title="${frontmatter.title}"
        description="${frontmatter.description}"
        keywords="${frontmatter.keywords}"
        canonical="${frontmatter.canonical}"
      />
      
      <Container>
        <Heading my={4}>Guest Application Form</Heading>
        <Box>
          <iframe 
            src="${frontmatter.googleForm.embedUrl}" 
            width="${frontmatter.googleForm.width}" 
            height="${frontmatter.googleForm.height}" 
            frameBorder="${frontmatter.googleForm.frameborder}" 
            marginHeight="${frontmatter.googleForm.marginheight}" 
            marginWidth="${frontmatter.googleForm.marginwidth}"
          >
            ${frontmatter.googleForm.loadingText}
          </iframe>
        </Box>
      </Container>
    </>
  );
}`;
}

function generateGenericPageComponent(frontmatter, processedContent, filename) {
  const componentName = filename.charAt(0).toUpperCase() + filename.slice(1);
  const structuredData = generateStructuredData(frontmatter);
  
  return `/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";
import SEO from "../components/SEO";

export default function ${componentName}() {
  const structuredData = ${JSON.stringify(structuredData, null, 4)};

  return (
    <>
      <SEO
        title="${frontmatter.title}"
        description="${frontmatter.description}"
        keywords="${frontmatter.keywords}"
        structuredData={structuredData}
        canonical="${frontmatter.canonical}"
      />

      <Container maxW="4xl" as="main">
        <VStack spacing={6} align="stretch">
${processedContent}
        </VStack>
      </Container>
    </>
  );
}`;
}

function generateStructuredData(frontmatter) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": frontmatter.pageType || "WebPage",
    "name": frontmatter.title,
    "description": frontmatter.description,
    "url": frontmatter.canonical
  };

  if (frontmatter.structuredData) {
    return { ...baseStructuredData, ...frontmatter.structuredData };
  }

  return baseStructuredData;
}

// Generate home page sections data
function generateHomeSectionsData(sectionsDir) {
  const sections = {};
  
  if (!fs.existsSync(sectionsDir)) {
    return sections;
  }

  const sectionFiles = fs.readdirSync(sectionsDir)
    .filter(file => file.endsWith('.md'));

  sectionFiles.forEach(file => {
    const filePath = path.join(sectionsDir, file);
    const sectionData = parseStaticMarkdownFile(filePath);
    
    if (sectionData) {
      const sectionName = path.basename(file, '.md');
      sections[sectionName] = {
        ...sectionData.frontmatter,
        content: sectionData.content
      };
    }
  });

  return sections;
}

module.exports = {
  parseStaticMarkdownFile,
  generateStaticPageComponent,
  generateHomeSectionsData
};
