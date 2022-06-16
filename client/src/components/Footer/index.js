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
  import './style.css'
  import {GiBookCover} from 'react-icons/gi'
  import { Icon } from '@chakra-ui/react'
  
  const Footer = () => { 
    return (
        <div className="footer">
      <Text className="footer-text" heigh='100%' p={2} fontSize='30px' textAlign={'center'}>
        The Digital Back Cover Of Every Book
        <Icon color='#48BB78' as={GiBookCover} w={10} h={10} />
      </Text>
        </div>
    );
  };

  export default Footer;