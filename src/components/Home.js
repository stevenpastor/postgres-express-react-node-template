// src/components/Home.js

// Import react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Axios for making GET requests
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    // Define state
    this.state = {
      entries: [],
      dataLoaded: false
    }
  }

  // Is called when the component succesfully loads
  componentDidMount() {
    // GET request to our server
    axios({
      method: 'GET',
      url: '/api/entries'
    })
    // Saves the data to state. Only way to change the state is with setState
    .then(data => {
      console.log(data.data.data);
      this.setState({
        entries: data.data.data,
        dataLoaded: true
      });
    })
    // logs an error
    .catch(err => {
      console.log(err);
    });
  }

  renderEntries() {
    if (this.state.dataLoaded) {
      return this.state.entries.map(entry => {
        return (
          <div key={entry.id}>
            <Link to={`/${entry.id}`}>CLICK ME: This is the first column in entries table: "{entry.entry}"</Link>
            <p className="author">This is the second column in entries table: {entry.author}</p>
            <p className="author">The above is in src/components/Home.js in renderEntries function.</p>
          </div>
        )
      })
    }
    else {
      <p>Loading...</p>
    }
  }

  render() {
    return (
      <div className="Home">
        <h1>After edit file, npm run build then npm run start.</h1>
        <h1>This is from src/components/Home.js</h1>
        {this.renderEntries()}
      </div>
    )
  }
};

export default Home;
