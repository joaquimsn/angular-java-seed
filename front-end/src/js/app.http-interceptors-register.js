'use strict';

/**
 * @ngInject
 */
function httpIntercptorsRegister($httpProvider) {
	$httpProvider.interceptors.push('tokenInterceptor');
	$httpProvider.interceptors.push('requestInstantParam');
//	$httpProvider.interceptors.push('errorInterceptor');
}

module.exports = httpIntercptorsRegister;