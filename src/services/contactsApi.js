import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;  
};

export const addContact = async (contact) => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export const changeContactName = async (id, value) => {
  const response = await axios.patch(`/contacts/${id}`, { name: value });
  return response.data;
};  
  
export const changeContactNumber = async (id, value) => {
  const response = await axios.patch(`/contacts/${id}`, { number: value });
  return response.data;
};
