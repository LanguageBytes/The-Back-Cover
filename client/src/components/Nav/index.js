import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/color-mode";
// import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
 import { Icon } from '@chakra-ui/react'
import {FiSearch} from 'react-icons/fi'
import {FiBookOpen} from 'react-icons/fi'
import {RiQuestionAnswerLine} from 'react-icons/ri'
import {RiContactsBookLine} from 'react-icons/ri'
import { Text } from '@chakra-ui/react'
import './Nav.css'
function Nav() {

  const colors = useColorModeValue(
    ['green.50', 'teal.50', 'blue.50','purple.50','pink.50','orange.50'],
  )
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg} colorScheme='white'>
          <TabList>
            <Heading color='blue.600' as='i' fontSize='30px' p='2'></Heading>
            <Tab  fontSize={{ base: '18px', md: '22px', lg: '28px' }} color='#48BB78'>
          <div c>
            <Link to="/home">
              <Hide below='md'>Discover</Hide>
              <Hide above='md'><Icon color='#48BB78' as={FiSearch} w={10} h={10} /></Hide>
            </Link>
          </div>
          </Tab >
          <Tab fontSize={{ base: '18px', md: '22px', lg: '28px' }}  color='#38B2AC'>
          <div c>
            <Link to="/mybooks">
              <Hide below='md'>My Books</Hide>
              <Hide above='md'><Icon color='#38B2AC' as={FiBookOpen} w={10} h={10} /></Hide>
            </Link>
          </div>
          </Tab >
          <Tab fontSize={{ base: '18px', md: '22px', lg: '28px' }}  color='#4299E1'>
          <div c>
            <Link to="/community">
              <Hide below='md'>Community</Hide>
              <Hide above='md'><Icon color='#4299E1' as={RiQuestionAnswerLine} w={10} h={10} /></Hide>
            </Link>
          </div>
          </Tab>
          <Tab fontSize={{ base: '18px', md: '22px', lg: '28px' }}  color='#9F7AEA'>
          <div c>
            <Link to="/contact">
              <Hide  below='md'>Contact </Hide>
              <Hide above='md'><Icon color='#9F7AEA' as={RiContactsBookLine} w={10} h={10} /></Hide>
            </Link>
          </div>
          </Tab>
          <Tab  fontSize={{ base: '22px', md: '22px', lg: '28px' }}  color='#ED8936'>
          <div >
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
          </Tab>
          </TabList>
          </Tabs>
      );
    } else {
      return (
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg} colorScheme='white' >
          <TabList>
          <Tab fontSize={{ base: '22px', md: '22px', lg: '28px' }} color='#48BB78'>
            <Link to="/signup">
              Signup
            </Link>
            </Tab>
            <Tab fontSize={{ base: '22px', md: '22px', lg: '28px' }} color='#38B2AC'>
            <Link to="/login">
              Login
            </Link>
            </Tab>
          </TabList>
          </Tabs>
      );
    }
  }

  return (
    <header>
      <Heading >
        <Link  to="/">
        <Text fontWeight='light' p='4' className="app-title">The Back Cover</Text>
        </Link>
      </Heading>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;