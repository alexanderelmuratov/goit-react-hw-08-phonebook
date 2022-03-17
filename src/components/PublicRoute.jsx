import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : <Outlet />;
};
