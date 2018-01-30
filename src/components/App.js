import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Home, Roster } from './index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/roster">Roster</Link></li>
        </ul>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path="/roster" component={Roster} />
        </Switch>
      </div>
    );
  }
}

export default App;
