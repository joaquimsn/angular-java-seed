'use strict';

var directivesModule = require('./_index');

function SubmenuController($scope, $location, MenuService) {
	var menuSelecionado = $scope.menuSelecionado;
	if(menuSelecionado) {
    $scope.submenus = menuSelecionado.submenus;
	}
}

/**
 * @ngInject
 */
function senacSubmenu() {
  return {
    restrict: 'E',
    templateUrl: '/extranetead-portal/partials/main/submenu',
    scope: true,
    controller: SubmenuController,
    link: function (scope, element) {

    }
  };
}

directivesModule.directive('senacSubmenu', senacSubmenu);