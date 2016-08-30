var models  = require('../models');
var md5 = require('md5');
var jwt = require("jsonwebtoken");
var configjs = require('../config/config.js');

exports.authenticateUser = function(req, res)
{
	models.User.findOne({
		where: {email: req.body.email, password: md5(req.body.password)}
	}).then(function(user)
	{
		if (user == null){
			var payload = {
				"success":false,
				"message":"Invalid username or password"
			}
			res.send(payload);
		}
		else{
			// console.log(user);
			var tokenLoad = {
				id:user.dataValues.id,
				username:user.dataValues.username
			}
			var token = jwt.sign(tokenLoad, configjs.secret);
			var payload = {
				success:true,
				message:"User authenticated",
				token: token
			}
			res.send(payload);		
		}
	});
}

exports.authenticateJWTToken = function(req, res){
	var token = null;

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
    {
      token = req.headers.authorization.split(' ')[1];
    }
	else if (req.query && req.query.token)
	{
		token = req.query.token;
	}

	if (token)
	{
		try
		{
			var decoded = jwt.decode(token, configjs.secret);
			models.User.findOne({where:{id: decoded.id}})
			.then(function(user)
			{
				if(user != null)
				{
					req.user = user;
					console.log('THIS IS WORKING');
					next();
				}
			});
		}
		catch (err)
		{
			return next();
		}
	}
	else
	{
		next();
	}
}

exports.dontFuckWithMe = function(req, res){
	res.send("Don't fuck with me");
}