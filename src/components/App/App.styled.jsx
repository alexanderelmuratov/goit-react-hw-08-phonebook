import styled from 'styled-components';
import defaultBgImage from './phonebook.jpg';

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
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HomePageTitle = styled(Title)`
  font-size: 40px;
  color: rgb(196, 58, 49);
`;

export const SubTitle = styled.h2`
  font-style: italic;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  text-align: center;
  color: teal;
  /* text-transform: uppercase; */
  /* padding-bottom: auto; */
`;

export const HomePageWrapper = styled.div`
  /* display: flex; */
  /* width: 100%; */
  /* margin: 0 auto; */
  min-height: 797px;
  /* background-size: 100% 100%; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)), url(${defaultBgImage}); */
  background-image: linear-gradient(rgba(134, 160, 180, 0.5), rgba(134, 160, 180, 0.5)), url(${defaultBgImage});
`;


// color: rgb(196, 58, 49);