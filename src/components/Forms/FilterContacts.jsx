import { FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { RiUserSearchFill } from '@remixicon/react';
import { useDispatch } from 'react-redux';
import { useFilter } from '../../hooks/hooks';
import { setFilter } from '../../redux/filter/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useFilter();

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <FormControl marginBottom={'24px'}>
      <FormLabel><Icon as={RiUserSearchFill} mr={'8px'} /> Find contact by name </FormLabel>
      <Input value={filter} onChange={handleFilter} autoComplete="off" />
    </FormControl>
  )
}
