import PropTypes from 'prop-types';
import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from '@remixicon/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { useToaster } from '../../hooks/hooks';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { showToast } = useToaster();

  const schema = yup.object().shape({
    name: yup.string().required(),
    phone_number: yup.string().required(),
  });
  
  const initialValues = {
    name: "",
    phone_number: "",
  };

  const onAddContact = ({ name, phone_number }, { resetForm }) => {
    try {
      dispatch(addContact({ name, phone_number }));
      showToast({
        title: 'New contact successfully added!',
        status: 'success',
      });
      resetForm();
      onClose();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onAddContact}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='name' display='flex' alignItems='center'><Icon as={RiUserFill} mr={'8px'} />Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder='Enter contact name' />
        </FormControl>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='phone_number' display='flex' alignItems='center'><Icon as={RiPhoneFill} mr={'8px'} />Number</FormLabel>
          <Field as={Input} id='phone_number' name='phone_number' type='tel' placeholder='Enter contact phone number' />
        </FormControl>
        <Button type='submit'><Icon as={RiUserAddFill} mr={'8px'} />Add contact</Button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes = {
  onClose: PropTypes.func,
}
