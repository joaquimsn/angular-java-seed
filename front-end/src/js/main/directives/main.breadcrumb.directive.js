'use strict';

var directivesModule = require('./_index');

function BreadcrumbController($scope, $location, BreadcrumbService) {
  function montarNavegacao() {
    var path = $location.path().replace(/(\/[0-9]*)$/g, '/:path');
    $scope.navegacoes =  BreadcrumbService.buscarCadeia(path);
  }

  $scope.$on('$locationChangeSuccess', montarNavegacao);
  montarNavegacao();
}

/**
 * @ngInject
 */
function senacBreadcrumb() {
  return {
    restrict: 'E',
    templateUrl: '/extranetead-portal/partials/main/breadcrumb',
    scope: true,
    require: 'senacBreadcrumb',
    controller: BreadcrumbController,
    link: function (scope, element) {
    }
  };
}

directivesModule.directive('senacBreadcrumb', senacBreadcrumb);