import React, { Component } from "react"; // import logo from './logo.svg';
import NavBar from "./components/navbar";
import BlogRead from "./components/blogread";
import BlogHome from "./components/bloghome";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    blogs: [
      {
        id: "blog1",
        headline: "14 Ways Json Can Improve Your SEO",
        image: "http://example.com/image.jpg",
        author: "John Doe",
        genre: "search engine optimization",
        publisher: "Book Publisher Inc",
        url: "http://www.example.com",
        datePublished: "2015-09-20",
        dateCreated: "2015-09-20",
        dateModified: "2015-09-20",
        description: "We love to do stuff to help people and stuff",
        articleBody: `
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
                        The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
        `
      },
      {
        id: "blog2",
        headline: "14 Ways Json Can Improve Your SEO 222",
        image: "http://example.com/image.jpg",
        author: "John Doe",
        genre: "search engine optimization",
        publisher: "Book Publisher Inc",
        url: "http://www.example.com",
        datePublished: "2015-10-20",
        dateCreated: "2015-10-20",
        dateModified: "2015-10-20",
        description: "We love to do stuff to help people and stuff 222",
        articleBody: `
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
        `
      },
      {
        id: "blog2",
        headline: "14 Ways Json Can Improve Your SEO 222",
        image: "http://example.com/image.jpg",
        author: "John Doe",
        genre: "search engine optimization",
        publisher: "Book Publisher Inc",
        url: "http://www.example.com",
        datePublished: "2015-10-20",
        dateCreated: "2015-10-20",
        dateModified: "2015-10-20",
        description: "We love to do stuff to help people and stuff 222",
        articleBody: `
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
        `
      },
      {
        id: "blog2",
        headline: "14 Ways Json Can Improve Your SEO 222",
        image: "http://example.com/image.jpg",
        author: "John Doe",
        genre: "search engine optimization",
        publisher: "Book Publisher Inc",
        url: "http://www.example.com",
        datePublished: "2015-10-20",
        dateCreated: "2015-10-20",
        dateModified: "2015-10-20",
        description: "We love to do stuff to help people and stuff 222",
        articleBody: `
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
        `
      },
      {
        id: "blog2",
        headline: "14 Ways Json Can Improve Your SEO 222",
        image: "http://example.com/image.jpg",
        author: "John Doe",
        genre: "search engine optimization",
        publisher: "Book Publisher Inc",
        url: "http://www.example.com",
        datePublished: "2015-10-20",
        dateCreated: "2015-10-20",
        dateModified: "2015-10-20",
        description: "We love to do stuff to help people and stuff 222",
        articleBody: `
            The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.
            Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.
            To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live. Make sure you have 5.2 or higher in Node.js.
        `
      }
    ]
  };

  render() {
    console.log("in App");
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              path="/read/:blogid"
              render={props => <BlogRead {...props} blogs={this.state.blogs} />}
            />
            <Route exact path="/">
              <BlogHome blogs={this.state.blogs} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
