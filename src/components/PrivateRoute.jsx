import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
