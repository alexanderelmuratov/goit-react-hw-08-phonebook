import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
import { Title } from 'components/App/App.styled';
import { getContacts, getLoading, getError } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);  
  const dispatch = useDispatch();
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return toast.error('Oops!...Something went wrong');
  }

  const isContacts = contacts.length !== 0;

  return (
    <main>
      <Title>Contacts</Title>
      <ContactForm />
      {isContacts &&
        <>
          {loading ? <Loader /> : <Filter />}
          <ContactList />
        </>
      }
    </main>    
  );
};
