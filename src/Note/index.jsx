import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
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
        return (
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className="app-item-content">
                <div className="app-item-text">{this.props.noteContent}</div>
                <div className="app-item-close" 
                onClick={() => this.handleRemoveNote(this.noteId)}>+</div>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}


export default Note;