var models  = require('../models');

/* GET users listing. */

exports.getAllUsers = function(req, res){
	models.User.findAll().then(function(users) {
		res.send(users);
	});
}


exports.authenticateUser = function(req, res){
	models.User.findOne({
		where: {username: 'tjsheikh'}
	}).then(function(user) {
  		console.log(user);
  		res.send(user);
  	});
}