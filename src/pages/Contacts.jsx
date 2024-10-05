import { useEffect } from 'react';
import {
  VisuallyHidden,
  Heading,
  Box,
  Text,
  Button,
  useDisclosure,
  Stack,
  Spinner
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { useContacts } from '../hooks/hooks';
import { useFilteredContacts } from '../hooks/hooks';
import { getAllContacts } from '../redux/contacts/operations';

import { MainContainer } from '../components/Layouts/MainContainer';
import { ContactModal } from '../components/Modals/ContactModal';
import { ContactForm } from '../components/Forms/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterContacts } from '../components/Forms/FilterContacts';

const Contacts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { contacts, isLoading, isError } = useContacts();
  const filtredContacts = useFilteredContacts();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <>{isLoading && !isError 
        ? (
          <Box display={'flex'} justifyContent={'center'}>
            <Spinner />
          </Box>)
        : (
          <>
            <VisuallyHidden><Heading>Contacts Page</Heading></VisuallyHidden>
            <Stack
              direction={['column', 'column', 'row', 'row']}
              justifyContent={'space-between'}
              alignItems={'center'}
              marginBottom={'24px'}
            >
              {!contacts.length ? (
                <Box><Text fontWeight={'700'}>Your Phonebook is empty 🥺</Text></Box>
              ) : (
                <Box><Text fontWeight={'700'}>You have {contacts.length === 1 ? `${contacts.length} contact` : `${contacts.length} contacts`} in the Phonebook 😀</Text></Box>
              )}

              <Box><Button onClick={onOpen}>Add new contact</Button></Box>
            </Stack>

            <FilterContacts />

            <ContactList contacts={filtredContacts} />
            <ContactModal isOpen={isOpen} onClose={onClose} title={'Add new contact'}>
              <ContactForm onClose={onClose} />
            </ContactModal>
          </>
        )}</>
    </MainContainer>
  )
}

export default Contacts;
