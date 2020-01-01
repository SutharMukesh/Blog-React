import React from "react";
import { Link } from "react-router-dom";
// Stateless Functional component
const NavBar = props => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Mukesh Suthar
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link class="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
