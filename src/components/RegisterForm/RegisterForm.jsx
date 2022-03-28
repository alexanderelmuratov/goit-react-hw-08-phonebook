import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MdPerson, MdEmail, MdPassword } from 'react-icons/md';
import { Form, FormLabel, SearchInput, FormButton } from './RegisterForm.styled';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name === '' || email === '' || password === '') {
      return toast.warn('Please, fill in all fields!');
    }
    
    dispatch(register({ name, email, password }));  
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        <MdPerson style={{ width: 23, height: 23, marginRight: '5px' }} />
        Name        
        <SearchInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
      </FormLabel>
      <FormLabel>
        <MdEmail style={{ width: 23, height: 23, marginRight: '5px' }} />  
        Email        
        <SearchInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          // autoFocus
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
          // autoFocus
        />
      </FormLabel>
      <FormButton type="submit">Sign up</FormButton>
    </Form>
  );
};
