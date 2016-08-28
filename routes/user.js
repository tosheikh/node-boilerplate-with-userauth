var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
router.get('/', function(req, res) {
	models.User.findAll().then(function(users) {
  		console.log("USERS: ", users);
	});
  res.send('respond with a resource');
});

module.exports = router;
