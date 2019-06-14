// routes/entry-routes.js

// Import express
const express = require('express');
// Define the router using the express router
const entryRouter = express.Router();

// Import the entriesController
const entryController = require('../controllers/entry-controller');

// For each route access the correct controller method

// Request all entries, send it to the / route
entryRouter.get('/', entryController.findAll);

// Request single entry, send it to the /:id route
entryRouter.get('/:id', entryController.findById);

// Export the router
module.exports = entryRouter;
