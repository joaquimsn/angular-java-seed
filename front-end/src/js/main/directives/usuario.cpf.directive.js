'use strict';

var directivesModule = require('./_index');

function validarCpf(numeroCpf) {
  var Soma = 0,
      Resto;

  if (numeroCpf === "00000000000") {
    return false;
  }

  for (var i=1; i<=9; i++) {
    Soma = Soma + parseInt(numeroCpf.substring(i-1, i)) * (11 - i);
  }

  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) {
    Resto = 0;
  }

  if (Resto !== parseInt(numeroCpf.substring(9, 10))) {
    return false;
  }

  Soma = 0;

  for (i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(numeroCpf.substring(i-1, i)) * (12 - i);
  }

  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) {
    Resto = 0;
  }

  if (Resto !== parseInt(numeroCpf.substring(10, 11))) {
    return false;
  }

  return true;
}

/**
 * @ngInject
 */
function cpf() {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
      ngModel.$validators.cpfvalid = function (modelValue) {
        return validarCpf(String(modelValue));
      }
    }
  };
}

directivesModule.directive('cpf', cpf);