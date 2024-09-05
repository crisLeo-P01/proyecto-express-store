const express = require('express');
const ProductService = require('./../services/product.service.js');

const router = express.Router();
const service = new ProductService();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  const nuevoProducto = service.create(body);
  res.status(201).json({ nuevoProducto });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const rta = service.delete(id, body);
  res.json(rta);
})

module.exports = router;
