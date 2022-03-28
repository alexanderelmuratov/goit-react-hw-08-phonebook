import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;
  font-size: 24px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: #ff6b01;
  }
`;
