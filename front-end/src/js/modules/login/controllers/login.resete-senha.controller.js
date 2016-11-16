'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ReseteSenhaController($scope, LoginService, $uibModalInstance) {
	$scope.resetarSenha = function(cpf) {
		LoginService.resetarSenha(cpf, $scope);
		$scope.disabled = true;
	}

	$scope.fechar = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

controllersModule.controller('ReseteSenhaController', ReseteSenhaController);


