var models  = require('../models');

/* GET users listing. */

exports.getAllUsers = function(req, res)
{
	models.User.findAll().then(function(users)
	{
		res.send(users);
	});
}


exports.authenticateUser = function(req, res)
{
	console.log(req.body);
	models.User.findOne({
		where: {email: req.body.email, password: req.body.password}
	})
	.then(function(user)
	{
		if (user == null){
			console.log('invalid username or password');
			res.send("Invalid username or password");
		}
		else{
			console.log(user.dataValues);
			res.send(user);		
		}
	});
}