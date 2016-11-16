'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ApresentacaoInicialController($scope, $uibModalInstance) {
    $scope.imagens = [
        '/extranetead-portal/static/resources/images/apresentacao/passo1.jpg',
        '/extranetead-portal/static/resources/images/apresentacao/passo2.jpg',
        '/extranetead-portal/static/resources/images/apresentacao/passo3.jpg'
    ];

    $scope.fechar = function() {
        $uibModalInstance.dismiss('cancel');
    };
}

controllersModule.controller('ApresentacaoInicialController', ApresentacaoInicialController);