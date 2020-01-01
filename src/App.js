import React, { Component } from "react"; // import logo from './logo.svg';
import NavBar from "./components/navbar";
import BlogRead from "./components/blogread";
import BlogHome from "./components/bloghome";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state={
    blogs:[]
  }
  }
  async componentDidMount() {
    const blogs = await fetch("http://localhost:3004/");
    const blogsdata = await blogs.json();
    this.setState({blogs:blogsdata})
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <NavBar />
          <Switch>
            <Route path="/read/:id" render={props => <BlogRead {...props} blogs={this.state.blogs} />}/>
            <Route exact path="/" render={props=><BlogHome {...props} blogs={this.state.blogs} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
