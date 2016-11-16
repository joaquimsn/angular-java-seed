'use strict';

var angular      = require('angular');
var bulk         = require('bulk-require');

var homeModule = [
  'Extranetead-portal.Home.controllers',
  'Extranetead-portal.Home.services'
];

module.exports = angular.module('Extranetead-portal.Home', homeModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
