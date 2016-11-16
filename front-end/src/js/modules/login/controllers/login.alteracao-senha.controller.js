'use strict';

var controllersModule = require('./_index');

function _getToken($location) {
	return $location.path().substring($location.path().lastIndexOf('/'), $location.path().length);
}

/**
 * @ngInject
 */
function AlteracaoSenhaController($scope, $location, LoginService, localMessage, systemUri, $window) {
	$scope.linkInvalido = true;
	$scope.desabilitarBotaoSalvar = true;
	$scope.habilitarAcessoHome = false;    
	
	function buscarSolicitacaoAlteracaoSenha(usuarioSimplificado) {
		$scope.usuario = usuarioSimplificado;
		$scope.linkInvalido = !usuarioSimplificado;
	}

	function alterarSenhaCb(data) {
		localMessage.success($scope, data.mensagem);
		$scope.desabilitarBotaoSalvar = true;
	    $scope.habilitarAcessoHome = true;        
	}

	$scope.alterarSenha = function (credencial) {
		credencial.usuario = $scope.usuario.cpf;
		LoginService.alterarSenha(alterarSenhaCb, credencial, _getToken($location), $scope);
	};

	$scope.compararSenhas = function(senha, novaSenha) {
		if (senha !== novaSenha) {
			localMessage.error($scope, "As senhas informadas são direfentes");
		} else {
			$scope.desabilitarBotaoSalvar = false;
		}
	};
    
  $scope.redirecionarTelaLogin = function(){
    $location.path(systemUri.login());
    $window.location.reload();
	};

	LoginService.buscarSolicitacaoAlteracaoSenha(buscarSolicitacaoAlteracaoSenha, _getToken($location));
}

controllersModule.controller('AlteracaoSenhaController', AlteracaoSenhaController);