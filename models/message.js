// Hold message model built with Mongo
var mongoose = require('mongoose');
// Schema helps creating blueprint of models
var schema = mongoose.Schema;

// Defines what message model should look like
var schema = new Schema({
  content: {type: String, required: true},
  //
  users: {type: Schema.Types.ObjectId, ref: 'User'}
});

// Set up model
// model('Name of Model') -- collection will be named messages
module.exports = mongoose.model('Message', schema)
