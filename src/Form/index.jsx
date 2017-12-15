import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteNewContent: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            noteNewContent: e.target.value,
        })
    }

    writeNote(e){
        this.props.addNote(this.state.noteNewContent)
        //clean content of note on click
        this.setState({
            noteNewContent: '',
        })
    }

    render() {
        return (
            <div className="footer-form-container">
                <input className="footer-form-input" placeholder="write your note here"
                value={this.state.noteNewContent}
                onChange={this.handleUserInput}
                />
                <button className="footer-form-button"
                onClick={this.writeNote}>
                    add note
                </button>
            </div>
        )
    }
}

export default Form;