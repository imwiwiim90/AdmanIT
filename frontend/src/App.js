import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
