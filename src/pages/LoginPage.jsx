import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/App/App.styled';

export const LoginPage = () => {
  return (
    <main>
      <Title>Enter youre account!</Title>
      <LoginForm />
    </main>
  );
};
