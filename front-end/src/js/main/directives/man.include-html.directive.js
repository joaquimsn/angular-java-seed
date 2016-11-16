'use strict';

var directivesModule = require('./_index');

function SenacHtmlController($scope, $element) {
  $scope.teste = 'teste';
}

/**
 * @ngInject
 */
function senacHtml() {
  return {
    restrict: 'A',
    require: 'senacHtml',
    scope: {
      titulo: '='
    },
    controller: SenacHtmlController,
    link: function (scope, element, attrs) {
      element.append(scope.titulo);
    }
  };
}

directivesModule.directive('senacHtml', senacHtml);