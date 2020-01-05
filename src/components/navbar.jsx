import React from "react";
import { Link } from "react-router-dom";
// Stateless Functional component
const NavBar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Mukesh Suthar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          {(() => {
            if (!props.user) {
              return (
                <li className="nav-item">
                  <Link className="nav-link" to={"/signin"}>
                    Signin
                  </Link>
                </li>
              );
            }
          })()}

          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
