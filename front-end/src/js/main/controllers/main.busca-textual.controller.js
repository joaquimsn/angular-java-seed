'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function BuscaTextualController($scope, $routeParams,$location,$window, systemUri, BuscaTextualService) {
        var termo = $routeParams.termo;
        $scope.termo = termo;
    
    if(termo != undefined && termo != null && termo != ''){
        BuscaTextualService.executarBusca(function(buscaContextual){
           
            if(buscaContextual){
                $scope.encontrouResultados = true;
                $scope.noticias = buscaContextual.resultadosBusca.noticia;                
                $scope.dicasVendas = buscaContextual.resultadosBusca.dica_venda;
            }else{
                $scope.encontrouResultados = false;
            }
        },termo);
    }
    
    $scope.abrirLink = function(link){
        $location.path(link);
    }
}

controllersModule.controller('BuscaTextualController', BuscaTextualController);