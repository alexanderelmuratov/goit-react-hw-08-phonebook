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

  /* &:not(:last-child) {
      font-weight: 700;
    } */
  /* color: #010101;   */
`;

// export const ContactName = styled.div`
//   font-weight: 700;
// `;

// export const ContactNumber = styled.div`
//   padding-left: 20px;
// `;

export const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  alight-items: center;
  /* width: 40px;
  height: 40px; */
  /* margin-left: auto; */
  /* margin-right: 5px; */
  padding: 0;
  /* padding-top: 5px; */
  /* padding-bottom: 5px; */
  /* font-weight: 400; */
  /* font-size: 18px; */
  /* line-height: 1.5; */
  color: #fff;
  background-color: #034f84;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  /* opacity: 0; */

  &:hover {
    font-weight: 700;
    background-color: #F2552C;
    transform: scale(1.1);
    /* opacity: 1; */
  }
`;

export const StyledEdiText = styled(EdiText)`
  /* div[editext="view"] {
    &:not(:last-child) {
      font-weight: 700;
    }
} */

  button {
    padding-top: 2px;
    padding-bottom: 2px;
    /* padding: 0; */
    border-radius: 5px;
    border: none; 
    background-color: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);   
  }
  button[editext="edit-button"] {
    /* padding: 0;      */
    /* &:hover {
      color: #fff;
      background-color: #034f84; */
    /* width: 50px; */
  }
  button[editext="save-button"] {
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;
    /* width: 50px; */
    /* padding: 0; */
    &:hover {
      background-color: greenyellow;
      /* background-color: #d5f4e6; */
    }
  }
  button[editext="cancel-button"] {
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;
    /* padding: 0; */
    &:hover {
      color: #fff;
      background-color: crimson;
    }
  }
  input, textarea {
    /* background: #1D2225; */
    /* color: #F4C361; */
    /* font-weight: bold; */
    padding-top: 1px;
    padding-bottom: 1px;
    /* font-weight: bold; */
    line-height: 1.3;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    &:not(:last-child) {
      margin-bottom: 1px;
    }
  }
  /* div[editext="view-container"] {
    &:not(:last-child) {
      font-weight: 700;
    } */
    /* background: #6293C3; */
    /* padding: 15px; */
    /* border-radius: 5px; */
    /* color: #fff; */
}
`
