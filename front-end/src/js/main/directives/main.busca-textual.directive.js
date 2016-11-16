'use strict';

var directivesModule = require('./_index');

function BuscaTextualController($scope, $location,$window, systemUri, BuscaTextualService) {
    $scope.iniciarBusca = function(termo){
            console.log('executou o iniciarBusca');
            console.log(systemUri.buscaTextual(termo));        
            $location.path(systemUri.buscaTextual()).search({termo: termo});
    };   
}

/**
 * @ngInject
 */
function senacBuscaTextual() {
  return {
    restrict: 'E',
    controller: BuscaTextualController,
    templateUrl: '/extranetead-portal/partials/main/busca-textual'
  };
}

directivesModule.directive('senacBuscaTextual', senacBuscaTextual);
