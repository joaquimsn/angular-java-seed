'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function BannerController($scope, HomeService) {
  HomeService.buscarBannerPorCodigoPagina(function(banner) {
    $scope.bannerSelecionado = banner;
  }, 'INICIO');

  $scope.tempoTransicao =  3000;
}

controllersModule.controller('BannerController', BannerController);