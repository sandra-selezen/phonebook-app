import { Box, Heading, Text } from '@chakra-ui/react';
import { MainContainer } from '../components/Layouts/MainContainer';

const NotFound = () => {
  return (
    <MainContainer>
      <Box>
        <Heading as={"h1"} mb={'12px'} textAlign={'center'}>404</Heading>
        <Text>Oops! It looks like this page doesn&apos;t exist 👻. Please return to the homepage or use the menu to navigate.</Text>
      </Box>
    </MainContainer>
  )
}

export default NotFound;
