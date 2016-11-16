module.exports = function (express) {
  var router = express.Router();
  var routes = [
    '/',
    '/:pagina',
    '/:pagina/:item',
    '/pagina/:module/:item',
    '/pagina/:module/:item/:code',
    '/pagina/:module/edicao/:item',
    '/gestao/:funcionalidade',
    '/gestao/:funcionalidade/:acao',
    '/gestao/:funcionalidade/edicao/:item'
  ];

  router.get(routes, function (req, res) {
    res.render('index');
  });

  return router;
};
