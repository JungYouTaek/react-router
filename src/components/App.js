import React, { Component } from 'react';
import { Nav } from './index'
import 'styles/css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav />
        </header>
      </div>
    );
  }
}

export default App;
