import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Footer = () => { 
    return (
        <div>
      <Text bg='orange.100' heigh='100%' pt={6} fontSize={'sm'} textAlign={'center'}>
        © 2022 Chakra Templates. All rights reserved
      </Text>
        </div>
    );
  };

  export default Footer;