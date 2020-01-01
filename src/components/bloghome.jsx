import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogHome extends Component {
  render() {
    console.log(this.props.articles);
    return (
      <React.Fragment style={{ display: "inline-block", textAlign: "left" }}>
        <div class="container card-columns">
          {this.props.articles.map(article => (
            <div
              class="card border-secondary bg-light mb-3"
              style={{ maxWidth: "30rem" }}
            >
              <img
                src={article.urlToImage}
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-header">{article.author}</div>
              <div class="card-body">
                <h5 class="card-title">{article.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {article.publishedAt}
                </h6>
                <p class="card-text">{article.description}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <Link to={"/read/" + article.id}>
                  <button type="button" class="btn btn-outline-secondary m-2">
                    Open
                  </button>
                </Link>
                <button type="button" class="btn btn-outline-secondary m-2">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
