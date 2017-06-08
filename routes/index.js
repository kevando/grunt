var express = require('express');
var router = express.Router();
var path = require('path');

// Health
router.get('/health', function (req, res) {
    res.json({status: 'ok'});
});

// Home Page
router.get('/', function (req, res) {
  res.render('index',{title: 'Grunt'})
});

module.exports = router;
