import { Link as NavLink } from 'react-router-dom';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import { MainContainer } from '../components/Layouts/MainContainer';

const Home = () => {
  return (
    <MainContainer>
      <Heading as={"h1"}>Welcome to Phonebook!</Heading>
      <Box mt={'12px'}>
        <Text>
          Phonebook is a convenient and user-friendly application designed to organize your personal phonebook.
          With our app, you can store, manage, and quickly find all your contacts.
        </Text>
      </Box>
      <Box mt={'12px'}>
        <Text>
          Phonebook is your reliable assistant for storing and organizing all your contacts.
          Join us today and enjoy the convenience and efficiency of our Phonebook app!
        </Text>
      </Box>
      <Box mt={'12px'}>
        <Text>
          Visit the <Link fontWeight={'600'} as={NavLink} to='/signup'>Sign Up</Link> or <Link fontWeight={'600'} as={NavLink} to='/login'>Log In</Link> page to create a new account or log in using your existing credentials. After successful login, you will be redirected to the Contact page. On the Contacts page, you can start creating your own phone book.
        </Text>
      </Box>
      <Box mt={'12px'}>
        <Text>
          If you have any questions or require further assistance,
          please don&apos;t hesitate to contact our <Link fontWeight={'600'} href='https://github.com/sandra-selezen' isExternal>support team</Link>.
          Thank you for choosing Phonebook!
        </Text>
      </Box>
    </MainContainer>
  )
}

export default Home;
