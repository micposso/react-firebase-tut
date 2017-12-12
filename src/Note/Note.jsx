import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
/* exercise, tranfer the necesary CSS from the static folder into Note.css */



class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.NoteId = props.noteId;
        this.Color = props.textColor;
    }


    render(props){

        const textstyles = {
            background: "#0f0",
            fontSize: "32px"
        };

        return (
            /* add the HTML from the static folder into this component, change class to className and use a element wrapper */
            <div>
                <h1 style={textstyles}>{this.props.noteContent}</h1>
                <h2 style={textstyles}>{this.props.NoteId}</h2>
            </div>
        )
    }
}


export default Note;