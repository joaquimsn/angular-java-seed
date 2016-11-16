'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function MenuService(requestApi, $timeout, applicationSettings, $window) {
	this.buscarMenusPrincipais = function(callback) {
		requestApi.get(callback, '/api/menus?tipo=PORTAL');
	};

	this.buscarMenusGestaoUsuario = function(callback) {
		requestApi.get(callback, '/api/menus?tipo=PORTAL-GESTAO');	
	};

	this.buscarMenusLivres = function(callback) {
		requestApi.get(callback, '/api/menus/portal/livres');	
	};

	this.buscarSubmenusPorId = function(callback, id) {
		requestApi.get(callback, '/api/menus/' + id);
	};

	this.storageMenus = function(menus) {
		$window.sessionStorage.menusDisponiveisUsuario = angular.toJson(menus);
	};

	this.storageMenusPlus = function(menus) {
		// Remover esse timeout, fazer com encadeamento de promise
		$timeout(function() {
			var menusDisponiveisUsuario;
			if (!angular.isDefined($window.sessionStorage.menusDisponiveisUsuario)) {
				menusDisponiveisUsuario = [];
			} else {
				menusDisponiveisUsuario = JSON.parse($window.sessionStorage.menusDisponiveisUsuario);
			}

			menusDisponiveisUsuario = menusDisponiveisUsuario.concat(menus);
			$window.sessionStorage.menusDisponiveisUsuario = angular.toJson(menusDisponiveisUsuario);
		}, 1000);
	}; 

	this.getMenus = function() {
		return JSON.parse($window.sessionStorage.menusDisponiveisUsuario);
	};

	this.linksMenus = function() {
		var menus;
		var links = [];

		if (!angular.isDefined($window.sessionStorage.menusDisponiveisUsuario)) {
			menus = [];
		} else {
			menus = JSON.parse($window.sessionStorage.menusDisponiveisUsuario);
		}

		for (var i = menus.length - 1; i >= 0; i--) {
			links.push(applicationSettings.context + menus[i].link);
		}

		return links;
	};
}

servicesModule.service('MenuService', MenuService);