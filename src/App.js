import React, { Component } from 'react';
import Note from './Note';
import Navigation from './Navigation';
import Form from './Form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { DB_CONFIG } from './Config';
import firebase from 'firebase/app';
import 'firebase/database'
import './App.css';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

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

    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    return (
      <div className="container">
        <Navigation />
        <ReactCSSTransitionGroup {...transitionOptions}>
            <div className="app-items-container">
                {
                this.state.notes.map((note) => {
                    return(
                        <Note noteContent={note.noteContent} 
                        noteId={note.id} 
                        key={note.id} 
                        removeNote={this.removeNote} />
                        )
                    })
                }
            </div>
        </ReactCSSTransitionGroup>
        <Form addNote={this.addNote} />
      </div>
    );
  }
}

export default App;
