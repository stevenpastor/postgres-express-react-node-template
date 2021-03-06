// src/App.js

// Import react and the component class
import React, { Component } from 'react';
// Import BrowserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import each component
import Home from './components/Home';
import Entry from './components/Entry';

// Import css file
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Entry} />

        </div>
      </Router>
    )
  }
};

// Export the App component
export default App;
