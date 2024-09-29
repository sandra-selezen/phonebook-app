import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Icon
} from '@chakra-ui/react';
import { RiPhoneFill, RiUserFill } from '@remixicon/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

export const ChangeContactForm = ({ contact, onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone_number: yup.string().required(),
  });

  return (
    <Formik
      initialValues={contact}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormControl marginBottom={'12px'}>
          <FormLabel htmlFor='name' display='flex' alignItems='center'><Icon as={RiUserFill} mr={'8px'} />Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' />
        </FormControl>
        <FormControl marginBottom={'12px'}>
          <FormLabel htmlFor='phone_number' display='flex' alignItems='center'><Icon as={RiPhoneFill} mr={'8px'} />Phone Number</FormLabel>
          <Field as={Input} id='phone_number' name='phone_number' type='tel' />
        </FormControl>
        <Button type='submit'>Change contact</Button>
      </Form>
    </Formik>
  )
}

ChangeContactForm.propTypes = {
  contact: PropTypes.object,
  onSubmit: PropTypes.func,
}
