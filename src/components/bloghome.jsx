import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container card-columns">
          {this.props.blogs.map(blog => (
            <div
              key={blog._id}
              class="card border-secondary bg-light mb-3"
              style={{ maxWidth: "30rem" }}
            >
              <img src={blog.image} class="card-img-top" alt=""></img>
              <div class="card-header">{blog.author}</div>
              <div class="card-body">
                <h5 class="card-title">{blog.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {blog.datepublished}
                </h6>
                {/* <p class="card-text">{blog.body}</p> */}
              </div>
              <div class="card-footer bg-transparent border-success">
                <Link to={"/read/" + blog._id}>
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
