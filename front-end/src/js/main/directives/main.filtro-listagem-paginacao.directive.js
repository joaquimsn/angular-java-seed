'use strict';

var directivesModule = require('./_index');

function filtroPaginaController($scope, FiltroConsulta, applicationSettings) {
  $scope.search = {status: 'Ativo'};

  function filtroCb(result) {
    $scope.filtroResult = result;
    $scope.$emit(applicationSettings.eventFilterResult, result);
  }

  function buscarPorFiltro(search) {
    var search = search || {};
    $scope.pagina = 1;
      
    if(!search.parametos){
        console.log(search);
        search.parametos = [{pagina: 1}, {metodo: "asc"}]        
    }

    FiltroConsulta.filtrar(filtroCb, search, $scope.configuracaoFiltro);
  }

  function buscarPorPaginacao(search) {
    FiltroConsulta.filtrar(filtroCb, search, $scope.configuracaoFiltro);
  }

  $scope.buscarPorFiltro = buscarPorFiltro;
  $scope.buscarPorPaginacao =  buscarPorPaginacao;
  
  //buscarPorFiltro($scope.propriedadeFiltro);

  // faz a paginação inicial
}

/**
 * @ngInject
 */
function senacFiltroPagina() {
  return {
    restrict: 'A',
    require: 'senacFiltroPagina',
    controller: filtroPaginaController,
    link: function (scope, element, attrs, ctrls) {
      scope.search = scope.configuracaoFiltro.search;        
      if (scope.configuracaoFiltro.filterOnLoad) {
            scope.buscarPorFiltro(scope.search);
      }
    }
  };
}

directivesModule.directive('senacFiltroPagina', senacFiltroPagina);



function SenacPaginacao($scope) {
   $scope.nomeItem;
   $scope.reverse = true;
   $scope.pagina = 1;

   function trocarPagina() {
    var search = $scope.search;
    var metodo = $scope.reverse ? "asc" : "desc";
    var itemOrdenacao = $scope.nomeItem;
    search.parametos = [{pagina: $scope.pagina}, {metodo: metodo}];

    if (itemOrdenacao) {
      search.parametos.push({orderby: itemOrdenacao});
    }

    $scope.buscarPorPaginacao(search);
   }

   $scope.trocarPagina =  trocarPagina;
}

/**
 * @ngInject
 */
function senacPaginacao() {
  return {
    restrict: 'A',
    controller: SenacPaginacao,
    require: ['^senacFiltroPagina', 'senacPaginacao'],
    link: function (scope, element, attrs, ctrls) {

    }
  };
}

directivesModule.directive('senacPaginacao', senacPaginacao);







function SenacOrdenacaoColumns($scope) {

}

/**
 * @ngInject
 */
function senacOrdenacao() {
  return {
    restrict: 'A',
    controller: SenacOrdenacaoColumns,
    require: ['^senacPaginacao', 'senacOrdenacao'],
    link: function (scope, element, attrs, ctrls) {
      element.addClass('sortable-theme-bootstrap');
    }
  };
}

directivesModule.directive('senacOrdenacao', senacOrdenacao);







function SenacItemOrdencaoController($scope) {
  //Todo
}

/**
 * @ngInject
 */
function senacItemOrdenacao() {
  return {
    restrict: 'A',
    require: ['^senacPaginacao', '^senacOrdenacao', 'senacItemOrdenacao'],
    controller: SenacItemOrdencaoController,
    link: function (scope, element, attrs, ctrls) {
      element.addClass('sorting');
      var pagincaoController = ctrls[0];
      var OrdencaoColumnsCtrl = ctrls[1];

      function removerSortingSelecionados(itens) {
        for (var i = itens.length - 1; i >= 0; i--) {
          var item = angular.element(itens[i]);
          item.removeClass('sorting_asc');
          item.removeClass('sorting_desc');
        }
      }

      element.on("click", function(event) {
        var itensOrdenacao = angular.element(document.getElementsByClassName('sorting'));
        removerSortingSelecionados(itensOrdenacao);

        OrdencaoColumnsCtrl.nomeItem = attrs.senacItemOrdenacao;
        scope.nomeItem = attrs.senacItemOrdenacao;
        if (OrdencaoColumnsCtrl.nomeItem === attrs.senacItemOrdenacao) {
          element.removeClass(OrdencaoColumnsCtrl.reverse ? 'sorting_asc' : 'sorting_descscsorting_desc')
          element.addClass(OrdencaoColumnsCtrl.reverse ? 'sorting_desc' : 'sorting_asc');

          OrdencaoColumnsCtrl.reverse = !OrdencaoColumnsCtrl.reverse;
          scope.reverse = !OrdencaoColumnsCtrl.reverse;
        }
        
        scope.trocarPagina();

        event.stopPropagation();
      });

    }
  };
}

directivesModule.directive('senacItemOrdenacao', senacItemOrdenacao);