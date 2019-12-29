import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogRead extends Component {
  getBlog = () => {
    let { blogid } = this.props.match.params;
    console.log(this.props.blogs.filter(blog => blogid === blog.id));
    return this.props.blogs.filter(blog => blogid === blog.id)[0];
  };
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">{this.getBlog().headline}</h1>
            <p class="lead">{this.getBlog().description}</p>
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
              <p class="container lead">{this.getBlog().articleBody}</p>
            </div>
            <div class="col col-lg-2"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
