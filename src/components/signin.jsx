import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";
class Signin extends Component {
  render() {
    return (
      <div
        className="d-flex container mt-5 justify-content-center"
        style={{ textAlign: "left" }}
      >
        <form onSubmit={this.props.login}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              name="InputEmail"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="InputPassword"
              name="InputPassword"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Signin
            </button>
            <label className="float-right">
              <Link className="nav-link" to={"/signup"}>
                New User, Signup?
              </Link>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);