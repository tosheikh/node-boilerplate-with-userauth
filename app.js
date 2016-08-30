var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

var Sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var configjs = require('./config/config.js');
var env = process.env.NODE_ENV || 'development';
var router = express.Router();

var config = require(path.join(__dirname, 'config', 'config.json'))[env];

var app = express();
app.set('superSecret', configjs.secret);
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

//import controllers
var user = require('./controllers/user.js');



//DB Initialization
var sequelize = new Sequelize(config.database, config.username, config.password, {

  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});



//confirm DB connection
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


// view engine setup

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//=============== ROUTES ===================//

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

app.use('/users', user.getAllUsers);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;
