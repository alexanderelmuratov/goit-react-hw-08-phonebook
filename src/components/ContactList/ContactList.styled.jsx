import styled from 'styled-components';

export const ContactSet = styled.ul`
  /* position: relative; */
  width: 40%;
  max-height: 332px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;  
  margin-bottom: 20px;
  /* display: flex; */
  /* overflow: hidden; */
  overflow: auto;
  /* background-color: #d5f4e6; */
  background-color: #faf9dd;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover {
    /* padding-right: 5px; */
    /* margin-right: 5px; */
    /* overflow: auto; */
    -webkit-overflow-scrolling: touch;
	  -moz-overflow-scrolling: touch;
	  -ms-overflow-scrolling: touch;
	  -o-overflow-scrolling: touch;
	  overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
	  -webkit-appearance: none;   
    /* float: right;  */
	  width: 5px;
  }

  &::-webkit-scrollbar-thumb {    
	  border-radius: 2px;
	  background-color: rgba(128, 128, 128, 0.5);
	  -webkit-box-shadow: 0 0 1px rgba(255,255,255,0.5);
  }
`;

export const ContactsError = styled.p`
  text-align: center;
`;
