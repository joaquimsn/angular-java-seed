'use strict';

/**
 *@ngInject
 */
function translateConfig($translateProvider) {
   $translateProvider.useStaticFilesLoader({
      prefix: '/extranetead-portal/static/resources/languages/',
      suffix: '.json'
   });

   $translateProvider.useLocalStorage();
   $translateProvider.preferredLanguage('pt');
   $translateProvider.useSanitizeValueStrategy('escape');
}

module.exports = translateConfig;