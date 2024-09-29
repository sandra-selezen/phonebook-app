import { Heading } from '@chakra-ui/react';
import { MainContainer } from '../components/Layouts/MainContainer';
import { LoginForm } from '../components/Forms/LoginForm';

const Login = () => {
  return (
    <MainContainer>
      <Heading textAlign={'center'} marginBottom={'12px'}>Log In</Heading>
      <LoginForm />
    </MainContainer>
  )
}

export default Login;
