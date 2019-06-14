// controllers/entry-controller.js

// Import the Entry model.
const Entry =  require('../models/entries');

// Instantiate the controller object
const entryController = {};

// Controller method for handling a request for all entries
entryController.findAll = (req, res) => {
  // Uses the findAll method from Entry
  Entry.findAll()
  .then(entries => {
    // Sends the entries as a JSON object
    res.json({
      message: 'Success',
      data: entries
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single Entry
entryController.findById = (req, res) => {
  // Entry method for finding by id, passes the id as an argument
  Entry.findById(req.params.id)
  .then(entry => {
    // Sends the entry as a JSON object
    res.json({
      message: "Success",
      data: entry
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = entryController;
