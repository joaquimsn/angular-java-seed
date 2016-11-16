'use strict';

/**
 * @ngInject
 */
function errorInterceptor($q, $location, systemUriConstants, $rootScope) {
	return {
		responseError: function(rejection) {
			console.log(rejection.status);
			switch(rejection.status) {
				case 403:
					$location.path(systemUriConstants.naoAutorizado);
				break;

				case 422:
				console.log(rejection);
				$rootScope.mensagem = rejection.mensagem;
				break;
			}


			return $q.reject(rejection);
		}
	}
}


module.exports = errorInterceptor;

