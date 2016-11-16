'use strict';
/**
 * [Interceptor para HttpProvider, esse interceptor age no request atuando somente nas chamadas referentes a "API".
 * seu proposito é tornar cada requisição unica, evitando cache das requisições]
 * @type {HttpProvider}
 */
var factoriesModule = require('./_index');

function _adicionarInstantRequest(url, config) {
  var data = new Date();
  var paramInstantRequest = config.paramSerializer({'instant-request': data.getTime()});

	if (url.lastIndexOf('?') === -1) {
  	url = url.concat('?').concat(paramInstantRequest);
  } else {
  	url = url.concat('&').concat(paramInstantRequest);
  }
  return url;
}

/**
 * @ngInject
 */
function requestInstantParam() {
	return {
    request: function (config) {    
      var url = config.url;
      if (url.lastIndexOf('api') !== -1) {
      	config.url = _adicionarInstantRequest(url, config);
      } 

      return config;
    }
	};
}

factoriesModule.factory('requestInstantParam', requestInstantParam);