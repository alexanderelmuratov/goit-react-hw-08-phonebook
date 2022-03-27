import styled, { keyframes } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  /* padding: 20px 40px; */
  /* padding-left: 40px;
  padding-right: 40px; */
  margin-top: auto;
  background-color: #e5e5e5;
  /* background-color: #c0c0c0; */
  border-top: 1px solid #2a363b;
`;

export const StyledLink = styled.a`
  color: #034f84;
  text-decoration: none;
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

  /* @keyframes heartbeat {
  0% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  } */
`;
