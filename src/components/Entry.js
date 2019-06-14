// src/components/Entry.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      entry: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    // Use string interpolation to get the id from the URL
    axios({
      method: 'GET',
      url: `/api/entries/${this.props.match.params.id}`
    })
    .then(data => {
      this.setState({
        entry: data.data.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderEntry() {
    const entry = this.state.entry;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p className="entyr">"This is the first column in entries table: {entry.entry}"</p>
          <p className="author">This is the second column in entries table: {entry.author}</p>
          <p className="author">The above is in src/components/Entry.js in renderEntry function.</p>
        </div>
      )
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="Entry">
        <h3>This is from src/components/Entry.js</h3>
        {this.renderEntry()}
        <Link to="/">Back to Entries</Link>
      </div>
    )
  }
};

export default Entry;
