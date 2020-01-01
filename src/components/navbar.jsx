import React from "react";
import { Link } from "react-router-dom";
// Stateless Functional component
const NavBar = props => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Mukesh Suthar
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link class="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/about"}>
              Aboutme
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
