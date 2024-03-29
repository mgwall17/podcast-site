// Navbar.js
"use client"
import { useState, React } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  HStack,
  Heading,
  Hide,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubscribe = () => {
    setShowAlert(true);
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/">
            <HStack>
              <Box as="img" src="HPG_Logo_Purple.png" width={'50px'} alt="Horror Glass Podcast" /><Hide below='lg'><Heading as="h1" size="lg">Horror Glass Podcast</Heading></Hide></HStack>
          </Link>
        </Flex>
        <HStack flex={{ base: 1, md: 0 }} justify={'flex-end'} spacing={6}>
          <Button colorScheme={"purple"} display={{ base: 'none', md: 'inline-flex' }} as={Link} href="/Episodes" fontSize={'sm'} fontWeight={400}>
            Episodes
          </Button>
          {/* <Button colorScheme={"purple"} display={{ base: 'none', md: 'inline-flex' }} as={Link} href="/Blog" fontSize={'sm'} fontWeight={400}>
            Blog
          </Button> */}
          <Button colorScheme={"purple"} display={{ base: 'none', md: 'inline-flex' }} as={Link} href="/About" fontSize={'sm'} fontWeight={400}>
            About
          </Button>
          <Button colorScheme={"purple"} display={{ base: 'none', md: 'inline-flex' }} as={Link} href="/Contact" fontSize={'sm'} fontWeight={400}>
            Contact
          </Button>
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav isOpen={isOpen} onToggle={onToggle} showAlert={showAlert} setShowAlert={setShowAlert} />
      </Collapse>
    </Box>
  );
};

const MobileNav = ({ isOpen, onToggle, showAlert, setShowAlert }) => {
  const handleSubscribe = () => {
    setShowAlert(true);
  };
  const handleClose = () => {
    if (isOpen) {
      onToggle();
    }
  };
  return (
    <Box onClick={handleClose}>
      <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        <MobileNavItem href="/Episodes">Episodes</MobileNavItem>
        {/* <MobileNavItem href="/Blog">Blog</MobileNavItem> */}
        <MobileNavItem href="/About">About</MobileNavItem>
        <MobileNavItem href="/Contact">Contact</MobileNavItem>
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ children, href }) => {
  return (
    <Box>
      <Link href={href} passHref>
        <Button
          width="100%"
          p={8}
          m={1}
          color={useColorModeValue('gray.600', 'gray.200')}
          _hover={{
            textDecoration: 'none',
            color: useColorModeValue('gray.800', 'white'),
          }}
        >
          {children}
        </Button>
      </Link>
    </Box>
  );
};

export default Navigation;
