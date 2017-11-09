var api = require('../api');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //call the api apiGet and create callback function
  api.apiGet(function (data) {
    // render to the index.jade and pass the data from api call
    res.render('index', { result : data});
  });
});

module.exports = router;
