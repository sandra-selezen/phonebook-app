import PropTypes from 'prop-types';
import {
  Text,
  Box,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { useToaster } from '../../hooks/hooks';
import { updateContact, deleteContact } from '../../redux/contacts/operations';

import { ActionButtons } from '../ActionButtons/ActionButtons';
import { ContactModal } from '../Modals/ContactModal';
import { ChangeContactForm } from '../Forms/ChangeContactForm';

export const ContactItem = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { showToast } = useToaster();

  const onHandleSubmit = (values) => {
    try {
      dispatch(updateContact(values));
      showToast({
        title: 'Contact updated successfully!',
        status: 'success',
      });
      onClose();
    } catch (error) {
      throw new Error(error);
    }
  };

  const onDelete = (contactId) => {
    try {
      dispatch(deleteContact(contactId));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <Flex key={contact._id} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Text>{contact.name}: {contact.phone_number}</Text>
        </Box>
        <ActionButtons
          onEdit={onOpen}
          onDelete={() => onDelete(contact._id)}
        />
      </Flex>

      <ContactModal isOpen={isOpen} onClose={onClose} title={'Edit contact'}>
        <ChangeContactForm contact={contact} onSubmit={onHandleSubmit} />
      </ContactModal>
    </>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    phone_number: PropTypes.string,
    favorite: PropTypes.bool,
  })
}
