'use strict';

var angular = require('angular');

// Application modules
require('./main/_index');
require('./modules/login/_index');
require('./modules/home/_index');


// Angular Modules
require('ng-mask/dist/ngMask');
require('angular-route');
require('angular-animate');
require('ng-file-upload');
require('angular-messages');
require('angular-scroll');
require('angular-sanitize');
require('angular-ui-bootstrap');
require('angular-ui-switch');
require('angular-i18n/angular-locale_pt-br');
require('angular-translate');
require('angular-cookies');
require('angular-bootstrap-calendar');
require('angular-translate-loader-static-files');
require('angular-translate-storage-local');
require('angular-translate-storage-cookie');


// Angular dependencies
var requires = [
    'Angular-java-seed.Login',
    'Angular-java-seed.Home',
    'Angular-java-seed.Main',
    'Angular-java-seed.Navegacao',
    'pascalprecht.translate',
    'ngRoute',
    'ngCookies',
    'ngMask',
    'ngSanitize',
    'ngMessages',
    'duScroll',
    'uiSwitch',
    'mwl.calendar',
    'ui.bootstrap',
    'ngAnimate'
];

angular.module('Angular-java-seed', requires);
angular.module('Angular-java-seed').constant('applicationSettings', require('./app.constants.application.settings'));
angular.module('Angular-java-seed').run(require('./app.run'));
angular.module('Angular-java-seed').run(require('./app.route-interceptor.run'));
angular.module('Angular-java-seed').config(require('./app.http-interceptors-register'));
angular.module('Angular-java-seed').constant('systemUriConstants', require('./app.constants.uri'));
angular.module('Angular-java-seed').config(require('./main/configurations/main.configurations.routes'));
angular.module('Angular-java-seed').config(require('./main/configurations/main.translate.config'));