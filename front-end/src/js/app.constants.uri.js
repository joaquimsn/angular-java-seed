'use strict';

function SystemUriConstants() {
    var context = '/extranetead-portal';
    return {
        home: {
            page: 'home',
            display:'Home',
            url: context + '/home',
            skip: false,
            customStyle: ''
        },
        login: {
            page: 'login',
            display:'Login',
            url: context + '/login',
            skip: false,
            customStyle: ''
        },
        sobreRede: {
            page: 'sobre-rede',
            display:'Sobre a rede',
            url: context + '/pagina/sobre-a-rede',
            skip: false,
            customStyle: ''
        },
        niveisEnsino: {
            page: 'niveis-ensino',
            display:'Níveis de ensino',
            url: context + '/pagina/niveis-de-ensino',
            skip: false,
            customStyle: ''
        },
        niveisEnsinoFic: {
            page: 'niveis-ensino.fic',
            display:'FIC',
            url: context + '/pagina/niveis-de-ensino/fic',
            skip: false,
            customStyle: ''
        },
        niveisEnsinoTecnico: {
            page: 'niveis-ensino.tecnico',
            display:'Técnico',
            url: context + '/pagina/niveis-de-ensino/tecnico',
            skip: false,
            customStyle: ''
        },
        niveisEnsinoSuperior: {
            page: 'niveis-ensino.superior',
            display:'Superior',
            url: context + '/pagina/niveis-de-ensino/superior',
            skip: false,
            customStyle: ''
        },
        vendas: {
            page: 'vendas',
            display:'Vendas',
            url: context + '/pagina/vendas',
            skip: false,
            customStyle: ''
        },
        estrategiaVenda: {
            page: 'vendas.estrategia',
            display:'Estratégia de vendas',
            url: context + '/pagina/vendas/estrategias-de-vendas',
            skip: false,
            customStyle: ''
        },
        dicaVenda: {
            page: 'vendas.dica',
            display:'Dicas de Vendas',
            url: context + '/pagina/vendas/dicas-de-vendas',
            skip: false,
            customStyle: ''
        },
        planoVenda: {
            page: 'vendas.planos',
            display:'Planos de vendas',
            url: context + '/pagina/vendas/planos-de-vendas',
            skip: false,
            customStyle: ''
        },
        planoVendaLancamento: {
            page: 'vendas.planos.lancamento',
            display:'Lançamento',
            url: context + '/pagina/vendas/planos-de-vendas/cadastro',
            skip: false,
            customStyle: ''
        },
        cotasPsg: {
            page: 'vendas.psg',
            display:'Cotas PSG',
            url: context + '/pagina/vendas/cotas-psg',
            skip: false,
            customStyle: ''
        },        
        cotasPsgLancamento: {
            page: 'vendas.psg.lancamento',
            display:'Lançamento',
            url: context + '/pagina/vendas/cotas-psg/cadastro',
            skip: false,
            customStyle: ''
        },        
        comunicacao: {
            page: 'comunicacao',
            display:'Comunicação',
            url: context + '/pagina/comunicacao',
            skip: false,
            customStyle: ''
        },
        pecas: {
            page: 'comunicacao.pecas',
            display:'Peças de comunicação',
            url: context + '/pagina/comunicacao/pecas-de-comunicacao',
            skip: false,
            customStyle: ''
        },
        assessoria: {
            page: 'comunicacao.assessoria',
            display:'Assessoria de imprensa',
            url: context + '/pagina/comunicacao/assessoria-de-imprensa',
            skip: false,
            customStyle: ''
        },        
        noticias: {
            page: 'comunicacao.noticias',
            display:'Notícias',
            url: context + '/pagina/comunicacao/noticias',
            skip: false,
            customStyle: ''
        },
        noticiaDetalhe: {
            page: 'comunicacao.noticias.detalhe',
            display:'Detalhe',
            url: context + '/pagina/comunicacao/noticias/:path',
            skip: false,
            customStyle: ''
        },
        capacitacao: {
            page: 'capacitacao',
            display:'Capacitação',
            url: context + '/pagina/capacitacao',
            skip: false,
            customStyle: ''
        },
        capacitacaoDetalhe: {
            page: 'capacitacao.detalhe',
            display:'',
            url: context + '/pagina/capacitacao/detalhe/:path',
            skip: false,
            customStyle: ''
        },
        arquivos: {
            page: 'capacitacao.arquivos',
            display:'Arquivos',
            url: context + '/pagina/capacitacao/arquivos',
            skip: false,
            customStyle: ''
        },        
        producaoFinanceiro: {
            page: 'producao-financeiro',
            display:'Produção e financeiro',
            url: context + '/pagina/producao-financeiro',
            skip: false,
            customStyle: ''
        },
        producao: {
            page: 'producao-financeiro.relatorio-producao',
            display:'Relatório produção',
            url: context + '/pagina/producao-financeiro/relatorio-producao',
            skip: false,
            customStyle: ''
        },
        financeiro: {
            page: 'producao-financeiro.relatorio-financeiro',
            display:'Relatório financeiro',
            url: context + '/pagina/producao-financeiro/relatorio-financeiro',
            skip: false,
            customStyle: ''
        },        
        contato: {
            page: 'contato',
            display:'Contato',
            url: context + '/pagina/contato',
            skip: false,
            customStyle: ''
        },
        faq: {
            page: 'contato.faq',
            display:'FAQ',
            url: context + '/pagina/contato/faq',
            skip: false,
            customStyle: ''
        },
        faleConosco: {
            page: 'contato.fale-conosco',
            display:'Fale conosco',
            url: context + '/pagina/contato/fale-conosco',
            skip: false,
            customStyle: ''
        },        
        alteracaoSenha: {
            page: 'alteracaoSenha',
            display:'Alteração de senha',
            url: context + '/alteracao-senha/:token',
            skip: false,
            customStyle: ''
        },
        gestaoUsuario: {
            page: 'gestao-usuario',
            display:'Gestão usuário',
            url: context + '/gestao/usuario',
            skip: false,
            customStyle: ''
        },
        gestaoUsuarioCadastro: {
            page: 'gestao-usuario.cadastro',
            display:'Incluir usuário',
            url: context + '/gestao/usuario/cadastro',
            skip: false,
            customStyle: ''
        },
        gestaoUsuarioEdicao: {
            page: 'gestao-usuario.edicao',
            display:'Editar usuário',
            url: context + '/gestao/usuario/edicao/:path',
            skip: false,
            customStyle: ''
        },
        gestaoUsuarioAprovacao: {
            page: 'gestao-usuario.aprovacao',
            display:'Aprovação usuário',
            url: context + '/gestao/usuario/aprovacao',
            skip: false,
            customStyle: ''
        },
        gestaoPolo: {
            page: 'gestao-polo',
            display:'Gestão polo',
            url: context + '/gestao/polos',
            skip: false,
            customStyle: ''
        },
        gestaoPoloCadastro: {
            page: 'gestao-polo.cadastro',
            display:'Incluir polo',
            url: context + '/gestao/polos/cadastro',
            skip: false,
            customStyle: ''
        },
        gestaoPoloEdicao: {
            page: 'gestao-polo.edicao',
            display:'Editar polo',
            url: context + '/gestao/polos/edicao/:path',
            skip: false,
            customStyle: ''
        },
        gestaoPerfil: {
            page: 'gestao-perfil',
            display:'Meus dados',
            url: context + '/gestao/perfil',
            skip: false,
            customStyle: ''
        },
        gestaoPerfilEdicao: {
            page: 'gestao-perfil.edicao',
            display:'Editar',
            url: context + '/gestao/perfil/edicao',
            skip: false,
            customStyle: ''
        },
        gestaoPerfilAlteracaoSenha: {
            page: 'gestao-perfil.alterar-senha',
            display:'Alterar senha',
            url: context + '/gestao/perfil/alteracao-senha',
            skip: false,
            customStyle: ''
        },
        avisos: {
            page: 'avisos',
            display:'Avisos',
            url: context + '/pagina/avisos',
            skip: false,
            customStyle: ''
        },
        video: {
            page: 'video',
            display:'Videos',
            url: context +'/pagina/video',
            skip: false,
            customStyle: ''
        },
        buscaTextual: {
            page: 'busca-textual',
            display:'Pesquisa',
            url: context +'/pagina/busca-textual',
            skip: false,
            customStyle: ''
        },
        naoEncontrado: {
            page: 'nao-encontrado',
            display:'Não encontrado',
            url: context + '/404',
            skip: false,
            customStyle: ''
        },
        naoAutorizado: {
            page: 'nao-autorizado',
            display:'Não autorizado',
            url: context + '/nao-autorizado',
            skip: false,
            customStyle: ''
        },
        erro: {
            page: 'erro',
            display:'Erro',
            url: context + '/erro',
            skip: false,
            customStyle: ''
        }
    };
}

module.exports = new  SystemUriConstants();
