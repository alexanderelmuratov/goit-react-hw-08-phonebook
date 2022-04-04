import styled from 'styled-components';
import EdiText from 'react-editext';

export const ContactSetUnit = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  color: #034f84;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {    
    color: #F2552C;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.3);
  }
`;

export const ContactInfo = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  padding: 0;
  color: #faf9dd;
  background-color: #034f84;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    background-color: #F2552C;
    transform: scale(1.1);
  }
`;

export const StyledEdiText = styled(EdiText)`

  button {
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 5px;
    border: none; 
    background-color: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);   
  }

  button[editext="save-button"] {
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

    &:hover {
      background-color: greenyellow;
    }
  }

  button[editext="cancel-button"] {
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

    &:hover {
      color: #fff;
      background-color: crimson;
    }
  }
  input, textarea {
    padding-top: 1px;
    padding-bottom: 1px;
    line-height: 1.3;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    &:not(:last-child) {
      margin-bottom: 1px;
    }
  }
}
`

export const StyledEdiTextName = styled(StyledEdiText)`
  font-weight: 700;
`;
