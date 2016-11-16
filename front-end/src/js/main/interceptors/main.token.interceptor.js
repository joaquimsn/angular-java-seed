'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function tokenInterceptor(AuthService) {
	return {
    request: function (config) {
      config.headers = config.headers || {};
      config.headers.Authorization = "jwt:" + AuthService.token();
      return config;
    }
	};
}

factoriesModule.factory('tokenInterceptor', tokenInterceptor);