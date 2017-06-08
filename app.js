/* Module dependencies */
var express = require('express'),
    config = require('./config'),
    helmet = require('helmet'),
    http = require('http'),
    path = require('path'),
    device = require('express-device'),

    logger = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),

    cookieParser = require('cookie-parser'),
    routes = require('./routes/index'),

    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    xthmb = require('express-thumbnail');

// Get server environment
var serverEnvironment = (process.env.SERVER_ENVIRONMENT || "LOCAL");

// Init express server
app = express();
var router = express.Router();


// Server Config
app.set('port', config.port);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Custom headers
app.use(function(req, res, next) {
    res.header('Server', 'Grunt');
    res.header("x-powered-by", "MSDOS"); // lol
    next();
});


// all url info stored in routes
app.use('/', routes);


app.use(express.static(path.join(__dirname, 'public')));





module.exports = app;

app.listen(app.get('port'), function () {
    console.log('Server running on port ' + app.get('port'));
});
