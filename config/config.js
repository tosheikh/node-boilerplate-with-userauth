// For sequelize
var cf_app = require( '../config/vcap_application');
var cf_svc = require( '../config/vcap_services');

const fs = require('fs');

module.exports = {
  development: {
    username: cf_svc.get_service_username(),
    password: cf_svc.get_service_password(),
    database: cf_svc.get_service_credential_name(),
    host: cf_svc.get_service_hostname(),
    dialect: 'mysql',
    secret: 'yoursecret'

  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    secret: 'yoursecret'
  },
  production: {
    username: cf_svc.get_service_username(),
    password: cf_svc.get_service_password(),
    database: cf_svc.get_service_credential_name(),
    host: cf_svc.get_service_hostname(),
    dialect: 'mysql',
    secret: 'yoursecret'
  }
};