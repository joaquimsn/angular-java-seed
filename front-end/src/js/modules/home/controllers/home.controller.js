'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeController($scope, $location, $uibModal, HomeService) {

	function apresentacaoCB(data) {
		$scope.apresentacao = data;
		var conteudo = angular.element(document.getElementById('conteudo'));
		conteudo.html($scope.apresentacao.conteudo);
	}

	HomeService.buscarApresentacao(apresentacaoCB, 'INICIO');

	HomeService.buscarUltimosAvisos(function (data) {
		$scope.avisos = data;
	});

	$scope.abrirModalAviso = function (avisoParam) {
		var modalInstance = $uibModal.open({
			animation: true,
			size: 'lg',
			controller: 'ModalAvisoController',
			templateUrl: '/extranetead-portal/partials/home/modal_aviso',
			resolve: { aviso: avisoParam }
		});
	};
}

function ModalAvisoController($scope, aviso, $uibModalInstance) {
	$scope.aviso = aviso;
	$scope.fechar = function () {
		$uibModalInstance.dismiss();
	};
}

controllersModule.controller('HomeController', HomeController);
controllersModule.controller('ModalAvisoController', ModalAvisoController);


