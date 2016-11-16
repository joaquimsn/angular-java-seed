var express = require('express');
var path = require('path');
var morgan = require('morgan');
var errorHandler = require('errorhandler');
var compress = require('compression');
var multipart = require('connect-multiparty');
var helmet = require('helmet');
var expose = require('./source/expose/views')(express);
var routes = require('./source/routes')(express);
var partials = require('./source/expose/partials')(express);
var app = express();
var html = require('./source/html-template-engine')(app);

app.use(compress());
app.use(morgan('dev'));
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.disabled('x-powered-by');
app.use(multipart({ uploadDir: '/' }));

// js, css, images and fonts
app.use('/angular-java-seed/static', express.static(path.join(__dirname, './../build/')));
// js, css, images and fonts
app.use('/angular-java-seed/languages', express.static(path.join(__dirname, './../build/resources/languages/')));


// html files
app.set('views', path.join(__dirname, './../src/views'));
app.set('view engine', 'html');

// Routes for pages
app.use('/angular-java-seed/', routes);
app.use('/angular-java-seed/expose', expose);
app.use('/angular-java-seed/partials', partials);

module.exports = app;