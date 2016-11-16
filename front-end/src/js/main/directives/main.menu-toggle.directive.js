'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function menuToggle() {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.on('click', function () {
        var navbar = angular.element(document.getElementById('navbarCollapse'));
//        navbar.toggleClass('collapse');
//        navbar.toggleClass('collapsing');
//        navbar.css('height', '343px');
//        navbar.toggleClass('collapsing');
//        navbar.toggleClass('collapse');
//        navbar.toggleClass('in');
//        navbar.css('height', '1px');

      });
    }
  };
}

directivesModule.directive('menuToggle', menuToggle);

