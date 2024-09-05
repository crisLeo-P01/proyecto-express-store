const express = require('express');

const productsRouter = require('./products.router');
const categoriasRouter = require('./categorias.router');
const usuariosRouter = require('./usuarios.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/categorias', categoriasRouter);
  router.use('/usuarios', usuariosRouter);
};

module.exports = routerApi;
