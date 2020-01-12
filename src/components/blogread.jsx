/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
let apiurl = process.env.REACT_APP_API_URL;
export default class BlogRead extends Component {

  state = {
    blog: {
      tags:[]
    }
  }
  
  async componentDidMount() {
    console.log("inside")
    debugger;
    const { id } = this.props.match.params;
    const blog = await fetch(`${apiurl}${id}`);
    const blogdata = await blog.json();
    this.setState({ blog: blogdata[0] });
  }

  render() {
    console.log("rendering blogread")
    return (
      <div className="container">
        <div
          className="card shadow-sm  d-flex flex-column mt-5"
          // style={{width:"60%"}}
        >
          <img
                src={(this.state.blog.image) ? (this.state.blog.image) : '/images/default-fallback-image.jpg'}
                className="card-img-top"
                alt="card img"
                style={{height: '15rem',"object-fit": "cover" }}
              />
          <div className="m-4 row justify-content-between">
            <div className="">
              <h2>{this.state.blog.title}</h2>
                <strong>Author: </strong>
              <span>
                {this.state.blog.author}
              </span>
              <div>
                <strong>Tags: </strong>
              {this.state.blog.tags.map((tag) => (
                <span className="badge mr-2 badge-primary">{tag}</span>
              ))}
              {(this.state.blog.datemodified)?(
              <div>
                <strong>Updated on: </strong>
                <span>{this.state.blog.datemodified}</span>
              </div>):(
              <div>
                <strong>Published on: </strong>
                <span>{this.state.blog.datepublished}</span>
              </div>)}
              </div>
            </div>
            <div className="">
              {(() => {
                // show edit only when user is logged in
                if (this.props.user) {
                  return (
                    <>
                      <Link to={`/edit/${this.props.match.params.id}`} className="mr-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </Link>
                      <Link to="/" className="">
                        <button type="button" className="btn btn-sm btn-outline-danger">
                          Delete
                        </button>
                      </Link>
                    </>
                  );
                }
              })()}
            </div>
          </div>
          <div className="m-4 ">
            <p className="">{this.state.blog.body}</p>
          </div>
        </div>
      </div>
    );
  }
}
