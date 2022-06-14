import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Heading } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text } from '@chakra-ui/react'

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
            <Header color='blue.600' as='i' fontSize='30px' p='2'></Header>
        <ul >
          <Tab>
          <li c>
            <Link to="/home">
              Discover
            </Link>
          </li>
          </Tab>
          <Tab>
          <li c>
            <Link to="/mybooks">
              My Books
            </Link>
          </li>
          </Tab>
          <Tab>
          <li c>
            <Link to="/community">
              Community
            </Link>
          </li>
          </Tab>
          <Tab>
          <li c>
            <Link to="/contact">
              Contact 
            </Link>
          </li>
          </Tab>
          <Tab>
          <li >
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          </Tab>
          </ul>
          </TabList>
          </Tabs>
      );
    } else {
      return (
        <ul >
          <li>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
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