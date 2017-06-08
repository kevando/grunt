/* Module dependencies */
var express = require('express'),
    config = require('./config'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index');

// Init express server
app = express();
var router = express.Router();

// Server Config
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// all url info stored in routes
app.use('/', routes);

app.listen(app.get('port'), function () {
    console.log('Server running on port ' + app.get('port'));
});
