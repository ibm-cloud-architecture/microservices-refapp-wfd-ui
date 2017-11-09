var api = require('../api');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  api.apiGet(function (data) {
    res.render('index', { title: 'What\'s for Dinner? - IBM Cloud Architecture - MicroProfile Reference Application', result : data});
  });
});

module.exports = router;
