import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class Signin extends Component {

  signin = async event => {
    event.preventDefault();
    let user = {
      email: event.target.InputEmail.value,
      password: event.target.InputPassword.value
    };
    const response = await fetch("http://localhost:3004/user/signin", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    let responsedata = await response.json();
    alert(responsedata.message);
    if (response.status === 200) {
      this.props.setUserObj(
        Object.assign(user, { token: response.headers.get("x-auth-header") })
      );
      this.props.history.push("/");
    }
  };
  
  render() {
    return (
      <div
        className="d-flex container mt-5 justify-content-center"
        style={{ textAlign: "left" }}
      >
        <form onSubmit={this.signin}>
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
