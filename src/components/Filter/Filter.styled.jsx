import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 5px;
  /* padding-left: 5px;
  padding-right: 5px; */
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
