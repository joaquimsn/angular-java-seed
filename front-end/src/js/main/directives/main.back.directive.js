'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function back($window) {
  return {
		restrict : 'A',
		link : function(scope, elem, attrs) {
			elem.bind('click', function() {
				$window.history.back();
			});
		}
	};
}

directivesModule.directive('back', back);