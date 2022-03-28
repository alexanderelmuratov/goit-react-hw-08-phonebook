import { StyledAuthNav, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </StyledAuthNav>
  );
};