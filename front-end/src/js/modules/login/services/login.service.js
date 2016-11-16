'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function LoginService(requestApi, globalMessage, localMessage) {
	this.requestToken = function(callback, credencial) {
		var promise = requestApi.returnPost('/auth/request-token', credencial);

		promise.success(function(data) {
			callback(data)
		});

		promise.error(function(error) {
			error = error || {};
      console.error(error);
			globalMessage.error((error.mensagem || "Falha no login"));
		});
	};

	this.resetarSenha = function(cpf, scope) {
		var promise = requestApi.returnPost('/auth/reset-credential', cpf);

		promise.success(function (data) {
			localMessage.info(scope, data.mensagem);
		});

		promise.error(function(error) {
			error = error || {};
      console.error(error);
			localMessage.error(scope, 'CPF inválido');
		});
	};

	this.buscarSolicitacaoAlteracaoSenha = function(callback, tokenReseteSenha, scope) {
		var promise = requestApi.returnGet('/auth/reset-credential' + tokenReseteSenha);

		promise.success(function (data) {
			callback(data);
		});

		promise.error(function(error) {
			console.error(error);
		});
	};

	this.alterarSenha = function (callback, credencial, tokenReseteSenha, scope) {
		var promise = requestApi.returnPut('/auth/reset' + tokenReseteSenha, credencial);

		promise.success(function (data) {
			callback(data);
		});

		promise.error(function(error) {
			error = error || {};
      console.error(error);
			localMessage.error(scope, (error.mensagem || "Não foi possível alterar a senha, tente novamente."));
		});
	};
}

servicesModule.service('LoginService', LoginService);