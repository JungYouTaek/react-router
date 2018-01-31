import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Home, About, Work } from '../index';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/about">어바웃</NavLink>
        <NavLink to="/Work">워크</NavLink>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
          <Route path='/work' component={Work} />
        </Switch>
      </nav>
    );
  }
}
export default Nav;
