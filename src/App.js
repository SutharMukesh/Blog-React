import React, { Component } from "react"; // import logo from './logo.svg';
import NavBar from "./components/navbar";
import BlogRead from "./components/blogread";
import BlogHome from "./components/bloghome";
import Signin from "./components/signin";
import Signup from "./components/signup";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    blogs: [],
    user: null
  };
  
  // set user object after signin and signup
  setUserObj = (user)=>{
    this.setState({user})
  }

  // fetch all blogs before rendering
  async componentDidMount() {
    const blogs = await fetch("http://localhost:3004/");
    const blogsdata = await blogs.json();
    this.setState({ blogs: blogsdata });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user} />
          <Switch>
            <Route
              path="/read/:id"
              render={props => <BlogRead {...props} blogs={this.state.blogs} />}
            />
            <Route
              exact
              path="/"
              render={props => <BlogHome {...props} blogs={this.state.blogs} user={this.state.user} />}
            />
            <Route
              exact
              path="/signin"
              render={props => <Signin {...props} setUserObj={this.setUserObj} />}
            />
            <Route
              exact
              path="/signup"
              render={props => <Signup {...props} setUserObj={this.setUserObj} />}
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
