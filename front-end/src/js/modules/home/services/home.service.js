'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function HomeService(requestApi, globalMessage, localMessage) {
  this.buscarApresentacao = function(callback, codigoApresentacao) {
      requestApi.get(callback, '/api/apresentacao/pagina/'+ codigoApresentacao);
  };

  this.buscarBannerPorCodigoPagina = function(callback, codigoPagina) {
		requestApi.get(callback, '/api/banner/pagina/' + codigoPagina);
  };
    
  this.buscarUltimosAvisos = function(callback){
        requestApi.get(callback,'/api/aviso/ultimos');
  };
    
}

servicesModule.service('HomeService', HomeService);