'use strict';

var angular      = require('angular');
var bulk         = require('bulk-require');

var loginModule = [
  'Extranetead-portal.Login.controllers',
  'Extranetead-portal.Login.services'
];

module.exports = angular.module('Extranetead-portal.Login', loginModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
