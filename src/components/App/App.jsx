import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { ContactsTitle } from './App.styled';
import { getLoading, getError } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export const App = () => {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return toast.error('Oops!...Something went wrong');
  }

  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        {loading ? <Loader /> : <Filter /> }
        <ContactList />         
      </Section>
      <Toaster position="top-right"/>
    </>
  );
};
