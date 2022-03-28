import styled, { keyframes } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin-top: auto;
  background-color: #e5e5e5;
  border-top: 1px solid #2a363b;
`;

export const StyledLink = styled.a`
  color: #034f84;
  text-decoration: none;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    color: #F2552C;
  }
`;

const heartbeat = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

export const StyledHeart = styled.span`
  color: crimson;
  animation: ${heartbeat} 1500ms linear infinite;
`;
