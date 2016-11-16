'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function showMessage() {
  return {
    restrict: 'E',
    templateUrl: '/extranetead-portal/partials/main/show-message',
    scope: {
      show: "=",
      nivel: "=",
      text: "="
    },
    link: function (scope, element) {
      scope.close = function () {
        scope.show = false;
      };
    }
  };
}

directivesModule.directive('showMessage', showMessage);