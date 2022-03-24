import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import toast from 'react-hot-toast';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Form, FormLabel, SearchInput, FormButton } from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';
// import { getError } from 'redux/auth/auth-selectors';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const error = useSelector(getError);
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

    // if (error) {
    //   return;
    // }

    dispatch(logIn({ email, password }));
    // toast.success('You successfully logged in!');  
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
          // autoFocus
        />
      </FormLabel>
      <FormButton type="submit">Enter</FormButton>
    </Form>
  );
};
