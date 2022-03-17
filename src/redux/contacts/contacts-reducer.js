import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContactName,
  changeContactNumber,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [changeContactName.fulfilled]: (state, { payload }) => 
    state.map(item => item.id === payload.id ? payload : item),   
  [changeContactNumber.fulfilled]: (state, { payload }) => 
    state.map(item => item.id === payload.id ? payload : item),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [changeContactName.pending]: () => true,
  [changeContactName.fulfilled]: () => false,
  [changeContactName.rejected]: () => false,
  [changeContactNumber.pending]: () => true,
  [changeContactNumber.fulfilled]: () => false,
  [changeContactNumber.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

export const contactsReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

// ======================= Без createAsyncThunk ==========================

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   filterContact,
// } from './contacts-actions';

// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [payload, ...state],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(item => item.id !== payload),
// });

// const filter = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });

// const loading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContactsError]: (_, { payload }) => payload,
//   [addContactError]: (_, { payload }) => payload,
//   [deleteContactError]: (_, { payload }) => payload,
// });

// export const contactsReducer = combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });
