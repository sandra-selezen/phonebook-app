import PropTypes from 'prop-types';
import { VStack, StackDivider } from '@chakra-ui/react';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts }) => {

  return (
    <>
      <VStack
        align='stretch'
        maxHeight={'340px'}
        overflow={'scroll'}
        spacing={4}
        divider={<StackDivider borderColor={'white'} />}>
        {contacts.map(contact => (
          <ContactItem key={contact._id} contact={contact} />
        ))}
      </VStack>
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.any,
}
