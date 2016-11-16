'use strict';

var angular      = require('angular');
var bulk         = require('bulk-require');

var navegacaoModule = [
  'Extranetead-portal.Navegacao.controllers',
  'Extranetead-portal.Navegacao.services'
];

module.exports = angular.module('Extranetead-portal.Navegacao', navegacaoModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
