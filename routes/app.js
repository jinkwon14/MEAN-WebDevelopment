var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // Render the RESponse
    res.render('index');
});

module.exports = router;
