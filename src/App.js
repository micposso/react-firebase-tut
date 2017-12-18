import React, { Component } from 'react';
import Note from './Note';
import Navigation from './Navigation';
import Form from './Form';
import { DB_CONFIG } from './Config';
import firebase from 'firebase/app';
import 'firebase/database'
import './App.css';

class App extends Component {
  // constructor get called first the component get mounted

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    // connect to firebase 
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');
    this.state = {
      notes: []
    }
  }

  // add life cycle method here
  componentDidMount(){
    // push new note to the notes array
    const previousNotes = this.state.notes;
    // use firebase to set state
    // snap is an object that firebases uses as a representation of the DB 
    this.db.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })
      this.setState({
        note: previousNotes
      })
    })
  }

  addNote(note) {
    this.db.push().set({
      noteContent: note
    });
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
