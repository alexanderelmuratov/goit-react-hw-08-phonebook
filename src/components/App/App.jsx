import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
// import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({ default: module.HomePage }))
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage').then(module => ({ default: module.ContactsPage }))
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage').then(module => ({ default: module.RegisterPage }))
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage').then(module => ({ default: module.LoginPage }))
);

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { Section } from 'components/Section/Section';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { Loader } from 'components/Loader/Loader';
// import { ContactList } from 'components/ContactList/ContactList';
// import { ContactsTitle } from './App.styled';
// import { getLoading, getError } from 'redux/contacts/contacts-selectors';
// import { fetchContacts } from 'redux/contacts/contacts-operations';

export const App = () => {
  // const loading = useSelector(getLoading);
  // const error = useSelector(getError);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // if (error) {
  //   return toast.error('Oops!...Something went wrong');
  // }

  return (
    <>
      <GlobalStyle />
      <Container>
        {!isFetchingCurrentUser && (
          <>
            <AppBar />
            <Suspense fallback="">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<PrivateRoute />}>
                  <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="/register" element={<PublicRoute restricted />}>
                  <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route path="/login" element={<PublicRoute restricted />}>
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </>
        )}
        
      </Container>
      <Toaster position="top-right"/>
    </>    
  );
};


// =================================
// export const App = () => {
//   const loading = useSelector(getLoading);
//   const error = useSelector(getError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   if (error) {
//     return toast.error('Oops!...Something went wrong');
//   }

//   return (
//     <Container>
//       <GlobalStyle />
//       {/* <Section title="Phonebook"> */}
//         <ContactForm />
//         <ContactsTitle>Contacts</ContactsTitle>
//         {loading ? <Loader /> : <Filter /> }
//         <ContactList />         
//       {/* </Section> */}
//       <Toaster position="top-right"/>
//     </Container>
//   );
// };
