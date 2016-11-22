var models  = require('../models');

/* GET users listing. */

exports.getAllUsers = function(req, res)
{
	console.log('Log message', req.user);
	models.User.findAll().then(function(users)
	{
		res.send(users);
	});
}

