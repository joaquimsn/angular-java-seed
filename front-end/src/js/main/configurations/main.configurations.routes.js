'use strict';

/**
 * @ngInject
 */
function route($routeProvider, $locationProvider, systemUriConstants, applicationSettings) {
	$routeProvider.when(applicationSettings.context, {
		templateUrl: applicationSettings.context + '/expose/home/home',
		controller: 'HomeController'
	})
	.when(systemUriConstants.home.url, {
		templateUrl: applicationSettings.context + '/expose/home/home',
		controller: 'HomeController'
	})
	.when(systemUriConstants.sobreRede.url, {
		templateUrl: applicationSettings.context + '/expose/sobre-rede/sobre_rede',
		controller: 'SobreRedeController'
	})
	.when(systemUriConstants.niveisEnsino.url, {
		templateUrl: applicationSettings.context + '/expose/nivel-ensino/niveis',
		controller: 'NivelEnsinoController'
	})
	.when(systemUriConstants.niveisEnsinoFic.url, {
		templateUrl: applicationSettings.context + '/expose/nivel-ensino/modalidade',
		controller: 'NivelEnsinoFicController'
	})
	.when(systemUriConstants.niveisEnsinoTecnico.url, {
		templateUrl: applicationSettings.context + '/expose/nivel-ensino/modalidade',
		controller: 'NivelEnsinoTecnicoController'
	})
	.when(systemUriConstants.niveisEnsinoSuperior.url, {
		templateUrl: applicationSettings.context + '/expose/nivel-ensino/modalidade',
		controller: 'NivelEnsinoSuperiorController'
	})
	.when(systemUriConstants.vendas.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas'
	})
	.when(systemUriConstants.estrategiaVenda.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas_estrategias'
	})
	.when(systemUriConstants.dicaVenda.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas_dicas',
		controller: 'DicaVendaController'
	})
	.when(systemUriConstants.planoVenda.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas_planos',
		controller: 'ProjecaoVendaController',
	})
	.when(systemUriConstants.planoVendaLancamento.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas_planos',
		controller: 'ProjecaoVendaLancamentoController'
	})
	.when(systemUriConstants.cotasPsg.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas_cotas',
		controller: 'ProjecaoPsgController'
	})
	.when(systemUriConstants.cotasPsgLancamento.url, {
		templateUrl: applicationSettings.context + '/expose/venda/vendas_cotas',
		controller: 'ProjecaoPsgLancamentoController'
	})        
	.when(systemUriConstants.noticias.url, {
		templateUrl: applicationSettings.context + '/expose/noticia/noticias',
		controller: 'NoticiaController'
	})
	.when(systemUriConstants.noticiaDetalhe.url, {
		templateUrl: applicationSettings.context + '/expose/noticia/noticia_detalhe',
		controller: 'NoticiaDetalhamentoController'
	})
	.when(systemUriConstants.comunicacao.url, {
		templateUrl: applicationSettings.context + '/expose/comunicacao/comunicacao'
	})
	.when(systemUriConstants.pecas.url, {
		templateUrl: applicationSettings.context + '/expose/comunicacao/comunicacao_pecas',
    controller: 'ComunicacaoController'        
	})
	.when(systemUriConstants.assessoria.url, {
		templateUrl: applicationSettings.context + '/expose/comunicacao/comunicacao_assessoria',
    controller: 'ComunicacaoController'
	})  
	.when(systemUriConstants.capacitacao.url, {
		templateUrl: applicationSettings.context + '/expose/capacitacao/capacitacao'
	})
	.when(systemUriConstants.capacitacaoDetalhe.url, {
		templateUrl: applicationSettings.context + '/expose/capacitacao/capacitacao_detalhe',
		controller: 'CapacitacaoDetalhamentoController'
	})
	.when(systemUriConstants.arquivos.url, {
		templateUrl: applicationSettings.context + '/expose/capacitacao/capacitacao_arquivos',
		controller: 'CapacitacaoArquivoController'
	})
  .when(systemUriConstants.producaoFinanceiro.url, {
		templateUrl: applicationSettings.context + '/expose/relatorios/producao'
	})
  .when(systemUriConstants.producao.url, {
		templateUrl: applicationSettings.context + '/expose/relatorios/producao_relatorio_producao'
	})  
  .when(systemUriConstants.financeiro.url, {
		templateUrl: applicationSettings.context + '/expose/relatorios/producao_relatorio_financeiro'
	})
  .when(systemUriConstants.contato.url, {
		templateUrl: applicationSettings.context + '/expose/contato/contato'
	})
  .when(systemUriConstants.faq.url, {
		templateUrl: applicationSettings.context + '/expose/contato/contato_faq',
		controller: 'FaqController'
	})
  .when(systemUriConstants.faleConosco.url, {
		templateUrl: applicationSettings.context + '/expose/contato/contato_fale',
		controller: 'FaleConoscoController'
	})    
	.when(systemUriConstants.gestaoUsuario.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-usuario/gestao_usuario',
		controller: 'GestaoUsuarioController'
	})    
	.when(systemUriConstants.gestaoUsuarioCadastro.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-usuario/usuario_formulario',
		controller: 'UsuarioCadastroController'
	})    
	.when(systemUriConstants.gestaoUsuarioEdicao.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-usuario/usuario_formulario',
		controller: 'UsuarioEdicaoController'
	})    
	.when(systemUriConstants.gestaoUsuarioAprovacao.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-usuario/aprovacao_usuario',
		controller: 'UsuarioAprovacaoController'
	})    
	.when(systemUriConstants.gestaoPolo.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-polo/gestao_polo',
		controller: 'GestaoPoloController'
	})    
	.when(systemUriConstants.gestaoPoloCadastro.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-polo/polo_formulario',
		controller: 'DepartamentoPoloCadastroController'
	})    
	.when(systemUriConstants.gestaoPoloEdicao.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-polo/polo_formulario',
		controller: 'DepartamentoPoloEdicaoController'
	})    
	.when(systemUriConstants.gestaoPerfil.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-perfil/perfil',
		controller: 'PerfilUsuarioController'
	})    
	.when(systemUriConstants.gestaoPerfilEdicao.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-perfil/perfil_usuario_formulario',
		controller: 'PerfilUsuarioEdicaoController'
	})    
	.when(systemUriConstants.gestaoPerfilAlteracaoSenha.url, {
		templateUrl: applicationSettings.context + '/expose/gestao-perfil/perfil_alteracao_senha',
		controller: 'PerfilUsuarioAlteracaoSenhaController'
	})  
	.when(systemUriConstants.avisos.url, {
		templateUrl: applicationSettings.context + '/expose/avisos/avisos',
		controller: 'AvisosController'
	})
	.when(systemUriConstants.video.url, {
		templateUrl: applicationSettings.context + '/expose/video/video',
    controller: 'VideoController'
	})   
	.when(systemUriConstants.buscaTextual.url, {
		templateUrl: applicationSettings.context + '/expose/resultado-busca/resultado-busca',
    controller: 'BuscaTextualController'
	})      
	.when(systemUriConstants.naoAutorizado.url, {
		templateUrl: applicationSettings.context + '/expose/main/acesso_restrito'
	})
	.when(systemUriConstants.naoEncontrado.url, {
		templateUrl: applicationSettings.context + '/expose/main/404',
	})
	.otherwise({templateUrl: applicationSettings.context + '/expose/main/404'});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}

module.exports = route;
