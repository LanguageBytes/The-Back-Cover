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
  import {Hide} from '@chakra-ui/react'
  const Footer = () => { 
    return (
        <div className="footer">
      <Hide below='sm'>
      <Text className="footer-text" heigh='100%' p={{md:"1",lg:"2"}} fontSize={{md:"22px",lg:"24px"}} textAlign={'center'}>
        The Digital Back Cover Of Every Book
        <Icon color='#547b7d' as={GiBookCover} w={10} h={10} />
      </Text>
        </Hide>
        </div>
    );
  };

  export default Footer;