'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function submenuSelecionado($location) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      function setActive() {
        var urlAtual =$location.path();
        var urlLink = attrs.ngHref; 

        if (urlAtual.replace(urlLink, '').length === 0) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      }
      scope.$on('$locationChangeSuccess', setActive);
      setActive();
    }
  };
}

directivesModule.directive('submenuSelecionado', submenuSelecionado);