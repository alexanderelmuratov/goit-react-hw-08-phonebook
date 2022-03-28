import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Form, FormLabel, SearchInput, FormButton } from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email === '' || password === '') {
      return toast.warn('Please, fill in all fields!');
    }

    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>      
      <FormLabel>
        <MdEmail style={{ width: 23, height: 23, marginRight: '5px' }} />  
        Email        
        <SearchInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
      </FormLabel>
      <FormLabel>
        <MdPassword style={{ width: 23, height: 23, marginRight: '5px' }} />  
        Password      
        <SearchInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="off"
        />
      </FormLabel>
      <FormButton type="submit">Enter</FormButton>
    </Form>
  );
};
