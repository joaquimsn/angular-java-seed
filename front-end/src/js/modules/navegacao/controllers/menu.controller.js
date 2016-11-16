'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MenuController($scope, $rootScope, MenuService) {
	function buscarMenusPrincipaisCb(menus) {
		$scope.menusPrincipais = menus;
		var todosMenus = menus;
		angular.forEach(menus, function(menu) {
			todosMenus = todosMenus.concat(menu.submenus);
		});

		MenuService.storageMenus(todosMenus);
	}

	function buscarMenusGestaoUsuarioCb(menus) {
		$scope.menusGestaoUsuario = menus;
		MenuService.storageMenusPlus(menus);
	}

	function buscarMenusLivresCb(menus) {
		MenuService.storageMenusPlus(menus);
	}

	$scope.setMenuSelecionado = function(menu) {
		$rootScope.menuSelecionado = menu;
	};

	MenuService.buscarMenusPrincipais(buscarMenusPrincipaisCb);
	MenuService.buscarMenusGestaoUsuario(buscarMenusGestaoUsuarioCb);
	MenuService.buscarMenusLivres(buscarMenusLivresCb);
}

controllersModule.controller('MenuController', MenuController);