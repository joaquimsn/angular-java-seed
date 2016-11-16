'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function deviceDetector($window, applicationSettings) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var w = angular.element($window);
      scope.getWindowDimensions = function () {
        return {
          'h': w[0].innerHeight,
          'w': w[0].innerWidth
        };
      };
      
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
        scope.windowHeight    = newValue.h;
        var windowWidth     = newValue.w;
        scope.device          = _buildStringDevice(windowWidth, applicationSettings);
        scope.isMobile        = isMobile(windowWidth, applicationSettings);
        scope.isDesktop       = isDesktop(windowWidth, applicationSettings);
      }, true);

      w.bind('resize', function () {
        scope.$apply();
      });
    }
  };
}

function _buildStringDevice(width, applicationSettings) {
  return (width < applicationSettings.resWidthHideMenu) ? 'mobile' : 'desktop';
}

function isMobile(width, applicationSettings) {
  return (width < applicationSettings.resWidthHideMenu);
}

function isDesktop(width, applicationSettings) {
  return (width >= applicationSettings.resWidthHideMenu);
}

directivesModule.directive('deviceDetector', deviceDetector);