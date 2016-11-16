'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function Session($window) {
  function createSession(user) {
    $window.sessionStorage.user = user;
  }

  function getUser() {
    return $window.sessionStorage.user;
  }

  return {
    createSession: createSession,
    getUser: getUser
  };
}

factoriesModule.factory('Session', Session);
