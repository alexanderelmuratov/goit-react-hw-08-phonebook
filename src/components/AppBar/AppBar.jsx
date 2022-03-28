import { useSelector } from 'react-redux';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavHeader } from './AppBar.styled';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}      
    </NavHeader>
  );
};
