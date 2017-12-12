import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
/* exercise, tranfer the necesary CSS from the static folder into Note.css */


class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.NoteId = props.noteId;
    }

    render(props){
        return (
            /* add the HTML from the static folder into this component, change class to className and use a element wrapper */
            <div>
                <h1>{this.props.noteContent}</h1>
                <h2>{this.props.NoteId}</h2>
            </div>
        )
    }
}


export default Note;