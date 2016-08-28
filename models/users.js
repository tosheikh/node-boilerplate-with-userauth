"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    email:DataTypes.STRING,
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    password:DataTypes.STRING,
    phone:DataTypes.STRING,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
    verified:DataTypes.BOOLEAN
  });

  return User;
};