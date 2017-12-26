import React, { Component } from 'react';
import Note from './Note';
import Navigation from './Navigation';
import Form from './Form';
import { Transition } from 'react-transition-group'
import { DB_CONFIG } from './Config';
import firebase from 'firebase/app';
import 'firebase/database'
import './App.css';

class App extends Component {
  // constructor get called first the component get mounted

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    // connect to firebase 
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');
    this.state = {
      notes: []
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ noteContent: note});
  }

  removeNote(noteId){
    //console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="container">
        <Navigation />
          <div className="app-items-container">
            {
              this.state.notes.map((note) => {
                return(
                  <Transition>
                    <Note noteContent={note.noteContent} 
                    noteId={note.id} 
                    key={note.id} 
                    removeNote={this.removeNote} />
                  </Transition>
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
