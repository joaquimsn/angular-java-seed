'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function scrollTop($document, $rootScope) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
    	$document.scrollTop(0, 0);
    }
  };
}

directivesModule.directive('scrollTop', scrollTop);