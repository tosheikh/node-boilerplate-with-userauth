var models  = require('../models');

/* GET users listing. */

exports.getAllUsers = function(req, res){
	models.User.findAll().then(function(users) {
	  res.send(users);
	});
}
