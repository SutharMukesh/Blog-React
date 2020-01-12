/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogHome(props) {
  console.log('rendering bloghome');
  return (
    <>
      <div className="container card-columns">
        {props.blogs.map((blog) => (
          <div
            key={blog._id}
            className="card border-secondary bg-light mb-3"
            style={{ maxWidth: '30rem' }}
          >
            <img src={blog.image} className="card-img-top" alt="" />
            <div className="card-header">{blog.author}</div>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {blog.datepublished}
              </h6>
              {/* <p className="card-text">{blog.body}</p> */}
            </div>
            <div className="card-footer bg-transparent border-success">
              <Link to={`/read/${blog._id}`}>
                <button
                  type="button"
                  className="btn btn-outline-secondary m-2"
                >
                    Open
                </button>
              </Link>
              {(() => {
                // show edit only when user is logged in
                if (props.user) {
                  return (
                    <>
                      <Link to={`/edit/${blog._id}`}>
                        <button
                          type="button"
                          className="btn btn-outline-secondary m-2"
                        >
                            Edit
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-2"
                      >
                          Delete
                      </button>
                    </>
                  );
                }
              })()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
