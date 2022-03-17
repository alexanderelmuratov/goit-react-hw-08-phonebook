import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMenuImg = styled.img`
  margin-right: 10px;
`;

export const UserMenuText = styled.span`
  margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
`;

export const UserMenuButton = styled.button`
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: auto;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
  background-color: #034f84;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    font-weight: 700;
    background-color: #F2552C;
  }
`;
