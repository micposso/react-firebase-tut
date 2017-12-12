import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //set react state of component
    this.state = {
      notes: [
        {noteContent: "This is note 1", id: 1},
        {noteContent: "This is note 2", id: 2}
      ],
    }
  }


  render() {
    var user = {

    }
    return (
      <div className="App">
        <Note noteText={} userName={} userCity={} />
      {
        this.state.notes.map((note) => {
          return (
            <Note noteContent={note.noteContent} NoteId={note.id} key={note.id} />            
          )
        })
      }
      </div>
    );
  }
}

export default App;
