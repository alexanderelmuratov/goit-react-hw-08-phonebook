import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* padding-left: 15px;
  padding-right: 15px; */
  /* padding-bottom: 20px; */
  background-color: #EDF1FF;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  /* text-transform: uppercase; */
  /* margin-bottom: 10px; */
`;
