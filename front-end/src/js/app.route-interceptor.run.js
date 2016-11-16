'use strict';

/**
 * @ngInject
 */
function run($rootScope, AuthService, systemUri, MenuService, $location) {
  function verifyAccess() {
    var path = $location.path(),
        availablePaths = MenuService.linksMenus();

    if (!AuthService.isAuthenticated()) {
      $rootScope.showLogin = true;

      // Além da pagina de login, somente a pagina alteracao-senha possui acesso livre
      if ($location.path().lastIndexOf(systemUri.alteracaoSenha().replace('/:token', '')) !== -1) {
        $rootScope.showAlteracaoSenha = true;
        $rootScope.showLogin = false;
      } else {
        $location.path(systemUri.login());
      }
    } else {
      var possuiAcesso = function(item) {
        var pathReplaced = path.replace(item, '');
        pathReplaced = pathReplaced.replace('/cadastro', '');

        var isNumeric;
        var splited;
        if(pathReplaced.length > 0) {
          splited = pathReplaced.split('/');
          isNumeric = !isNaN(splited.pop());
        }

        // Quando o length = 0 então houve o match das rotas, 
        // caso seja maior que zero e o ultimo bloco for um numero, então a url é dinamica
        return (pathReplaced.length === 0 || isNumeric) ? true : false;
      };
      
      if (!availablePaths.some(possuiAcesso) && path !== systemUri.home()) {
        $location.path(systemUri.naoEncontrado());
      }
    }
  }

  $rootScope.$on('$locationChangeStart', verifyAccess);
  verifyAccess();
}

module.exports = run;
