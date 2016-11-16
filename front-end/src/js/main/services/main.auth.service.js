'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function AuthService($window) {
	this.isAuthenticated = function () {
	  return angular.isDefined($window.sessionStorage.token);
	};

	this.logout = function () {
	  delete $window.sessionStorage.token;
	};

	this.token = function () {
	  return $window.sessionStorage.token;
	};

	this.usuario = function () {
	  return JSON.parse($window.sessionStorage.usuario);
	};

	this.storeToken = function (token) {
	  $window.sessionStorage.token = token;
	};

	this.storeUsuario = function (usuario) {
	  $window.sessionStorage.usuario = JSON.stringify(usuario);
	};
}

servicesModule.service('AuthService', AuthService);