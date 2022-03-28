import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
  const data = await contactsApi.fetchContacts();
  return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const data = await contactsApi.addContact(contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await contactsApi.deleteContact(id);
    return id;
  }
);

export const changeContactName = createAsyncThunk(
  'contacts/changeContactName',
  async ({ id, value }) => {
    const data = await contactsApi.changeContactName(id, value);
    return data;
  },
);

export const changeContactNumber = createAsyncThunk(
  'contacts/changeContactNumber',
  async ({ id, value }) => {
    const data = await contactsApi.changeContactNumber(id, value);
    return data;
  },
);
