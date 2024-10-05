import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name, phone_number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        phone_number.trim().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);
