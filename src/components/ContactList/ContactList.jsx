import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box, Flex, IconButton, VStack, StackDivider, Text, useDisclosure } from '@chakra-ui/react';
import { RiUserSettingsFill, RiUserUnfollowFill } from '@remixicon/react';
import { useDispatch } from 'react-redux';

import { useToaster } from '../../hooks/hooks';
import { updateContact, deleteContact } from '../../redux/contacts/operations';

import { ContactModal } from '../Modals/ContactModal';
import { ChangeContactForm } from '../Forms/ChangeContactForm';

export const ContactList = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { showToast } = useToaster();

  const handleEditContact = (contact) => {
    setSelectedContact(contact);
    onOpen();
  };

  const onHandleSubmit = (values) => {
    try {
      dispatch(updateContact(values));
      setSelectedContact(null);
      showToast({
        title: 'Contact updated successfully!',
        status: 'success',
      });
      onClose();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <VStack
        align='stretch'
        maxHeight={'340px'}
        overflow={'scroll'}
        spacing={4}
        divider={<StackDivider borderColor={'white'} />}
      >
        {contacts.map((contact) => (
          <React.Fragment key={contact._id}>
            <Flex key={contact._id} justifyContent={'space-between'} alignItems={'center'}>
              <Box>
                <Text>{contact.name}: {contact.phone_number}</Text>
              </Box>

              <Flex columnGap={'12px'}>
                <IconButton
                  title='Edit contact'
                  aria-label='Edit contact'
                  icon={<RiUserSettingsFill />}
                  onClick={() => handleEditContact(contact)}
                />

                <IconButton
                  title='Delete contact'
                  aria-label='Delete contact'
                  icon={<RiUserUnfollowFill />}
                  onClick={() => dispatch(deleteContact(contact._id))}
                />
              </Flex>
            </Flex>
          </React.Fragment>
        ))}
      </VStack>

      <ContactModal isOpen={isOpen} onClose={onClose} title={'Edit contact'}>
        <ChangeContactForm contact={selectedContact} onSubmit={onHandleSubmit} />
      </ContactModal>
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.any,
}
