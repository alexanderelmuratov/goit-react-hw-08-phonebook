import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      )}
    </nav>
  );
};
