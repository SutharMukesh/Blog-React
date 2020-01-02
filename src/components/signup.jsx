import React, { Component } from "react";

export default class Signin extends Component {
  render() {
    return (
      <div
        class="d-flex container mt-5 justify-content-center"
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <form>
          <div class="form-group">
            <label for="InputUsername">Username</label>
            <input type="username" class="form-control" id="InputUsername" />
          </div>
          <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="InputPassword">Password</label>
            <input type="password" class="form-control" id="InputPassword" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary mr-2">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
