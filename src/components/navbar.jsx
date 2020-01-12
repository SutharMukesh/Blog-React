/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

// Stateless Functional component
const NavBar = (props) => {
  console.log('rendering navbar');
  return (
    <>
      <nav className="navbar m-2 shadow-sm rounded navbar-light" style={{ 'background-color': '#efefef' }}>
        <a className="navbar-brand" href="/">
          Mukesh Suthar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {(() => {
            if (!props.user) {
              return (
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Signin
                  </Link>
                </li>
              );
            }
          })()}
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
