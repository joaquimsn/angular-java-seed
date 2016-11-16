'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function CategoriaService(requestApi) {
	this.buscarTodas = function(callback){
		requestApi.get(callback,'/api/categoria');
	}

	this.buscarPorTipo = function(callback, tipo){
      requestApi.get(callback,'/api/categoria/tipo/'+tipo);
  }
}

servicesModule.service('CategoriaService', CategoriaService);