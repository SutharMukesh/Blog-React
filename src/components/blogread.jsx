import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogRead extends Component {
  getArticle = () => {
    let { id } = this.props.match.params;
    return this.props.blogs.filter(blog => id === blog._id)[0];
  };
  render() {
    return (
      <React.Fragment>
        <div
          class="jumbotron jumbotron-fluid"
          style={{ display: "inline-block", textAlign: "left" }}
        >
          <div class="container">
            <h1 class="display-4">{this.getArticle().title}</h1>
            <p class="lead">{this.getArticle().author}</p>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col col-lg-2 btn-group-vertical h-25 ">
              <Link to="/" class="col ">
                <button type="button" class="btn btn-light">
                  Back
                </button>
              </Link>
              <Link to="/" class="col ">
                <button type="button" class="btn btn-light">
                  Edit
                </button>
              </Link>
            </div>
            <div class="col fluid">
              <p class="container lead">{this.getArticle().body}</p>
            </div>
            <div class="col col-lg-2"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
