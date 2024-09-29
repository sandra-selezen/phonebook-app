import { Heading } from '@chakra-ui/react';
import { MainContainer } from '../components/Layouts/MainContainer';
import { SignUpForm } from '../components/Forms/SignUpForm';

const SignUp = () => {
  return (
    <MainContainer>
      <Heading textAlign={'center'} marginBottom={'12px'}>Sign Up</Heading>
      <SignUpForm />
    </MainContainer>
  )
}

export default SignUp;
