import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul >
          <li c>
            <Link to="/home">
              Discover
            </Link>
          </li>
          
          <li c>
            Hello {Auth.getProfile().data.userName}
          </li>
        
          <li c>
            <Link to="/mybooks">
              My Books
            </Link>
          </li>

          <li c>
            <Link to="/community">
              Community
            </Link>
          </li>

          <li c>
            <Link to="/contact">
              Contact 
            </Link>
          </li>
          <li >
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
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