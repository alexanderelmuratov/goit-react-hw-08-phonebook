import styled from 'styled-components';

export const ContactSetUnit = styled.li`
  display: flex;
  color: #034f84;

  &:hover {    
    color: #F2552C;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactInfo = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const DeleteButton = styled.button`
  width: 70px;
  margin-left: auto;
  font-weight: 400;
  font-size: 12px;
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
