import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Roster from './Roster.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/roster">Roster</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path="/roster" component={Roster} />
      </div>
    );
  }
}

export default App;
