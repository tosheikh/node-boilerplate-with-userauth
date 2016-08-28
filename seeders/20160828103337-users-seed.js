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
        username: "tjsheikh",
        email:"tosheikh@gmail.com",
        firstName:"Tajammal",
        lastName:"Sheikh",
        password:"abc123",
        phone:"3324372897",
        createdAt:new Date(),
        updatedAt:new Date(),
        verified:false
      }, 
      {
        username: "jaida",
        email:"jaida@gmail.com",
        firstName:"Junaid",
        lastName:"Qamar",
        password:"abc123",
        phone:"03324372897",
        createdAt:new Date(),
        updatedAt:new Date(),
        verified:false
      },
      {
        username: "djmir",
        email:"djmir@gmail.com",
        firstName:"Danish",
        lastName:"Mir",
        password:"abc123",
        phone:"003324372897",
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
