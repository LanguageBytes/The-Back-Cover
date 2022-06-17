import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Center, FormControl, Heading } from '@chakra-ui/react';
import {
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import './Login.css';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Link className='go-back-signup' fontWeight='normal' to="/signup">
        <Text fontSize='25px' p='4'>← Go to Sign up</Text>
        </Link>
        <Center boxShadow='dark-lg' className="form-background-login" p='4' my='4'>
        <FormControl p='3'>
          <Heading fontWeight="light" className="form-heading" py='2' fontSize='30px'>Log in</Heading>
      <form onSubmit={handleFormSubmit}>
        <div>
          <FormLabel color='white' htmlFor="email">Email address:</FormLabel>
          <Input
            bg='green.100'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel color='white' htmlFor="pwd">Password:</FormLabel>
          <Input
            bg='purple.100'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <Text fontSize='20px' p='4' fontWeight='normal' className='go-back-signup'>The provided credentials are incorrect</Text>
          </div>
        ) : null}
        <div >
          <Button mt='4' type="submit" className="form-button-login" variant='solid'>Submit</Button>
        </div>
      </form>
      </FormControl>
      </Center>
    </Container>
  );
}

export default Login;