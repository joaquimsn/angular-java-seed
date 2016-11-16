'use strict';

var directivesModule = require('./_index');

function ApresentacaoController($scope, ApresentacaoService) {
    function apresentacaoCB(data) {
        $scope.apresentacao = data;
        
        var conteudo = angular.element(document.getElementById($scope.id));
        conteudo.append('<div class="imgmobile">'+$scope.apresentacao.conteudo+'</div>');
    }

    ApresentacaoService.buscarApresentacao(apresentacaoCB, $scope.id);
}

/**
 * @ngInject
 */
function senacApresentacao() {
  return {
    restrict: 'E',
    scope: {
        id: "@"
    },
    controller: ApresentacaoController,
    templateUrl: '/extranetead-portal/partials/main/apresentacao'
  };
}

directivesModule.directive('senacApresentacao', senacApresentacao);
