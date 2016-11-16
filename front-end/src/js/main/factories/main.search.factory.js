'use strict';

var factoriesModule = require('./_index');

function Search() {
  return {
    parametros: []
  };
}

/**
 * @ngInject
 */
function SearchBuild() {
	this.usuario = function() {
		return {
      uf: '',
      polo: '',
      parametros: []
    };
	};
}

factoriesModule.factory('SearchBuild', SearchBuild);