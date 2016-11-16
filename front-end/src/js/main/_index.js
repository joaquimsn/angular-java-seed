'use strict';

var angular    = require('angular');
var bulk       = require('bulk-require');

var mainModule = [
  'Extranetead-portal.Main.controllers',
  'Extranetead-portal.Main.services',
  'Extranetead-portal.Main.directives',
  'Extranetead-portal.Main.interceptors',
  'Extranetead-portal.Main.factories',
  'Extranetead-portal.Main.filters'
];

module.exports = angular.module('Extranetead-portal.Main', mainModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
