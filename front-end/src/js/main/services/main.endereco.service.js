'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function EnderecoService(requestApi) {
	this.buscarUfs = function(callback) {
		requestApi.get(callback, '/public/api/enderecos/uf');
	};

	this.buscarCidadesPorUf = function(callback, uf) {
		requestApi.get(callback, '/public/api/enderecos/uf/' + uf + '/cidades')
	};
}

servicesModule.service('EnderecoService', EnderecoService);
