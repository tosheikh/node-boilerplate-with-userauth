"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    email:DataTypes.STRING
  });

// force: true will drop the table if it already exists
User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    username: 'johnhancock',
    email: 'johnhancock@gmail.com',
    password: "test123"
  }, {
    username: 'danishmir',
    email: 'djmir@gmail.com',
    password: "test123"
  });
});


  return User;
};