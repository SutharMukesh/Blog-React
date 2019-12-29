import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogHome extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div class="container card-columns" style={{ display: "inline-block" }}>
          {this.props.blogs.map(blog => (
            <div
              class="card border-secondary bg-light mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div class="card-header">{blog.publisher}</div>
              <div class="card-body">
                <h5 class="card-title">{blog.headline}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{blog.author}</h6>
                <p class="card-text">{blog.description}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <Link to={"/read/" + blog.id}>
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
