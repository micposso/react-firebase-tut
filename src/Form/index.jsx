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

    // when the user input changes, set the value of the noteNewContent
    // to the value of what's in the input box.
    handleUserInput(e) {
        this.setState({
            noteNewContent: e.target.value,
        })
    }

    // pass the value of the input box to the state noteNewContent
    writeNote(){
        this.props.addNote(this.state.noteNewContent)
        // clean content of note on click
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