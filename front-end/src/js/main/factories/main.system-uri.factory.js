'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function systemUri(systemUriConstants) {
	return {
		login: function() {
			return systemUriConstants.login.url;
		},
		alteracaoSenha: function() {
			return systemUriConstants.alteracaoSenha.url;
		},
		home: function() {
			return systemUriConstants.home.url;
		},
		sobreRede: function () {
			return systemUriConstants.sobreRede.url;
		},
		niveisEnsino: function() {
			return systemUriConstants.niveisEnsino.url;
		},
		niveisEnsinoFic: function() {
			return systemUriConstants.niveisEnsinoFic.url;
		},
		niveisEnsinoTecnico: function() {
			return systemUriConstants.niveisEnsinoTecnico.url;
		},
		niveisEnsinoSuperior: function() {
			return systemUriConstants.niveisEnsinoSuperior.url;
		},
		vendas: function() {
			return systemUriConstants.vendas.url;
		},
		estrategiaVenda: function() {
			return systemUriConstants.estrategiaVenda.url;
		},
		dicaVenda: function() {
			return systemUriConstants.dicaVenda.url;
		},        
		planoVenda: function() {
			return systemUriConstants.planoVenda.url;
		},
		planoVendaLancamento: function() {
			return systemUriConstants.planoVendaLancamento.url;
		},
		cotasPsg: function() {
			return systemUriConstants.cotasPsg.url;
		},        
		cotasPsgLancamento: function() {
			return systemUriConstants.cotasPsgLancamento.url;
		},        
		comunicacao: function() {
			return systemUriConstants.comunicacao.url;
		},
		pecas: function() {
			return systemUriConstants.pecas.url;
		},
		assessoria: function() {
			return systemUriConstants.assessoria.url;
		},        
		noticias: function() {
			return systemUriConstants.noticias.url;
		},
		noticiaDetalhe: function(path) {
			return systemUriConstants.noticiaDetalhe.url.replace(':path', path);
		},
		capacitacao: function() {
			return systemUriConstants.capacitacao.url;
		},
		capacitacaoDetalhe: function(path) {
			return systemUriConstants.capacitacaoDetalhe.url.replace(':path', path);
		}, 
		arquivos: function() {
			return systemUriConstants.arquivos.url;
		},          
		producaoFinanceiro: function() {
			return systemUriConstants.producaoFinanceiro.url;
		},
		producao: function() {
			return systemUriConstants.producao.url;
		},
		financeiro: function() {
			return systemUriConstants.financeiro.url;
		},        
		contato: function() {
			return systemUriConstants.contato.url;
		},
		faq: function() {
			return systemUriConstants.faq.url;
		},
		faleConosco: function() {
			return systemUriConstants.faleConosco.url;
		},        
		gestaoUsuario: function() {
			return systemUriConstants.gestaoUsuario.url;
		},        
		gestaoUsuarioCadastro: function() {
			return systemUriConstants.gestaoUsuarioCadastro.url;
		},        
		gestaoUsuarioEdicao: function(path) {
			return systemUriConstants.gestaoUsuarioEdicao.url.replace(':path', path);
		},        
		gestaoUsuarioAprovacao: function() {
			return systemUriConstants.gestaoUsuarioAprovacao.url;
		},        
		gestaoPolo: function() {
			return systemUriConstants.gestaoPolo.url;
		},        
		gestaoPoloCadastro: function() {
			return systemUriConstants.gestaoPoloCadastro.url;
		},        
		gestaoPoloEdicao: function(path) {
			return systemUriConstants.gestaoPoloEdicao.url.replace(':path', path);
		},        
		gestaoPerfil: function() {
			return systemUriConstants.gestaoPerfil.url;
		},        
		gestaoPerfilEdicao: function() {
			return systemUriConstants.gestaoPerfilEdicao.url;
		},        
		gestaoPerfilAlteracaoSenha: function() {
			return systemUriConstants.gestaoPerfilAlteracaoSenha.url;
		},    
		avisos: function() {
			return systemUriConstants.avisos.url;
		},  
		video: function(){
				return systemUriConstants.video.url;
		},
		buscaTextual: function() {
			return systemUriConstants.buscaTextual.url;
		},           
		naoEncontrado: function () {
			return systemUriConstants.naoEncontrado.url;
		},
		naoAutorizado: function () {
			return systemUriConstants.naoAutorizado.url;
		}
	};
}

factoriesModule.factory('systemUri', systemUri);
