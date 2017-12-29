import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(props){

        const transitionOptions = {
            transitionName: 'fade',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        };

        return (
                <div className="app-item-content">
                    <div className="app-item-text">{this.props.noteContent}</div>
                    <div className="app-item-close" 
                    onClick={() => this.handleRemoveNote(this.noteId)}>+</div>
                </div>
        )
    }
}


export default Note;