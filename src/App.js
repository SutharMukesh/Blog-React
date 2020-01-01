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
    articles:[]
  }
  }
  async componentDidMount() {
    const news = await fetch(
      "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=7357cb05c5234c949c0529bbe9de3e46"
    );
    const newsdata = await news.json();
    let id=0
    newsdata.articles = newsdata.articles.map((article)=>{article.id=id++; return article})
    console.log(newsdata.articles);
    this.setState({articles:newsdata.articles})
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <NavBar />
          <Switch>
            <Route path="/read/:id" render={props => <BlogRead {...props} articles={this.state.articles} />}/>
            <Route exact path="/" render={props=><BlogHome {...props} articles={this.state.articles} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
