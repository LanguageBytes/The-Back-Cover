import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/color-mode";
// import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

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
            <Tab  fontSize='20px' color='#48BB78'>
          <div c>
            <Link to="/home">
              Discover
            </Link>
          </div>
          </Tab >
          <Tab fontSize='20px' color='#38B2AC'>
          <div c>
            <Link to="/mybooks">
              My Books
            </Link>
          </div>
          </Tab >
          <Tab fontSize='20px' color='#4299E1'>
          <div c>
            <Link to="/community">
              Community
            </Link>
          </div>
          </Tab>
          <Tab fontSize='20px' color='#9F7AEA'>
          <div c>
            <Link to="/contact">
              Contact 
            </Link>
          </div>
          </Tab>
          <Tab  fontSize='20px' color='#ED8936'>
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
          <Tab fontSize='20px' color='#48BB78'>
            <Link to="/signup">
              Signup
            </Link>
            </Tab>
            <Tab fontSize='20px' color='#38B2AC'>
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
      <h1>
        <Link to="/">
        The Back Cover
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;