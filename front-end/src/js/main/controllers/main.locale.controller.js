'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LocaleController($scope, $translate) {
  $scope.locales = [
    {label: 'PORTUGUES', localeKey: 'pt'},
    {label: 'INGLES',    localeKey: 'en'}
  ];


  $scope.alterarIdioma = function(locale) {
    $translate.use(locale);
  }
}

controllersModule.controller('LocaleController', LocaleController);