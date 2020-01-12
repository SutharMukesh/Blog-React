import React, { Component } from "react";
let apiurl = process.env.REACT_APP_API_URL;
export default class BlogAdd extends Component {
    addBlog = async event => {
        event.preventDefault();

        let blog = {
            title: event.target.titleid.value,
            tags: event.target.tagsid.value,
            body: event.target.bodyid.value,
            author: this.props.user.name,
            image: new FormData().append("img", event.target.coverimageid.files[0]),
            datepublished: new Date().toString(),
        };
        debugger
        const response = await fetch(`${apiurl}add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-header":this.props.user.token
            },
            body: JSON.stringify(blog)
        });
        const resdata = await response.json();
        alert(resdata.message);
        if (response.status === 200) {
            this.props.refreshBlog();
            this.props.history.push("/");
        }
    };

    render() {
        return (
            <div className="container mt-5">
                <form className="m-2" onSubmit={this.addBlog}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            id="titleid"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Tags</label>

                        <input
                            id="tagsid"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Cover Image</label>

                        <input
                            id="coverimageid"
                            type="file"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>

                        <textarea
                            id="bodyid"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-info">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
