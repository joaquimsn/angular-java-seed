'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function ApresentacaoService(requestApi) {
  function buscarApresentacao(callback, codigoPagina) {
      requestApi.get(callback, '/api/apresentacao/pagina/' + codigoPagina);
  }

  return {
      buscarApresentacao: buscarApresentacao
  }
}


servicesModule.service('ApresentacaoService', ApresentacaoService);
