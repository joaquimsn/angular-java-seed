'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function downloadSignature(AuthService) {
  return {
    restrict: 'A',
    compile: function (element, attrs) {
      attrs.ngHref = !attrs.ngHref || attrs.ngHref.concat('?token=' + AuthService.usuario().cpf);

      attrs.ngSrc = !attrs.ngSrc || attrs.ngSrc.concat('?token=' + AuthService.usuario().cpf);
    }
  };
}

directivesModule.directive('senacDownloadSignature', downloadSignature);