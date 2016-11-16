'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function menuSelecionado($location) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      function setActive() {
        var urlAtual =$location.path();
        var urlLink = attrs.ngHref; 

        if (urlAtual.lastIndexOf(urlLink) !== -1) {
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

directivesModule.directive('menuSelecionado', menuSelecionado);