import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Text } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Center
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './Signup.css';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        userName: formState.userName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <Link  className="go-back-login" p='4' to="/login">
        <Text p='4' fontSize='25px'  fontWeight='normal'>← Go to Login</Text></Link>
      <Center boxShadow='dark-lg' className="form-background" p='4' my='4'>
      <FormControl p='3'>
      <Heading fontWeight="light" className="form-heading" py='2' fontSize='30px'>Sign Up</Heading>
     <form onSubmit={handleFormSubmit}> 
        <div>
          <FormLabel color='white' htmlFor="userName">Username:</FormLabel>
          <Input
            bg='red.100'
            placeholder="Username"
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel color='white' htmlFor="email">Email:</FormLabel>
          <Input
            bg='orange.100'
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
            bg='blue.100'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button mt='4' className="form-button" variant='solid' type="submit">Submit</Button>
        </div>
       </form> 
      </FormControl>
      </Center>
    </Container>
  );
}

export default Signup;
