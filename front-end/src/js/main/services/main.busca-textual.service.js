'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function BuscaTextualService(requestApi) {
  this.executarBusca = function(callback, termoBusca) {
      requestApi.get(callback, '/api/busca/'+termoBusca);
  };

}
servicesModule.service('BuscaTextualService', BuscaTextualService);
