import React, { Component } from "react";
import {RichUtils } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import editorStyles from '../../node_modules/draft-js-inline-toolbar-plugin/lib/plugin.css';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import '../../node_modules/draft-js-emoji-plugin/lib/plugin.css'
let apiurl = process.env.REACT_APP_API_URL;
const inlineToolbarPlugin = createInlineToolbarPlugin();
const emojiPlugin = createEmojiPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const { EmojiSuggestions } = emojiPlugin;

export default class BlogAdd extends Component {
    
    state = {
        editorState: createEditorStateWithText("dsadadsasd"),
    };
    onChange = editorState => this.setState({ editorState });

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    setEditor = (editor) => {
        this.editor = editor;
    };
    focusEditor = () => {
            this.editor.focus();
    };
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
                "x-auth-header": this.props.user.token
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
                        <div 
                            className={editorStyles.editor}
                            onClick={this.focusEditor}
                        >
                            <Editor
                                // id="bodyid"
                                // ref={this.setEditor}
                                editorState={this.state.editorState}
                                handleKeyCommand={this.handleKeyCommand}
                                onChange={this.onChange}
                                plugins={[inlineToolbarPlugin,emojiPlugin]}
                                ref={(element) => { this.editor = element; }}
                            />
                            <InlineToolbar />
                            <EmojiSuggestions />
                        </div>
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
