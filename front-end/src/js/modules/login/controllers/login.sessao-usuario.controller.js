'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SessaoUsuarioController($scope, AuthService, $window, $location, systemUri) {
	$scope.sair = function() {
		AuthService.logout();
		$location.path(systemUri.login());
		$window.location.reload();
	}

	$scope.usuario = AuthService.usuario();
}

controllersModule.controller('SessaoUsuarioController', SessaoUsuarioController);