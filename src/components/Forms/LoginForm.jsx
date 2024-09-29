import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { RiMailFill, RiLock2Fill, RiLoginBoxFill } from '@remixicon/react';
import { Field, Formik, Form } from 'formik';
import * as yup from 'yup';

export const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  
  const initialValues = {
    email: "",
    password: "",
  }

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='email'><Icon as={RiMailFill} mr={'8px'} />Email</FormLabel>
          <Field as={Input} id='email' name='email' type='email' placeholder='Enter email' />
        </FormControl>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='password'><Icon as={RiLock2Fill} mr={'8px'} />Password</FormLabel>
          <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
        </FormControl>
        <Button type='submit'><Icon as={RiLoginBoxFill} mr={'8px'} />Log In</Button>
      </Form>
    </Formik>
  )
}
