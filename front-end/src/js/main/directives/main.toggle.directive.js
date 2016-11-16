'use strict';

var directivesModule = require('./_index');

function _changeClass(elm, toggleClass) {
 	elm.toggleClass(toggleClass);
}

/**
 * @ngInject
 */
function toggle() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        var toggleClass   = attrs.toggle;
        var targetClass   = attrs.targetClass;
        var elms          = angular.element(document.getElementsByClassName(targetClass));

        for(var i = 0; i < elms.length; i++) {
          var elmIndex           = angular.element(elms[i]);
          _changeClass(elmIndex, toggleClass);
        }

        var targetId      = attrs.targetId;
        var elm           = angular.element(document.getElementById(targetId));
        _changeClass(elm, toggleClass);
      });
    }
  };
}

directivesModule.directive('toggle', toggle);