import PropTypes from 'prop-types';
import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from '@remixicon/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

export const ContactForm = ({ onClose }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone_number: yup.string().required(),
  });
  
  const initialValues = {
    name: "",
    phone_number: "",
  };

  const onAddContact = () => {
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onAddContact}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='name'><Icon as={RiUserFill} mr={'8px'} />Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder='Enter contact name' />
        </FormControl>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='number'><Icon as={RiPhoneFill} mr={'8px'} />Number</FormLabel>
          <Field as={Input} id='number' name='number' type='tel' placeholder='Enter contact phone number' />
        </FormControl>
        <Button type='submit'><Icon as={RiUserAddFill} mr={'8px'} />Add contact</Button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes = {
  onClose: PropTypes.func,
}
