'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
      return queryInterface.bulkInsert('Users', [{
        username: "johndoe",
        email:"johndoe@johndoe.com",
        firstName:"John",
        lastName:"Doe",
        password:"abc123",
        phone:"1234567",
        createdAt:new Date(),
        updatedAt:new Date(),
        verified:false
      }, 
      {
        username: "johndoe2",
        email:"johndoe2@johndoe.com",
        firstName:"John",
        lastName:"Doe",
        password:"abc123",
        phone:"1234567",
        createdAt:new Date(),
        updatedAt:new Date(),
        verified:false
      },
      {
        username: "johndoe3",
        email:"johndoe3@johndoe.com",
        firstName:"John",
        lastName:"Doe",
        password:"abc123",
        phone:"1234567",
        createdAt:new Date(),
        updatedAt:new Date(),
        verified:false
      }], {});
    },

    down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
    }
  };
