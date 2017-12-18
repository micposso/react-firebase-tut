import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props);
    }

    render(props){
        return (
            <div className="app-item-content">
                <div className="app-item-text">{this.props.noteContent}</div>
                <div className="app-item-close">+</div>
            </div>
        )
    }
}


export default Note;