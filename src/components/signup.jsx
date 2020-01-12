import React, { Component } from "react";
let apiurl = process.env.REACT_APP_API_URL;

export default class Signin extends Component {
  signup = async event => {
    event.preventDefault();
    let user = {
      name: event.target.InputUsername.value,
      email: event.target.InputEmail.value,
      password: event.target.InputPassword.value
    };
    const response = await fetch(`${apiurl}user/signup`, {
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
    console.log("rendering signup")
    return (
      <div
        className="d-flex container mt-5 justify-content-center"
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <form onSubmit={this.signup}>
          <div className="form-group">
            <label>Username</label>
            <input type="username" className="form-control" id="InputUsername" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="InputPassword" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
