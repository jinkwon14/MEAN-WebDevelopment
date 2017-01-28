// Hold user models built with Mongo
// Hold message model built with Mongo
var mongoose = require('mongoose');
// Schema helps creating blueprint of models
var schema = mongoose.Schema;
var mongoose-unique-validator = require('mongoose-unique-validator');
// Defines what message model should look like
// ** User need to have Message reference
// ** Message need User reference
// ** Since one user can have multiple message, it is plural 'messages'
var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  // unique IS recognized by mongoose, but not automatically validated, thus needs to be added.
  email: {type: String, required: true, unique: true},
  // ref: == connected to other model created
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(mongoose-unique-validator);

// Set up model
// model('Name of Model') -- collection will be named messages
// In this case users.
module.exports = mongoose.model('User', schema)
