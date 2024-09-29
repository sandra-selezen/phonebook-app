import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';
import { selectContacts, selectIsLoading, selectError } from '../redux/contacts/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  return {
    contacts,
    isLoading,
    isError,
  }
};

export const useToaster = () => {
  const toast = useToast();

  const showToast = ({
    title,
    description,
    status = 'info',
    duration = 5000,
    isClosable = true,
    position = 'top'
  }) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position
    });
  };

  return { showToast };
};
