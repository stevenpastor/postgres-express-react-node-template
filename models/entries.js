// models/entries.js

// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the postgres-express-react-node-template database.
// Specifically, the entries table.
const Entry = {};

// Define methods for the Entry object

// Returns all entries from the table
Entry.findAll = () => {
  return db.query(
    `SELECT * FROM entries`
  );
};

// Return one entry with the specific id
Entry.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM entries
      WHERE id = $1
    `,
    [id]
  );
};

// Export the Entry object
module.exports = Entry;
