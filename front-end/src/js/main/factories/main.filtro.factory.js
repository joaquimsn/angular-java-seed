'use strict';

var factoriesModule = require('./_index');

function _adicionarParamentrosParaUrl(url, parametos) {
	if (parametos instanceof Array && parametos.length > 0) {
		url = url.concat('?');

		for (var index = parametos.length - 1; index >= 0; index--) {
			for(var atributo in parametos[index]) {
				var parametro = parametos[index];
				url = url.concat(atributo).concat('=').concat(parametro[atributo]).concat('&');
			}
		}

		return url.substring(0, url.lastIndexOf('&'));
	}
}

/**
 * @ngInject
 */
function FiltroConsulta(requestApi, globalMessage, UsuarioService) {
	function Paginacao(result) {
		return {
		 totalCount: result.totalCount,
  	 maxPageSize: result.maxPageSize,
  	 data: result.data
		};
	}

	function filtroCb(result) {
		return new Paginacao(result.data);
	}

	function filtrar(callback, search, configuracao) {
		var promise = requestApi.returnPost(_adicionarParamentrosParaUrl(configuracao.rota, search.parametos), search)
				.then(filtroCb)
				.then(callback);
	}

	return {
		filtrar: filtrar,
		configuracaoNoticia: {rota: '/api/filtro/noticia', filterOnLoad: true, search: {dataExpiracaoRestrita: 'true',parametos:[{orderby: 'dataInicio'},{metodo: 'desc'}]}},
		configuracaoUsuario: {rota: '/api/filtro/usuario', filterOnLoad: false},
		configuracaoDepartamentoPolo:  {rota: '/api/filtro/departamento', filterOnLoad: true, search: {tipoDepartamento: 'POLO'}},
		configuracaoDicaVenda:  {rota: '/api/filtro/dica-venda', filterOnLoad: true, search: {}},
		configuracaoAvisos:  {rota: '/api/filtro/avisos/maxPage/6', filterOnLoad: true, search: {dataExpiracaoRestrita: 'true'}},
		configuracaoVideos: {rota: '/api/filtro/videos/maxPage/8', filterOnLoad: true, search: {dataExpiracaoRestrita: 'true'}},
		configuracaoCursos: {rota: '/api/filtro/cursos', filterOnLoad: false, search:{}}
	};

}

factoriesModule.factory('FiltroConsulta', FiltroConsulta);