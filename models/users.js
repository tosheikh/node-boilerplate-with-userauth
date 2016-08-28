// var sequelize = require('sequelize');

// var User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// // force: true will drop the table if it already exists
// // User.sync({force: true}).then(function () {
// //   // Table created
// //   return User.create({
// //     firstName: 'John',
// //     lastName: 'Hancock'
// //   });
// // });

// module.exports = {
//   User:User
// }

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
    email: 'johnhancock@gmail.com'
  });
});


  return User;
};