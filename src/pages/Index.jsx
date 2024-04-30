import { Box, VStack, Heading, Text, Image, Link, SimpleGrid, GridItem } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">David Beckham</Heading>
        <Image borderRadius="full" boxSize="150px" src="/images/david-beckham.jpg" alt="David Beckham" />
        <Text fontSize="xl">Welcome to the official website of David Beckham, celebrated football icon and global ambassador.</Text>
        <SimpleGrid columns={2} spacing={10} width="full">
          <GridItem>
            <Heading as="h2" size="lg">Biography</Heading>
            <Text>Born on May 2, 1975, in London, England, David Beckham is one of the most acclaimed football players of all time. Known for his precise passing and free-kick ability, Beckham has won numerous awards throughout his career.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h2" size="lg">Career Highlights</Heading>
            <Text>David Beckham has played for Manchester United, Real Madrid, LA Galaxy, and the England national team, winning multiple league titles and a UEFA Champions League title.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h2" size="lg">Media Gallery</Heading>
            <Text>Explore a collection of iconic photos and videos from David's career and life.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h2" size="lg">Contact Information</Heading>
            <Text>For business inquiries, please contact: management@davidbeckham.com</Text>
          </GridItem>
        </SimpleGrid>
        <Box>
          <Link href="https://instagram.com" isExternal><FaInstagram size="2em" /></Link>
          <Link href="https://twitter.com" isExternal ml={4}><FaTwitter size="2em" /></Link>
          <Link href="https://facebook.com" isExternal ml={4}><FaFacebookF size="2em" /></Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;