'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function requestApi($http, $location, applicationSettings, globalMessage) {
  var apiUrl = ($location.host() === 'localhost' ? applicationSettings.apiUrl : applicationSettings.apiUrlProd); 
  
	function requestGet(callback, route) {
    var promisse = $http.get(apiUrl + route);
    promisse.success(function (data) {
      callback(data);
    });
    promisse.error(function(err) {
      console.error('Erro ao buscar recursos da API - GET: ' + route);
      err = err || {};
      console.error(err);
      globalMessage.error(err.mensagem || "Erro inesperado");
    });
  }

  function requestPost(callback, data, route) {
    var promisse = $http.post(apiUrl + route, data);
    
    promisse.success(function(data) {
      callback(data);
    });
    promisse.error(function(err) {
      console.error('Erro enviar recurso para API - POST: ' + route);
      err = err || {};
      console.error(err);
      globalMessage.error(err.mensagem);
    });
  }

  function requestPut(callback, data, route) {
    var promisse = $http.put(apiUrl + route, data);
    
    promisse.success(function(data) {
      callback(data);
    });
    promisse.error(function(err) {
      console.error('Erro enviar recurso para API - PUT: ' + route);
      err = err || {};
      console.error(err);
      globalMessage.error(err.mensagem);
    });
  }

  function requestDel(callback, route) {
    var promisse = $http.delete(apiUrl + route);
    promisse.success(function() {
      callback();
    });
    promisse.error(function(err) {
      console.error('Erro ao buscar recursos da API - GET: ' + route);
      err = err || {};
      console.error(err);
      globalMessage.error(err.mensagem);
    });
  }

  function returnGet(route) {
    return $http.get(apiUrl + route);
  }

  function returnDel(route) {
    return $http.delete(apiUrl + route);
  }

  function returnPost(route, data) {
    return $http.post(apiUrl + route, data);
  }

  function returnPut(route, data) {
    return $http.put(apiUrl + route, data);
  }


  return {
    get: requestGet,
    post: requestPost,
    put: requestPut,
    del: requestDel,
    returnGet: returnGet,
    returnPost: returnPost,
    returnPut: returnPut,
    returnDel: returnDel
  };
}

factoriesModule.factory('requestApi', requestApi);