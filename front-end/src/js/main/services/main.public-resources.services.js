'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function PublicResourceService(requestApi) {
	this.buscarUsuarioPorCpf = function(callback, cpf) {
		requestApi.get(callback, '/public/api/usuarios/' + cpf);
	}

	this.buscarDepartamentosRegionais = function(callback) {
		requestApi.get(callback, '/public/api/departamentos');
	}

	this.buscarPolosPorDepartamento = function(callback, departamento) {
		requestApi.get(callback, '/public/api/departamentos/' + departamento.id + '/polos');
	}
}

servicesModule.service('PublicResourceService', PublicResourceService);