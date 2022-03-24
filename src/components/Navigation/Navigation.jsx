import { useSelector } from 'react-redux';
import { Logo } from 'components/Logo/Logo';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { StyledNav, StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <StyledNav>
      <StyledNavLink to="/">
        <Logo />
      </StyledNavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      )}
    </StyledNav>
  );
};
