import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from 'components/AppBar/AppBar';
import { AppFooter } from 'components/AppFooter/AppFooter';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import 'react-toastify/dist/ReactToastify.css';

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

export const App = () => {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container>
        {!isFetchingCurrentUser && (
          <>
            <AppBar />
            <Suspense fallback={<Loader />}>
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
            <AppFooter />
          </>
        )}        
      </Container>
      <ToastContainer style={{ fontSize: "18px" }} />
    </>    
  );
};
