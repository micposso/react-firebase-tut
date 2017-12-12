import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    var user = {

    }
    return (
      <div className="App">
        <Note noteText={} userName={} userCity={} />
      </div>
    );
  }
}

export default App;
