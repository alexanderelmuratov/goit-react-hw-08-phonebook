import styled from "styled-components";

export const NavHeader = styled.header`
  display: flex;
  flex-direction: column; 
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #e5e5e5;
  border-bottom: 1px solid #2a363b;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    min-height: 80px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
