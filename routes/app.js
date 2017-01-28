var express = require('express');
var router = express.Router();
// Import user model ( note that we also have the corresponding export in the user.js)
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function (req, res, next) {
  // ** Extracting the email component from out view <body> and
  // ** Saving it to the variable email so that we can access it!
    var email = req.body.email;
    var user = new User({
      firstName: 'Jin',
      lastName: 'Kwon',
      password: 'super-secret',
      email: email
    });
    // Tells mongoose to save this user object to the user collection
    //
    user.save();
    res.redirect('/');
});

module.exports = router;
