'use strict';

var serviceModule = require('./_index');

function _criarArrayFromObject(systemConstants) {
    var array = [];
    for(var atributo in systemConstants) {
      var objeto = systemConstants[atributo];
      array.push(objeto);
    }

		return array;
}

/**
 * @ngInject
 */
function BreadcrumbService($window, MenuService, systemUriConstants) {
  function breadcrumbs() {
    var arrayBreadcrumb;
    if(!arrayBreadcrumb) {
      arrayBreadcrumb = _criarArrayFromObject(systemUriConstants);
    }
    return arrayBreadcrumb; 
  }

  function matchPage(page, otherPage) {
    return page === otherPage;  
  } 

  this.buscarCadeia = function(path) {
    var breadcrumb = breadcrumbs().filter(function(item) {
      return item.url === path;
    });
    
    var cadeiaPaginas = [];
    if(breadcrumb && breadcrumb[0]) {
      var paginas = breadcrumb[0].page.split('.');

      var pageToMatch = '';
      for(var index = 0; index < paginas.length; index ++) {
        pageToMatch = pageToMatch.concat(paginas[index]);
        angular.forEach(breadcrumbs(), function(item) {  
          if(matchPage(item.page, pageToMatch)) {
            cadeiaPaginas.push(item);
          }
        });
        pageToMatch += '.'; 
      }
    }

    return cadeiaPaginas;
  };
}

serviceModule.service('BreadcrumbService', BreadcrumbService);