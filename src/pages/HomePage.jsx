import { HomePageTitle, SubTitle, HomePageWrapper } from 'components/App/App.styled';

export const HomePage = () => {
  return (
    <main>
      <HomePageWrapper>
        <HomePageTitle>Welcome to Phonebook</HomePageTitle>
        <SubTitle>Create</SubTitle>
        <SubTitle>your personal contact database</SubTitle>
        <SubTitle>with a handy search feature</SubTitle>
      </HomePageWrapper>
    </main>
  );
};
