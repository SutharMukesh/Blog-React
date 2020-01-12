import React, { Component } from "react"; // import logo from './logo.svg';
import NavBar from "./components/navbar";
import BlogRead from "./components/blogread";
import BlogHome from "./components/bloghome";
import Signin from "./components/signin";
import Signup from "./components/signup";
import BlogAdd from "./components/blogadd";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let apiurl = process.env.REACT_APP_API_URL;
class App extends Component {
  state = {
    blogs: [],
    user: null,
  };

  // set user object after signin and signup
  setUserObj = (user) => {
    this.setState({ user })
  }

  refreshBlog = async () => {
    const blogs = await fetch(apiurl);
    const blogsdata = await blogs.json();
    this.setState({ blogs: blogsdata });
  }

  deleteBlog = async (id) => {
    if (window.confirm("you sure?")) {
      const deleteres = await fetch(apiurl + id, {
        method: "DELETE",
        headers: {
          "x-auth-header": this.state.user.token,
        }
      });
      const deleteresdata = await deleteres.json();
      alert(deleteresdata.message)
      await this.refreshBlog()
    }
  }

  // fetch all blogs before rendering
  async componentDidMount() {
    await this.refreshBlog()
  }

  render() {
    console.log("rendering app")
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} />
          <Switch>
            <Route
              path="/read/:id"
              render={props => <BlogRead {...props} blogs={this.state.blogs} user={this.state.user} />}
            />
            <Route
              exact
              path="/"
              render={props => <BlogHome {...props} blogs={this.state.blogs} user={this.state.user} deleteBlog={this.deleteBlog} />}
            />
            <Route
              exact
              path="/add"
              render={props => <BlogAdd {...props} user={this.state.user} refreshBlog={this.refreshBlog} apiurl={this.state.apiurl} />}
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
