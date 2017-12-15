import React, { Component } from 'react';
import Note from './Note';
import Navigation from './Navigation';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);    
    this.state = {
      notes: []
    }
  }

  addNote(note) {
    // push new note to the notes array
    const previousNotes = this.state.notes;
    previousNotes.push({id: previousNotes.length + 1, noteContent: note });
    this.setState({
      notes: previousNotes,
    })
    //now you need to pass it as a prop to the component
  }

  render(props) {
    return (
      <div className="container">
        <Navigation />
          <div className="app-items-container">
            {
              this.state.notes.map((note) => {
                return(
                  <Note noteContent={note.noteContent} noteID={note.id} key={note.id} />                 
                )
              })
            }

          </div>
        <Form addNote={this.addNote} />
      </div>
    );
  }
}

export default App;
