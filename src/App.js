import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note';
import Naigation from './Navigation';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    var user = {

    }
    return (
      <div className="container">
        <Navigation />
          <div className="App">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} NoteId={note.id} key={note.id} textColor={note.textColor} />            
              )
            })
          }
          </div>
      </div>
    );
  }
}

export default App;
