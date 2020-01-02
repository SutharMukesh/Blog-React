import React, { Component } from "react"; // import logo from './logo.svg';
import NavBar from "./components/navbar";
import BlogRead from "./components/blogread";
import BlogHome from "./components/bloghome";
import Signin from "./components/signin";
import Signup from "./components/signup";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

class App extends Component {
  constructor() {

    super();
    this.state = {
      blogs: [],
      user: null
    };
  }
  async componentDidMount() {
    const blogs = await fetch("http://localhost:3004/");
    const blogsdata = await blogs.json();
    this.setState({ blogs: blogsdata });
  }

  login = async event => {
    event.preventDefault();
    let user = {
      email: event.target.InputEmail.value,
      password: event.target.InputPassword.value
    };
    const response = await fetch("http://localhost:3004/user/signin", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user) // body data type must match "Content-Type" header
    });
    // return await response.json();
    let responsedata = await response.json()
    debugger;
    const history = useHistory()
    history.push("/")
    console.log(this.props.history)
    alert(responsedata.message);
    // return <Redirect to="/"/>
    // if(response.status === 200){
    //   // this.props.userHasAuthenticated(true);
    // }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              path="/read/:id"
              render={props => <BlogRead {...props} blogs={this.state.blogs} />}
            />
            <Route
              exact
              path="/"
              render={props => <BlogHome {...props} blogs={this.state.blogs} />}
            />
            <Route
              exact
              path="/signin"
              render={props => <Signin {...props} login={this.login} />}
            />
            <Route
              exact
              path="/signup"
              render={props => <Signup {...props} />}
            />
            <Route
              render={props => <h3>Not Found</h3>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
