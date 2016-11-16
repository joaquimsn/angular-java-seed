'use strict';

/*
* Adiciona o systemUri ao rootScope durante a etapa de compliação,
* assim ele ficará acessivel para toda a aplicação
**/

/**
* @ngInject
*/
function running($rootScope, systemUri, applicationSettings, $location) {
	$rootScope.systemUri = systemUri;
	$rootScope.applicationSettings = applicationSettings;
	$rootScope.apiUrl = ($location.host() === 'localhost' ? applicationSettings.apiUrl : applicationSettings.apiUrlProd);
}

module.exports = running;