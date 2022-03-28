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
