import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, updateContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const getContactsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const updateContactFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact._id === action.payload._id
  );

  if (index !== -1) {
    state.items[index] = action.payload;
  }
};

const deleteContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact._id === action.payload
  );

  if (index !== -1) {
    state.items.splice(index, 1);
  }
};

const clearContactsFulfilledReducer = (state) => {
  state.items = [];
  state.isLoading = false;
  state.error = null;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllContacts.pending, pendingReducer)
      .addCase(getAllContacts.fulfilled, getContactsFulfilledReducer)
      .addCase(getAllContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(updateContact.pending, pendingReducer)
      .addCase(updateContact.fulfilled, updateContactFulfilledReduser)
      .addCase(updateContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(logOut.fulfilled, clearContactsFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
