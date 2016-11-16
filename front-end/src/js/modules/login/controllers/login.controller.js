'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LoginController($scope, $timeout, LoginService, AuthService, $location, systemUri, $window, $uibModal) {
	function requestTokenCb(data) {
    AuthService.storeToken(data.senacToken.token);
    AuthService.storeUsuario(data);
    
    $location.path(systemUri.home());
    
    $scope.$on('$locationChangeSuccess', function() {
      $window.location.reload();
    });
	}

  $scope.efetuarLogin = function(credencial) {
  	LoginService.requestToken(requestTokenCb, credencial, $scope);
  };

  $scope.abrirModalResetSenha = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      controller: 'ReseteSenhaController',
      templateUrl: '/extranetead-portal/partials/login/login_reset_senha'
    });

    modalInstance.result.then(function (mensagem) {
      $scope.teste = mensagem;
    }, function () {
      //TODO
    });

  };

  $scope.abrirModalSolicitacaoAcesso = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      size: 'lg',
      controller: 'UsuarioSolicitacaoAcessoController',
      templateUrl: '/extranetead-portal/partials/login/login_solicitacao_acesso'
    });
  };

  function modalApresentacaoInicial() {
    var modalInstance = $uibModal.open({
      animation: true,
      size: 'md',
      windowClass: 'modal-apresentacao',
      controller: 'ApresentacaoInicialController',
      templateUrl: '/extranetead-portal/partials/login/apresentacao_inicial'
    });
  }
  
  modalApresentacaoInicial();
}

controllersModule.controller('LoginController', LoginController);