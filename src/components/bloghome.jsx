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
      <div className="container d-flex flex-column mt-5">

        {(props.user) ? (
          <div>
            <Link
              to="/add"
            >
              <button
                type="button"
                className="btn float-right btn-sm btn-outline-primary m-2"
              >
Add Blog
              </button>
            </Link>
          </div>
        ) : <></>}

        {props.blogs.map((blog) => (

          <div
            key={blog._id}
            className="card hoverable shadow-sm d-flex flex-row mb-3"
          >
            <img
              src={(blog.image) ? (blog.image) : '/images/default-fallback-image.jpg'}
              className="card-img"
              alt="card img"
              style={{ width: '10rem', height: '10rem', 'object-fit': 'cover' }}
            />
            <div className="container d-flex flex-row justify-content-between card-body">
              <div className="flex-fill">
                <Link
                  to={`/read/${blog._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h5 className="card-title">{blog.title}</h5>
                </Link>
                <h6 className="card-subtitle text-muted">
                  {blog.author}
                </h6>
              </div>
              <div className="">
                {(() => {
                  // show edit only when user is logged in
                  if (props.user) {
                    return (
                      <>
                        <Link to={`/edit/${blog._id}`}>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary m-2"
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => {
                            props.deleteBlog(blog._id);
                          }}
                        >
                          Delete
                        </button>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
